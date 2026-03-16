'use client';
import { motion } from 'framer-motion';

const services = [
  {
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    title: 'Building Engineering',
    desc: 'Design and construction of commercial, residential, and industrial structures built to last.',
    items: ['Structural Design & Engineering', 'Commercial Buildings', 'Residential Developments', 'Renovation & Refurbishment'],
  },
  {
    img: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=800&q=80',
    title: 'Water Engineering',
    desc: 'Sustainable water infrastructure solutions for communities, municipalities, and industry.',
    items: ['Water Supply Systems', 'Borehole Drilling & Equipping', 'Sewerage & Drainage', 'Water Treatment Works'],
  },
  {
    img: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80',
    title: 'Road Engineering',
    desc: 'Professional road and highway construction from rural access roads to major highways.',
    items: ['Highway Design & Construction', 'Road Rehabilitation', 'Bridge Construction', 'Traffic Management'],
  },
  {
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    title: 'Real Estate Management',
    desc: 'End-to-end real estate development from land acquisition to property management.',
    items: ['Property Development', 'Estate Management', 'Valuation Services', 'Investment Advisory'],
  },
  {
    img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
    title: 'Architectural Design',
    desc: 'Creative and functional architectural designs that meet regulatory requirements.',
    items: ['Concept & Schematic Design', 'Planning Approvals', '3D Visualization', 'Bill of Quantities'],
  },
  {
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    title: 'Electrical & Plumbing',
    desc: 'Reliable MEP installations for all construction types across Kenya.',
    items: ['Electrical Installations', 'Plumbing Works', 'Solar Power Systems', 'Fire Safety Systems'],
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: '#0f1a2e' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 text-orange text-[11px] tracking-[3px] uppercase font-semibold mb-4">
            <span className="w-8 h-0.5 bg-orange" /> What We Do
          </div>
          <h2 className="font-bebas text-white mb-4" style={{ fontSize: 'clamp(38px,5vw,64px)' }}>
            Our Core <span className="text-orange">Services</span>
          </h2>
          <p className="text-white/50 text-[16px] max-w-xl leading-relaxed">
            From foundations to highways, we deliver complete engineering solutions built to international standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass rounded-2xl overflow-hidden group cursor-default hover:-translate-y-2 hover:border-orange/30 transition-all duration-400"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(13,21,38,0.9))' }} />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <h3 className="absolute bottom-4 left-5 text-white font-bold text-lg tracking-wide">{s.title}</h3>
              </div>
              {/* Body */}
              <div className="p-6">
                <p className="text-white/50 text-[14px] leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-white/45 text-[13px]">
                      <span className="w-1 h-1 rounded-full bg-orange shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
