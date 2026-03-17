'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HardHat, FileText, Shield, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', service: '', message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" style={{ background: '#0a1020' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} className="flex flex-col gap-8 justify-center"
          >
            <div>
              <div className="flex items-center gap-3 text-orange text-[11px] tracking-[3px] uppercase font-semibold mb-4">
                <span className="w-8 h-0.5 bg-orange" /> Get In Touch
              </div>
              <h2 className="font-bebas text-white mb-4" style={{ fontSize: 'clamp(38px,5vw,64px)' }}>
                Start Your <span className="text-orange">Project</span>
              </h2>
              <p className="text-white/50 text-[16px] leading-relaxed max-w-md">
                Ready to build something great? Tell us about your project and our team will get back to you with a tailored engineering solution.
              </p>
            </div>

            {[
              { icon: <HardHat size={18} />, title: 'Free Site Assessment', desc: 'We offer free initial site visits and project consultations in Nairobi and Mombasa.', highlight: true },
              { icon: <FileText size={18} />, title: 'Transparent Quotations', desc: 'Detailed BOQs with no hidden costs — competitive pricing guaranteed.' },
              { icon: <Shield size={18} />, title: 'Licensed & Insured', desc: 'All our projects are fully insured and executed under professional engineering licences.' },
            ].map((item) => (
              <div key={item.title}
                className={`glass rounded-xl p-5 flex gap-4 items-start ${item.highlight ? 'border-orange/25 bg-orange/05' : ''}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.highlight ? 'bg-orange/20 text-orange' : 'bg-orange/10 text-orange'}`}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-white font-semibold text-[14px] mb-1">{item.title}</div>
                  <div className="text-white/45 text-[13px] leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-10"
          >
            <h3 className="text-white font-bold text-xl tracking-wide mb-8">Request a Quote</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center text-green-400 text-3xl">✓</div>
                <div className="text-white font-bold text-lg">Message Sent!</div>
                <div className="text-white/50 text-[14px]">We'll get back to you within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'firstName', label: 'First Name', placeholder: 'John' },
                    { name: 'lastName', label: 'Last Name', placeholder: 'Doe' },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="block text-[10px] tracking-[2px] uppercase text-white/40 mb-2">{f.label}</label>
                      <input
                        name={f.name} value={(form as any)[f.name]} onChange={handleChange}
                        placeholder={f.placeholder} required
                        className="w-full bg-white/05 border border-white/10 rounded-lg px-4 py-3 text-white text-[14px] placeholder-white/25 outline-none focus:border-orange transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-[10px] tracking-[2px] uppercase text-white/40 mb-2">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="john@company.com" required
                    className="w-full bg-white/05 border border-white/10 rounded-lg px-4 py-3 text-white text-[14px] placeholder-white/25 outline-none focus:border-orange transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[2px] uppercase text-white/40 mb-2">Phone</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                    placeholder="+254 7XX XXX XXX"
                    className="w-full bg-white/05 border border-white/10 rounded-lg px-4 py-3 text-white text-[14px] placeholder-white/25 outline-none focus:border-orange transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[2px] uppercase text-white/40 mb-2">Service Required</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className="w-full bg-[#0a1020] border border-white/10 rounded-lg px-4 py-3 text-white text-[14px] outline-none focus:border-orange transition-colors appearance-none">
                    <option value="">Select a service...</option>
                    <option>Building Engineering Works</option>
                    <option>Water Engineering Works</option>
                    <option>Road Engineering Works</option>
                    <option>Real Estate Management</option>
                    <option>Architectural Design</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] tracking-[2px] uppercase text-white/40 mb-2">Project Description</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell us about your project, location, timeline, and budget..."
                    rows={4}
                    className="w-full bg-white/05 border border-white/10 rounded-lg px-4 py-3 text-white text-[14px] placeholder-white/25 outline-none focus:border-orange transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-orange text-white py-4 rounded-lg font-bold text-[13px] tracking-[2px] uppercase flex items-center justify-center gap-2 hover:bg-orange/85 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(244,123,32,0.3)]">
                  <Send size={15} /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
