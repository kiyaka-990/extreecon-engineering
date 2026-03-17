import { MapPin, Phone, Mail, Clock, Award } from 'lucide-react';

const info = [
  { icon: <MapPin size={18} />, label: 'Head Office', val: '6th Floor, View Park Towers\nMonrovia Street, Nairobi, Kenya' },
  { icon: <Phone size={18} />, label: 'Phone', val: '0726 859 938\n0723 271 144' },
  { icon: <Mail size={18} />, label: 'Email', val: 'extreecon@gmail.com' },
  { icon: <Clock size={18} />, label: 'Office Hours', val: 'Mon–Fri: 8:00 AM – 5:00 PM\nSat: 9:00 AM – 1:00 PM' },
  { icon: <Award size={18} />, label: 'Registration', val: 'CPR/2013/122918\nRegistered: 13th Nov, 2013' },
];

export default function MapSection() {
  return (
    <section id="location" style={{ background: '#0D1526' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center gap-3 text-orange text-[11px] tracking-[3px] uppercase font-semibold mb-4">
          <span className="w-8 h-0.5 bg-orange" /> Find Us
        </div>
        <h2 className="font-bebas text-white mb-10" style={{ fontSize: 'clamp(38px,5vw,64px)' }}>
          Our <span className="text-orange">Location</span>
        </h2>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 items-start">
          {/* Info cards */}
          <div className="flex flex-col gap-4">
            {info.map((item) => (
              <div key={item.label} className="glass rounded-xl p-5 flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center text-orange shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] tracking-[2px] uppercase text-white/35 mb-1">{item.label}</div>
                  <div className="text-white text-[14px] font-medium whitespace-pre-line">{item.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-[440px]" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8162403478!2d36.81999!3d-1.28333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a2c6b4c7e5%3A0x5a97e87f6b8c3b2a!2sView%20Park%20Towers%2C%20Monrovia%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
