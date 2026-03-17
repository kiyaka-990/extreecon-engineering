import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const services = ['Building Engineering', 'Water Engineering', 'Road Engineering', 'Real Estate', 'Architectural Design'];
const company  = ['About Us', 'Our Team', 'Projects', 'Testimonials', 'Contact'];
const contact  = [
  '6th Floor, View Park Towers',
  'Monrovia Street, Nairobi',
  '0726 859 938',
  '0723 271 144',
  'extreecon@gmail.com',
];

export default function Footer() {
  return (
    <footer style={{ background: '#060c17', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-orange rotate-45 rounded flex items-center justify-center shrink-0">
                <span className="-rotate-45 text-white font-black text-[10px]">EEC</span>
              </div>
              <div>
                <div className="font-bebas text-lg text-white tracking-[2px] leading-none">Extreecon</div>
                <div className="text-[8px] tracking-[3px] uppercase text-orange font-medium">Engineering Co. Ltd</div>
              </div>
            </div>
            <p className="text-white/40 text-[14px] leading-relaxed mb-6">
              Building Kenya's infrastructure with excellence since 2013. Specialists in building, water, and road engineering.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram, Mail].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/45 hover:border-orange hover:text-orange hover:bg-orange/08 transition-all text-sm">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-[10px] tracking-[3px] uppercase text-orange font-semibold mb-5">Services</h5>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}><a href="#services" className="text-white/40 hover:text-white text-[14px] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[10px] tracking-[3px] uppercase text-orange font-semibold mb-5">Company</h5>
            <ul className="space-y-3">
              {company.map(c => (
                <li key={c}><a href="#" className="text-white/40 hover:text-white text-[14px] transition-colors">{c}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[10px] tracking-[3px] uppercase text-orange font-semibold mb-5">Contact</h5>
            <ul className="space-y-3">
              {contact.map(c => (
                <li key={c}><span className="text-white/40 text-[14px]">{c}</span></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/06 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-[12px]">
            © {new Date().getFullYear()} Extreecon Engineering Company Limited · CPR/2013/122918
          </p>
          <p className="text-white/15 text-[11px]">Developed by Asterleigh Systems</p>
        </div>
      </div>
    </footer>
  );
}
