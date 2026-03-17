'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    quote: 'Extreecon delivered our commercial complex on time and within budget. The quality of workmanship exceeded our expectations. We will definitely engage them again.',
    name: 'James Kariuki',
    role: 'Property Developer · Westlands',
  },
  {
    img: 'https://images.unsplash.com/photo-1494790108755-2616b9e33aa5?w=200&q=80',
    quote: 'The water engineering team from Extreecon transformed our community\'s access to clean water. Professional, efficient, and truly dedicated to their craft.',
    name: 'Amina Hassan',
    role: 'Community Chairman · Mombasa',
  },
  {
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80',
    quote: 'We contracted Extreecon for road rehabilitation in our area. Their team was highly skilled and maintained international standards throughout. Outstanding results.',
    name: 'Peter Omondi',
    role: 'County Engineer · Nairobi',
  },
  {
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    quote: 'From design to handover, Extreecon\'s team demonstrated technical excellence and clear communication. My residential project was completed flawlessly.',
    name: 'Grace Wanjiku',
    role: 'Homeowner · Kayole',
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  function go(d: number) {
    setDir(d);
    setIdx(i => (i + d + testimonials.length) % testimonials.length);
  }

  const t = testimonials[idx];

  return (
    <section id="testimonials" style={{ background: 'linear-gradient(135deg,#0f1a2e,#1A2B5E)' }}>
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center justify-center gap-3 text-orange text-[11px] tracking-[3px] uppercase font-semibold mb-4">
            <span className="w-8 h-0.5 bg-orange" /> Client Testimonials <span className="w-8 h-0.5 bg-orange" />
          </div>
          <h2 className="font-bebas text-white mb-12" style={{ fontSize: 'clamp(38px,5vw,64px)' }}>
            What Our <span className="text-orange">Clients Say</span>
          </h2>
        </motion.div>

        <div className="relative min-h-[260px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-10 text-left"
            >
              <div className="text-5xl text-orange/40 font-serif leading-none mb-5">"</div>
              <p className="text-white/80 text-[17px] leading-relaxed mb-8">{t.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange/40 shrink-0"
                />
                <div>
                  <div className="text-white font-bold text-[15px]">{t.name}</div>
                  <div className="text-white/40 text-[11px] tracking-wide mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={() => go(-1)} className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/60 hover:text-orange hover:border-orange transition-all border border-white/15">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                className={"h-2 rounded-full transition-all " + (i === idx ? 'bg-orange w-6' : 'bg-white/20 w-2')} />
            ))}
          </div>
          <button onClick={() => go(1)} className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/60 hover:text-orange hover:border-orange transition-all border border-white/15">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
