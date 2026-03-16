'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, Mail, ChevronDown } from 'lucide-react';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
    tag: 'Building Engineering',
    headline: ["Building", "Kenya's", "Future"],
    accent: 1,
    sub: 'World-class commercial and residential construction delivered to international standards across Kenya.',
  },
  {
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80',
    tag: 'Water Engineering',
    headline: ['Delivering', 'Clean Water', 'For All'],
    accent: 1,
    sub: 'Sustainable water infrastructure — boreholes, treatment plants, and supply systems for communities and industry.',
  },
  {
    img: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1600&q=80',
    tag: 'Road Engineering',
    headline: ['Roads That', 'Connect', 'Nations'],
    accent: 1,
    sub: 'Professional highway design and construction — from rural access roads to major urban networks.',
  },
  {
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80',
    tag: 'Real Estate',
    headline: ['Spaces Where', 'Life', 'Thrives'],
    accent: 1,
    sub: 'End-to-end real estate development and management — from concept to completion across Nairobi and beyond.',
  },
];

const stats = [
  { num: '10+', label: 'Years Active' },
  { num: '200+', label: 'Projects Done' },
  { num: '2013', label: 'Est. Nairobi' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  function goTo(i: number) {
    if (i !== current) setCurrent(i);
  }

  const slide = slides[current];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image crossfade */}
      <AnimatePresence>
        {slides.map((s, i) =>
          i === current ? (
            <motion.div
              key={i}
              className="absolute inset-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: 'easeOut' }}
              >
                <img src={s.img} alt={s.tag} className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(13,21,38,0.92) 0%, rgba(13,21,38,0.65) 60%, rgba(13,21,38,0.3) 100%)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,21,38,0.7) 0%, transparent 50%)' }} />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      <div className="absolute inset-0 z-[1] grid-bg opacity-40" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,123,32,0.12) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl">

          <AnimatePresence mode="wait">
            <motion.div
              key={"tag-" + current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 bg-orange/15 border border-orange/35 px-4 py-1.5 rounded-full text-orange text-[11px] tracking-[2px] uppercase font-semibold mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse-dot" />
              {slide.tag} · Est. 2013
            </motion.div>
          </AnimatePresence>

          <div className="mb-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={"h-" + current}
                className="font-bebas leading-[0.88] text-white"
                style={{ fontSize: 'clamp(60px,9vw,110px)' }}
              >
                {slide.headline.map((word, wi) => (
                  <motion.span
                    key={wi}
                    className="block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.55, delay: wi * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    style={{ color: wi === slide.accent ? '#F47B20' : 'white' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={"sub-" + current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-white/60 text-[17px] leading-relaxed max-w-xl mb-10"
            >
              {slide.sub}
            </motion.p>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#portfolio"
              className="flex items-center gap-2 bg-orange text-white px-8 py-4 text-[13px] tracking-[1.5px] uppercase font-bold rounded-sm hover:bg-orange/85 transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(244,123,32,0.45)]">
              <HardHat size={16} /> View Projects
            </a>
            <a href="#contact"
              className="flex items-center gap-2 border border-white/25 text-white px-8 py-4 text-[13px] tracking-[1.5px] uppercase font-bold rounded-sm hover:border-orange hover:text-orange transition-all hover:-translate-y-1 backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.04)' }}>
              <Mail size={16} /> Get a Quote
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="grid grid-cols-3 gap-4 mt-14 max-w-lg"
          >
            {stats.map(s => (
              <div key={s.label} className="glass rounded-xl p-5 text-center backdrop-blur-md">
                <div className="font-bebas text-4xl text-orange leading-none">{s.num}</div>
                <div className="text-[10px] tracking-[2px] uppercase text-white/45 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Slide controls */}
        <div className="absolute bottom-10 right-6 flex flex-col items-end gap-4">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={"h-1 rounded-full transition-all duration-500 " + (i === current ? 'w-8 bg-orange' : 'w-2 bg-white/30 hover:bg-white/60')}
              />
            ))}
          </div>
          <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              key={current}
              className="h-full bg-orange rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5.5, ease: 'linear' }}
            />
          </div>
          <div className="text-white/40 text-[12px] tracking-[2px]">
            <span className="text-orange font-bold">{String(current + 1).padStart(2,'0')}</span>
            {' / '}
            {String(slides.length).padStart(2,'0')}
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] tracking-[3px] uppercase">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </div>
    </section>
  );
}
