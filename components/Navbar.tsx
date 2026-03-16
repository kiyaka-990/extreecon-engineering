'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'About', href: '#why' },
  { label: 'Team', href: '#team' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'py-3 bg-[#0D1526]/95 backdrop-blur-xl shadow-2xl'
            : 'py-5 bg-[#0D1526]/70 backdrop-blur-md'
        )}
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-orange rotate-45 rounded flex items-center justify-center shrink-0">
              <span className="-rotate-45 text-white font-black text-xs tracking-tighter leading-none">EEC</span>
            </div>
            <div>
              <div className="font-bebas text-xl text-white tracking-[2px] leading-none">Extreecon</div>
              <div className="text-[9px] tracking-[3px] uppercase text-orange font-medium">Engineering Co. Ltd</div>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/60 hover:text-orange text-[13px] tracking-[1.5px] uppercase font-medium transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[2px] bg-orange transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="tel:+254726859938"
            className="hidden lg:flex items-center gap-2 bg-orange text-white px-5 py-2.5 text-[12px] tracking-[1px] uppercase font-bold rounded-sm hover:bg-orange/85 transition-all hover:-translate-y-0.5"
          >
            <Phone size={14} /> Call Us
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-[#0D1526]/98 backdrop-blur-xl border-b border-white/10 lg:hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-white/70 hover:text-orange text-[14px] tracking-[2px] uppercase font-medium block py-2 border-b border-white/05 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="tel:+254726859938"
                  className="flex items-center justify-center gap-2 bg-orange text-white px-4 py-3 text-[13px] font-bold tracking-wider uppercase rounded mt-2"
                >
                  <Phone size={15} /> 0726 859 938
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
