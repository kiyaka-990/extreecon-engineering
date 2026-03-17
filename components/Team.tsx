'use client';
import { motion } from 'framer-motion';

const team = [
  {
    initials: 'MS',
    gradient: 'linear-gradient(135deg, #F47B20 0%, #c45e10 100%)',
    pattern: '◆',
    name: 'Mohamed Sheikh Mire',
    role: 'Director & Shareholder',
    desc: 'Strategic director overseeing international partnerships and overall company direction.',
  },
  {
    initials: 'EA',
    gradient: 'linear-gradient(135deg, #1A2B5E 0%, #2d4a9e 100%)',
    pattern: '▲',
    name: 'Enow Abdullahi Abdi',
    role: 'Director & Shareholder',
    desc: 'Technical director responsible for engineering operations and project delivery excellence.',
  },
  {
    initials: 'CM',
    gradient: 'linear-gradient(135deg, #0f4c3a 0%, #1a7a5e 100%)',
    pattern: '●',
    name: 'Caroline Mumbanu Mwendwa',
    role: 'Director & Shareholder',
    desc: 'Finance and administration director ensuring compliance and operational excellence.',
  },
  {
    initials: 'LO',
    gradient: 'linear-gradient(135deg, #4a1a6b 0%, #7a2dae 100%)',
    pattern: '■',
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
              {/* Avatar block */}
              <div
                className="relative h-56 flex items-center justify-center overflow-hidden"
                style={{ background: m.gradient }}
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                  }}
                />
                {/* Large faded pattern symbol */}
                <div className="absolute text-[140px] font-bold opacity-10 text-white select-none leading-none">
                  {m.pattern}
                </div>
                {/* Initials circle */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bebas text-4xl tracking-wider shadow-2xl"
                    style={{
                      background: 'rgba(255,255,255,0.15)',
                      border: '2px solid rgba(255,255,255,0.3)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {m.initials}
                  </div>
                </div>
                {/* Bottom fade */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(10,16,32,0.95))' }} />
                {/* Role badge */}
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-orange text-[10px] tracking-[2px] uppercase font-semibold">{m.role}</div>
                </div>
              </div>

              {/* Info */}
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