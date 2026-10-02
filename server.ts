import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

interface Lead {
  Lead_ID: string;
  Submission_Timestamp: string;
  Full_Name: string;
  Phone: string;
  Email: string;
  Current_City: string;
  Income_Bracket: string;
  Employer_Industry: string;
  Current_Monthly_Rent: number;
  Target_Purchase_Years: number;
  Priority_Status: string;
  Occupancy_Preference: string;
  Relocate_Preference: string;
  Dietary_Preference: string;
  Gym_Usage: string;
}

const PORT = 3000;
const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helper to read leads safely
function readLeads(): Lead[] {
  try {
    if (!fs.existsSync(LEADS_FILE)) {
      fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), "utf8");
      return [];
    }
    const raw = fs.readFileSync(LEADS_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("Error reading leads file:", err);
    return [];
  }
}

// Helper to write leads safely
function writeLeads(leads: Lead[]): boolean {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error writing leads file:", err);
    return false;
  }
}

async function startServer() {
  const app = express();

  // SEO & Crawler Header Middleware:
  // Ensure preview, non-production, and production deployments do NOT carry any X-Robots-Tag: noindex header.
  // Explicitly allow search engines and crawlers to index and follow pages.
  app.use((_req: Request, res: Response, next) => {
    res.removeHeader("X-Robots-Tag");
    res.setHeader("X-Robots-Tag", "index, follow, all");
    next();
  });

  // Middleware for parsing JSON bodies (up to 50mb for high-res blueprint uploads)
  app.use(express.json({ limit: "50mb" }));

  // --- API Endpoints ---

  // Explicit robots.txt & sitemap.xml routes ensuring HTTP 200 for Googlebot and search crawlers
  app.get("/robots.txt", (_req: Request, res: Response) => {
    const robotsPath = path.join(process.cwd(), "public", "robots.txt");
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("X-Robots-Tag", "index, follow, all");
    if (fs.existsSync(robotsPath)) {
      return res.status(200).sendFile(robotsPath);
    }
    return res.status(200).send("User-agent: *\nAllow: /\nSitemap: /sitemap.xml\n");
  });

  app.get("/sitemap.xml", (_req: Request, res: Response) => {
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("X-Robots-Tag", "index, follow, all");
    if (fs.existsSync(sitemapPath)) {
      return res.status(200).sendFile(sitemapPath);
    }
    return res.status(404).send("<error>Sitemap not found</error>");
  });

  // Health check & server status
  app.get("/api/health", (_req: Request, res: Response) => {
    const leads = readLeads();
    res.json({
      status: "ok",
      platform: "Rent2Wealth SPV Underwriting Engine",
      uptimeSeconds: Math.floor(process.uptime()),
      liveSubmissionsCount: leads.length,
      timestamp: new Date().toISOString(),
    });
  });

  // GET all live leads (no dummy samples)
  app.get("/api/leads", (_req: Request, res: Response) => {
    const leads = readLeads();
    res.json({
      success: true,
      count: leads.length,
      leads,
    });
  });

  // POST a new live applicant lead with validation
  app.post("/api/leads", (req: Request, res: Response) => {
    try {
      const body = req.body;

      // Robust Validation
      if (!body.Full_Name || typeof body.Full_Name !== "string" || body.Full_Name.trim().length < 2) {
        return res.status(400).json({ success: false, error: "Valid applicant full name is required." });
      }

      if (!body.Email || typeof body.Email !== "string" || !body.Email.includes("@")) {
        return res.status(400).json({ success: false, error: "A valid email address is required." });
      }

      if (!body.Phone || typeof body.Phone !== "string" || body.Phone.trim().length < 7) {
        return res.status(400).json({ success: false, error: "A valid contact phone number is required." });
      }

      const leads = readLeads();

      // Generate clean sequential ID
      const currentYear = new Date().getFullYear();
      const sequenceNumber = (leads.length + 1).toString().padStart(4, "0");
      const leadId = body.Lead_ID && !body.Lead_ID.includes("dummy")
        ? body.Lead_ID
        : `R2W-${currentYear}-${sequenceNumber}`;

      const now = new Date();
      const formattedTimestamp = now.toISOString().replace("T", " ").substring(0, 19);

      const newLead: Lead = {
        Lead_ID: leadId,
        Submission_Timestamp: body.Submission_Timestamp || formattedTimestamp,
        Full_Name: body.Full_Name.trim(),
        Phone: body.Phone.trim(),
        Email: body.Email.trim().toLowerCase(),
        Current_City: (body.Current_City || "Gurugram").trim(),
        Income_Bracket: body.Income_Bracket || "₹35L - ₹50L / year",
        Employer_Industry: (body.Employer_Industry || "Corporate").trim(),
        Current_Monthly_Rent: Number(body.Current_Monthly_Rent) || 45000,
        Target_Purchase_Years: Number(body.Target_Purchase_Years) || 3,
        Priority_Status: body.Priority_Status || "Medium - Phase 1 Member",
        Occupancy_Preference: body.Occupancy_Preference || "Double Occupancy (Standard)",
        Relocate_Preference: body.Relocate_Preference || "Gurugram (Cyber City / Golf Course Rd)",
        Dietary_Preference: body.Dietary_Preference || "Vegetarian",
        Gym_Usage: body.Gym_Usage || "Daily / High",
      };

      // Prepend the new live lead
      const updatedLeads = [newLead, ...leads];
      const saved = writeLeads(updatedLeads);

      if (!saved) {
        return res.status(500).json({ success: false, error: "Failed to persist submission to database." });
      }

      console.log(`[Rent2Wealth Live Server] New application recorded: ${newLead.Lead_ID} - ${newLead.Full_Name}`);
      return res.status(201).json({
        success: true,
        message: "Application securely registered with SPV allocation registry.",
        lead: newLead,
      });
    } catch (err: any) {
      console.error("Error creating lead:", err);
      return res.status(500).json({ success: false, error: "Internal server error processing submission." });
    }
  });

  // DELETE a single lead by Lead_ID
  app.delete("/api/leads/:id", (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const leads = readLeads();
      const initialCount = leads.length;
      const updatedLeads = leads.filter((l) => l.Lead_ID !== id);

      if (updatedLeads.length === initialCount) {
        return res.status(404).json({ success: false, error: "Lead not found." });
      }

      writeLeads(updatedLeads);
      return res.json({ success: true, message: `Lead ${id} removed successfully.` });
    } catch (err) {
      console.error("Error deleting lead:", err);
      return res.status(500).json({ success: false, error: "Internal server error." });
    }
  });

  // DELETE all leads (reset/purge data)
  app.delete("/api/leads", (_req: Request, res: Response) => {
    try {
      writeLeads([]);
      return res.json({ success: true, message: "All submission records cleared." });
    } catch (err) {
      console.error("Error purging leads:", err);
      return res.status(500).json({ success: false, error: "Internal server error." });
    }
  });

  // --- Architectural Blueprint Poster Routes ---
  const BLUEPRINT_PATH = path.join(process.cwd(), "public", "alpha_house_blueprint.png");

  app.get("/api/blueprint-status", (_req: Request, res: Response) => {
    try {
      const exists = fs.existsSync(BLUEPRINT_PATH);
      return res.json({
        exists,
        url: exists ? "/alpha_house_blueprint.png" : null,
      });
    } catch {
      return res.json({ exists: false, url: null });
    }
  });

  app.post("/api/upload-blueprint", (req: Request, res: Response) => {
    try {
      const { imageBase64 } = req.body;
      if (!imageBase64) {
        return res.status(400).json({ success: false, error: "Missing imageBase64 field" });
      }

      // Strip data:image/...;base64, prefix if present
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(cleanBase64, "base64");

      // Ensure public directory exists
      const publicDir = path.join(process.cwd(), "public");
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      fs.writeFileSync(BLUEPRINT_PATH, buffer);
      console.log(`[Rent2Wealth] Saved blueprint image to ${BLUEPRINT_PATH} (${buffer.length} bytes)`);

      return res.json({
        success: true,
        message: "Blueprint image saved successfully",
        url: "/alpha_house_blueprint.png",
      });
    } catch (err: any) {
      console.error("Error uploading blueprint:", err);
      return res.status(500).json({ success: false, error: err.message || "Failed to save blueprint" });
    }
  });

  // --- Vite / Frontend Middleware ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath, {
      setHeaders: (res) => {
        res.setHeader("X-Robots-Tag", "index, follow, all");
      }
    }));
    app.get("*", (_req: Request, res: Response) => {
      res.setHeader("X-Robots-Tag", "index, follow, all");
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Rent2Wealth] Live server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Fatal error starting Rent2Wealth server:", err);
  process.exit(1);
});
