'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { id: 1, cat: 'building', img: '/images/building.jpg', title: 'Commercial Complex', loc: 'Westlands, Nairobi', span: 2 },
  { id: 2, cat: 'road',     img: '/images/road.jpg',  title: 'Urban Road Network',   loc: 'Nairobi County',    span: 1 },
  { id: 3, cat: 'water',    img: '/images/water.jpg',  title: 'Water Treatment Plant', loc: 'Mombasa',           span: 1 },
  { id: 4, cat: 'building', img: '/images/building2.jpg',  title: 'Residential Estate',    loc: 'Kayole, Nairobi',   span: 1 },
  { id: 5, cat: 'road',     img: '/images/road2.jpg',  title: 'Bridge Construction',   loc: 'Athi River',        span: 2 },
  { id: 6, cat: 'water',    img: '/images/water2.jpg', title: 'Community Borehole',  loc: 'Kisumu',            span: 1 },
];

const catLabels: Record<string, string> = {
  building: 'Building Engineering',
  road: 'Road Engineering',
  water: 'Water Engineering',
};

const filters = ['all', 'building', 'water', 'road'];

export default function Portfolio() {
  const [active, setActive] = useState('all');
  const filtered = projects.filter(p => active === 'all' || p.cat === active);

  return (
    <section id="portfolio" style={{ background: '#0D1526' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 text-orange text-[11px] tracking-[3px] uppercase font-semibold mb-4">
            <span className="w-8 h-0.5 bg-orange" /> Our Work
          </div>
          <h2 className="font-bebas text-white mb-4" style={{ fontSize: 'clamp(38px,5vw,64px)' }}>
            Featured <span className="text-orange">Projects</span>
          </h2>
          <p className="text-white/50 text-[16px] max-w-xl leading-relaxed">
            A selection of completed works across Nairobi, Mombasa, and beyond.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 mt-10 mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={"px-5 py-2 rounded-full text-[13px] tracking-wide capitalize border transition-all font-medium " +
                (active === f
                  ? 'bg-orange border-orange text-white'
                  : 'bg-transparent border-white/15 text-white/55 hover:border-orange hover:text-orange')}
            >
              {f === 'all' ? 'All Projects' : catLabels[f]}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map(p => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                style={{ gridColumn: "span " + Math.min(p.span, active !== 'all' ? 1 : p.span) }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[4/3]"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,21,38,0.92) 0%, rgba(13,21,38,0.1) 60%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-[10px] tracking-[2px] uppercase text-orange mb-1.5">{catLabels[p.cat]}</div>
                  <div className="text-white font-bold text-xl leading-tight">{p.title}</div>
                  <div className="text-white/45 text-[12px] mt-1">📍 {p.loc}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
