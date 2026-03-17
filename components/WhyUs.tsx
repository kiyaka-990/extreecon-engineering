'use client';
import { motion } from 'framer-motion';
import { Trophy, Users, Clock, Shield, DollarSign } from 'lucide-react';

const points = [
  { icon: <Trophy size={22} />, title: 'Proven Track Record', desc: 'Over a decade delivering quality engineering projects across Kenya for diverse public and private sector clients.' },
  { icon: <Users size={22} />, title: 'Skilled & Certified Team', desc: 'Our engineers, architects, and technicians are highly qualified with international certifications and local expertise.' },
  { icon: <Clock size={22} />, title: 'On-Time Delivery', desc: 'Carefully thought-out timelines place our clients\' satisfaction and project completion at the forefront of everything we do.' },
  { icon: <Shield size={22} />, title: 'Fully Registered & Compliant', desc: 'Registered with the Registrar of Companies since 2013 (CPR/2013/122918), fully compliant with all Kenyan standards.' },
  { icon: <DollarSign size={22} />, title: 'Competitive Pricing', desc: 'Price stability and superior quality make Extreecon the preferred engineering partner for clients across Kenya.' },
];

export default function WhyUs() {
  return (
    <section id="why" style={{ background: 'linear-gradient(135deg,#0f1a2e,#1A2B5E,#0f1a2e)' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 text-orange text-[11px] tracking-[3px] uppercase font-semibold mb-4">
            <span className="w-8 h-0.5 bg-orange" /> Why Choose Us
          </div>
          <h2 className="font-bebas text-white" style={{ fontSize: 'clamp(38px,5vw,64px)' }}>
            Excellence in Every <span className="text-orange">Project</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 mt-14 items-center">
          <div className="flex flex-col gap-5">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-6 flex gap-5 items-start hover:border-orange/30 hover:translate-x-1.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange shrink-0">{p.icon}</div>
                <div>
                  <h4 className="text-white font-bold mb-1.5">{p.title}</h4>
                  <p className="text-white/50 text-[13px] leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Big image behind */}
            <div className="relative rounded-2xl overflow-hidden h-80 mb-5">
              <img
                src="/images/whyus.jpg"
                alt="Construction site"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, rgba(13,21,38,0.7))' }} />
            </div>
            {/* Stats grid overlay */}
            <div className="glass rounded-2xl p-8 text-center -mt-20 mx-4 relative z-10">
              <div className="font-bebas text-[90px] text-orange leading-none">10+</div>
              <div className="text-[12px] tracking-[3px] uppercase text-white/45 mb-6">Years of Engineering Excellence</div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { n: '200+', l: 'Projects' }, { n: '2', l: 'Key Cities' },
                  { n: '4', l: 'Directors' }, { n: '3', l: 'Core Services' },
                ].map(s => (
                  <div key={s.l} className="rounded-xl p-4 text-center" style={{ background: 'rgba(244,123,32,0.08)', border: '1px solid rgba(244,123,32,0.15)' }}>
                    <div className="font-bebas text-3xl text-orange">{s.n}</div>
                    <div className="text-[11px] tracking-[1.5px] uppercase text-white/40 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
