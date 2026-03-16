'use client';
import { motion } from 'framer-motion';

const team = [
  {
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80',
    name: 'Mohamed Sheikh Mire',
    role: 'Director & Shareholder',
    desc: 'Strategic director overseeing international partnerships and overall company direction.',
  },
  {
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
    name: 'Enow Abdullahi Abdi',
    role: 'Director & Shareholder',
    desc: 'Technical director responsible for engineering operations and project delivery excellence.',
  },
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
    name: 'Caroline Mumbanu Mwendwa',
    role: 'Director & Shareholder',
    desc: 'Finance and administration director ensuring compliance and operational excellence.',
  },
  {
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80',
    name: 'Luke Owino Mangongo',
    role: 'Director & Shareholder',
    desc: 'Business development director driving growth and client relationship management.',
  },
];

export default function Team() {
  return (
    <section id="team" style={{ background: '#0a1020' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 text-orange text-[11px] tracking-[3px] uppercase font-semibold mb-4">
            <span className="w-8 h-0.5 bg-orange" /> Our Leadership
          </div>
          <h2 className="font-bebas text-white mb-3" style={{ fontSize: 'clamp(38px,5vw,64px)' }}>
            Meet the <span className="text-orange">Directors</span>
          </h2>
          <p className="text-white/50 text-[16px] max-w-xl leading-relaxed">
            Strategic leaders with proven competence guiding Extreecon to deliver excellence across Kenya.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 hover:border-orange/30 transition-all duration-400"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover object-top opacity-85 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(10,16,32,0.95))' }} />
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-orange text-[10px] tracking-[2px] uppercase font-semibold">{m.role}</div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-white font-bold text-[15px] leading-tight mb-2">{m.name}</h4>
                <p className="text-white/45 text-[12px] leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
