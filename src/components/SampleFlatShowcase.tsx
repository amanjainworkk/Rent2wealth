import React, { useState } from 'react';
import {
  Bed,
  Bath,
  Wind,
  Check,
  ShieldCheck,
  Ruler,
  Maximize2,
  Sparkles
} from 'lucide-react';

type SpaceType = 'bedroom' | 'washroom' | 'balcony';

interface SpaceData {
  id: SpaceType;
  title: string;
  sqft: string;
  dimensions: string;
  primaryImage: string;
  altImage: string;
  imageCaption: string;
  description: string;
  bedSpec?: string;
  sizeBreakdown: { label: string; value: string }[];
  highlights: string[];
}

export const SampleFlatShowcase: React.FC = () => {
  const [activeSpace, setActiveSpace] = useState<SpaceType>('bedroom');
  const [activeAngle, setActiveAngle] = useState<'primary' | 'alt'>('primary');

  const spaces: Record<SpaceType, SpaceData> = {
    bedroom: {
      id: 'bedroom',
      title: 'Private Bedroom & Study',
      sqft: '75 sq ft',
      dimensions: '7.5 ft × 10.0 ft',
      primaryImage: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1600&q=80',
      altImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=80',
      imageCaption: 'Accurate 75 sq ft room (7.5\' × 10\'): 6\' × 4\' platform bed fitted against wall, leaving a 3.5\' corridor.',
      bedSpec: '6 ft × 4 ft Platform Bed with Storage Drawers',
      description: 'Accurately proportioned 75 sq ft room (7.5 ft width × 10.0 ft depth). The 6 ft × 4 ft bed takes up 4 feet of the 7.5 ft width, providing a comfortable sleeping sanctuary while leaving a dedicated 3.5 ft corridor to your study desk and walkout balcony.',
      sizeBreakdown: [
        { label: 'Room Dimensions', value: '7.5 ft × 10.0 ft (75 sq ft)' },
        { label: 'Bed Footprint', value: '6 ft × 4 ft (occupies 24 sq ft)' },
        { label: 'Walkway Clearance', value: '3.5 ft width along room length' },
        { label: 'Storage', value: 'Under-bed pull-out drawers + Wardrobe' }
      ],
      highlights: [
        '6 ft × 4 ft wooden platform bed with two deep pull-out storage drawers',
        'Fitted flush against the acoustic wall to maximize walkable floor space',
        'Dedicated oak study desk with ergonomic chair and dual power outlets',
        'Direct sliding glass door access out to your private balcony',
        'Full-length mirror and ceiling fan with integrated warm LED light'
      ]
    },
    washroom: {
      id: 'washroom',
      title: 'Attached En-Suite Washroom',
      sqft: '25 sq ft',
      dimensions: '5.0 ft × 5.0 ft',
      primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/EFTA00000311_-_Modern_bathroom_with_white_tiles_a_glass_shower_enclosure_a_toilet_and_a_grey_rug_on_the_floor.jpg',
      altImage: 'https://upload.wikimedia.org/wikipedia/commons/3/37/EFTA00000039_-_Compact_bathroom_featuring_a_toilet_shower_with_tiled_walls_and_a_framed_artwork_above_the_toilet.jpg',
      imageCaption: 'Authentic 25 sq ft en-suite (5\' × 5\'): Compact walk-in glass shower, toilet, and vanity. Strictly NO bathtub.',
      description: 'Accurately proportioned 25 sq ft private en-suite bathroom (5.0 ft × 5.0 ft). Space-efficient layout featuring a walk-in glass shower enclosure, wall-hung toilet, and vanity basin. Strictly shower-only (no bathtub could fit in 25 sq ft). 100% private to your suite.',
      sizeBreakdown: [
        { label: 'Total Footprint', value: '5.0 ft × 5.0 ft (25 sq ft)' },
        { label: 'Walk-in Shower', value: '2.5 ft × 2.5 ft glass shower stall (No bathtub)' },
        { label: 'Vanity & Basin', value: 'Floating vanity cabinet with LED mirror' },
        { label: 'Toilet', value: 'Compact wall-hung toilet with cistern' }
      ],
      highlights: [
        'Compact 5\' × 5\' square footprint engineered with zero wasted clearance',
        'Walk-in glass rain shower (no bathtub) with continuous hot water supply',
        'Floating vanity sink with smart touch-sensor anti-fog LED mirror',
        'Concealed cistern toilet with hygienic bidet faucet',
        '100% private attached access directly from inside your bedroom'
      ]
    },
    balcony: {
      id: 'balcony',
      title: 'Private Walkout Balcony',
      sqft: '35 sq ft',
      dimensions: '7.0 ft × 5.0 ft',
      primaryImage: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Two_chairs_and_a_table_at_the_balcony_of_a_Roxy_Beach_Apartment.jpg',
      altImage: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Chair_on_the_balcony_2015.JPG',
      imageCaption: 'Authentic 35 sq ft outdoor balcony: Real outdoor terrace with chairs, coffee table, and safety railing.',
      description: 'Accurately proportioned 35 sq ft private outdoor balcony (7.0 ft wide × 5.0 ft deep). An authentic outdoor terrace accessed directly from your bedroom through double-glazed sliding glass doors, furnished with outdoor seating, a coffee table, and open air railings.',
      sizeBreakdown: [
        { label: 'Balcony Dimensions', value: '7.0 ft wide × 5.0 ft deep (35 sq ft)' },
        { label: 'Railing Span', value: '7 ft safety balustrade with open-air view' },
        { label: 'Seating Footprint', value: 'Outdoor chairs & bistro coffee table' },
        { label: 'Door Access', value: 'Full-height acoustic sliding glass doors' }
      ],
      highlights: [
        'Real 7.0 ft × 5.0 ft private outdoor terrace overlooking the skyline',
        'Bistro coffee table and outdoor chairs for morning coffee and breeze',
        'Heavy-duty safety balustrade with open sky and natural ventilation',
        'Dedicated potted plant planters with automated drip irrigation',
        'Non-slip exterior stone tiles with weatherproof electrical point'
      ]
    }
  };

  const current = spaces[activeSpace];
  const displayImage = activeAngle === 'primary' ? current.primaryImage : current.altImage;

  return (
    <section id="sample-flat-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Ruler className="w-3.5 h-3.5 text-cyan-400" />
          <span>Accurate Scale Photography</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
          True-to-Scale Private Suite.
        </h2>
        <p className="mt-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
          Photos accurately representing the exact dimensions: <strong className="text-white">75 sq ft room (7.5&apos; × 10&apos;)</strong> with a <strong className="text-amber-300">6&apos; × 4&apos; bed</strong>, <strong className="text-purple-300">25 sq ft washroom (5&apos; × 5&apos;)</strong>, and <strong className="text-emerald-300">35 sq ft balcony (7&apos; × 5&apos;)</strong>.
        </p>
      </div>

      {/* 3 Space Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900 border border-white/[0.1] gap-1.5 sm:gap-2">
          <button
            onClick={() => {
              setActiveSpace('bedroom');
              setActiveAngle('primary');
            }}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeSpace === 'bedroom'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold shadow-md shadow-cyan-500/20'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Bed className="w-4 h-4" />
            <span>Bedroom (75 sq ft)</span>
          </button>

          <button
            onClick={() => {
              setActiveSpace('washroom');
              setActiveAngle('primary');
            }}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeSpace === 'washroom'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold shadow-md shadow-cyan-500/20'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Bath className="w-4 h-4" />
            <span>Washroom (25 sq ft)</span>
          </button>

          <button
            onClick={() => {
              setActiveSpace('balcony');
              setActiveAngle('primary');
            }}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeSpace === 'balcony'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold shadow-md shadow-cyan-500/20'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Wind className="w-4 h-4" />
            <span>Balcony (35 sq ft)</span>
          </button>
        </div>
      </div>

      {/* Main Single Showcase Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-b from-[#0a111c] to-[#060a12] border border-white/[0.12] rounded-3xl p-6 sm:p-8 shadow-2xl">
        
        {/* Authentic Photo Display Container */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black shadow-xl border border-white/[0.1] group">
            <img
              src={displayImage}
              alt={`${current.title} (${current.sqft})`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            
            {/* Dimension Badge Top Left */}
            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-cyan-400/40 text-white font-mono text-xs shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-cyan-300">{current.sqft}</span>
              <span className="text-neutral-400">({current.dimensions})</span>
            </div>

            {/* Bed Spec Badge if Bedroom */}
            {current.bedSpec && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-amber-400/40 text-amber-300 text-[11px] font-mono shadow-lg">
                Bed: 6 ft × 4 ft
              </div>
            )}

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl sm:text-2xl font-heading font-bold">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 font-light leading-relaxed">
                {current.imageCaption}
              </p>
            </div>
          </div>

          {/* Perspective Angle Switcher */}
          <div className="flex items-center justify-between px-1 text-xs font-mono">
            <span className="text-neutral-400">Photo Perspective:</span>
            <div className="inline-flex gap-2">
              <button
                onClick={() => setActiveAngle('primary')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer border ${
                  activeAngle === 'primary'
                    ? 'bg-cyan-400 text-black font-bold border-cyan-400'
                    : 'bg-black/50 text-neutral-400 border-white/[0.1] hover:text-white'
                }`}
              >
                Angle 1 (Main Scale)
              </button>
              <button
                onClick={() => setActiveAngle('alt')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer border ${
                  activeAngle === 'alt'
                    ? 'bg-cyan-400 text-black font-bold border-cyan-400'
                    : 'bg-black/50 text-neutral-400 border-white/[0.1] hover:text-white'
                }`}
              >
                Angle 2 (Detail View)
              </button>
            </div>
          </div>
        </div>

        {/* Space Breakdown & Details Area */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-1 font-mono">
              <span className="text-xs uppercase text-cyan-400 font-bold tracking-wider">
                Certified Dimensions
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                {current.sqft}
              </span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">
              {current.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              {current.description}
            </p>
          </div>

          {/* Exact Size Measurements Table */}
          <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.08] divide-y divide-white/[0.06] text-xs font-mono">
            {current.sizeBreakdown.map((row, idx) => (
              <div key={idx} className="flex justify-between py-2 first:pt-0 last:pb-0">
                <span className="text-neutral-400">{row.label}:</span>
                <span className="text-white font-semibold">{row.value}</span>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-2.5">
            {current.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                <div className="w-4 h-4 rounded-full bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Guarantee Banner */}
          <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Private · Zero Sharing</span>
            </div>
            <span>Gurugram Co-Living</span>
          </div>

        </div>

      </div>

      {/* Summary Footer Bar */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center font-mono">
        <div
          onClick={() => {
            setActiveSpace('bedroom');
            setActiveAngle('primary');
          }}
          className={`p-3.5 rounded-2xl border transition-colors cursor-pointer ${
            activeSpace === 'bedroom'
              ? 'bg-cyan-500/15 border-cyan-400'
              : 'bg-black/40 border-white/[0.08] hover:border-white/20'
          }`}
        >
          <span className="text-[10px] text-neutral-400 block uppercase">BEDROOM</span>
          <span className="text-sm font-bold text-white">75 sq ft (7.5&apos; × 10&apos;)</span>
          <span className="text-[10px] text-amber-300 block">Bed: 6 ft × 4 ft</span>
        </div>

        <div
          onClick={() => {
            setActiveSpace('washroom');
            setActiveAngle('primary');
          }}
          className={`p-3.5 rounded-2xl border transition-colors cursor-pointer ${
            activeSpace === 'washroom'
              ? 'bg-cyan-500/15 border-cyan-400'
              : 'bg-black/40 border-white/[0.08] hover:border-white/20'
          }`}
        >
          <span className="text-[10px] text-neutral-400 block uppercase">WASHROOM</span>
          <span className="text-sm font-bold text-purple-300">25 sq ft (5&apos; × 5&apos;)</span>
          <span className="text-[10px] text-neutral-400 block">Attached Private Bath</span>
        </div>

        <div
          onClick={() => {
            setActiveSpace('balcony');
            setActiveAngle('primary');
          }}
          className={`p-3.5 rounded-2xl border transition-colors cursor-pointer ${
            activeSpace === 'balcony'
              ? 'bg-cyan-500/15 border-cyan-400'
              : 'bg-black/40 border-white/[0.08] hover:border-white/20'
          }`}
        >
          <span className="text-[10px] text-neutral-400 block uppercase">BALCONY</span>
          <span className="text-sm font-bold text-emerald-300">35 sq ft (7&apos; × 5&apos;)</span>
          <span className="text-[10px] text-neutral-400 block">Outdoor Walkout Terrace</span>
        </div>
      </div>

    </section>
  );
};
