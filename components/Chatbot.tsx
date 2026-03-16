'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, HardHat } from 'lucide-react';

interface Message { role: 'bot' | 'user'; text: string; time: string; }

const quickReplies = ['Services offered', 'Get a quote', 'Contact info', 'About Extreecon'];

function getTime() {
  return new Date().toLocaleTimeString('en-KE', { hour: '2-digit', minute: '2-digit' });
}

function getReply(q: string): string {
  const lq = q.toLowerCase();

  if (/^(hi|hello|hey|good|greet|howdy)/.test(lq))
    return "Hello! 👋 Welcome to Extreecon Engineering! I'm here to help with questions about our services, projects, pricing, or getting in touch. What can I help you with today?";

  if (/service|offer|what do you|speciali/.test(lq))
    return "We specialize in three core areas:\n\n🏢 **Building Engineering** — commercial, residential & industrial construction\n💧 **Water Engineering** — supply systems, boreholes, treatment plants\n🛣️ **Road Engineering** — highways, road rehab, bridges\n\nWe also offer real estate management, architectural design, and MEP works. Which interests you?";

  if (/quote|price|cost|how much|rate|fee/.test(lq))
    return "We offer **free initial consultations and site assessments** in Nairobi and Mombasa. 📋\n\nTo get a detailed quote:\n• Fill the form on this page\n• Call: **0726 859 938**\n• Email: **extreecon@gmail.com**\n\nWe respond within 24 hours!";

  if (/contact|phone|call|email|reach|address/.test(lq))
    return "📍 **Office:** 6th Floor, View Park Towers, Monrovia Street, Nairobi\n📞 **Tel:** 0726 859 938 / 0723 271 144\n✉️ **Email:** extreecon@gmail.com\n\nOffice hours: Mon–Fri 8am–5pm, Sat 9am–1pm";

  if (/about|company|who|history|background/.test(lq))
    return "**Extreecon Engineering Company Limited** was established in **2013** and is fully registered in Kenya (CPR/2013/122918).\n\nWe are well known across **Nairobi and Mombasa** for delivering quality engineering works to international standards, guided by strategic directors with proven leadership.";

  if (/location|where|nairobi|office|find you/.test(lq))
    return "Our head office:\n**6th Floor, View Park Towers\nMonrovia Street, Nairobi, Kenya**\n\nP.O. Box 19055-00500, Nairobi\n\nWe operate primarily across Nairobi and Mombasa. 📍";

  if (/project|portfolio|work|done|completed/.test(lq))
    return "We've completed **200+ projects** across Kenya:\n\n🏢 Commercial buildings & residential estates\n🛣️ Road networks & bridge construction\n💧 Water treatment plants & boreholes\n🏘️ Real estate developments\n\nScroll up to browse our featured projects!";

  if (/road|highway|bridge/.test(lq))
    return "Our Road Engineering services:\n• Highway design & construction\n• Road rehabilitation & resurfacing\n• Bridge & culvert construction\n• Traffic management systems\n• Road marking & signage\n\nContact us for a free assessment! 🛣️";

  if (/water|borehole|drainage|sewerage/.test(lq))
    return "Our Water Engineering services:\n• Water supply & distribution systems\n• Borehole drilling & equipping\n• Sewerage & drainage systems\n• Dam & reservoir construction\n• Water treatment works 💧";

  if (/building|construction|house|flat|residential|commercial/.test(lq))
    return "Our Building Engineering services:\n• Structural design & engineering\n• Commercial & office buildings\n• Residential homes & estates\n• Industrial construction\n• Renovation & refurbishment 🏗️";

  if (/register|license|certified|legal|legit/.test(lq))
    return "Yes — fully registered! 📋\n\n**Company No:** CPR/2013/122918\n**Registered:** 13th November, 2013\n**By:** Registrar of Companies, Kenya\n\nAll works are insured and executed under professional engineering licences.";

  if (/team|director|staff|who run/.test(lq))
    return "Our leadership team:\n\n👔 **Mohamed Sheikh Mire** — Strategic & International\n👷 **Enow Abdullahi Abdi** — Technical Operations\n👩‍💼 **Caroline Mwendwa** — Finance & Admin\n💼 **Luke Owino Mangongo** — Business Development\n\nBacked by a full team of qualified engineers & technicians.";

  return "Thanks for your question! For the most accurate help, please reach out directly:\n\n📞 **0726 859 938** / **0723 271 144**\n✉️ **extreecon@gmail.com**\n\nOr use the contact form on this page — we respond within 24 hours! 🏗️";
}

// Render markdown-lite (bold + newlines)
function renderText(text: string) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <span key={i}>
        {parts.map((part, j) =>
          j % 2 === 1 ? <strong key={j} className="text-white font-semibold">{part}</strong> : part
        )}
        {i < lines.length - 1 && <br />}
      </span>
    );
  });
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          role: 'bot',
          text: "👋 Hi there! I'm EEC's assistant. I can tell you about our engineering services, projects, pricing, or help you get in touch. How can I help you today?",
          time: getTime(),
        }]);
      }, 400);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  function send(text?: string) {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setInput('');
    setShowQuick(false);
    setMessages(prev => [...prev, { role: 'user', text: msg, time: getTime() }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: getReply(msg), time: getTime() }]);
    }, 900 + Math.random() * 400);
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full bg-orange text-white flex items-center justify-center shadow-[0_8px_30px_rgba(244,123,32,0.55)] transition-all"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X size={22} /></motion.span>
            : <motion.span key="h" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><HardHat size={22} /></motion.span>
          }
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed bottom-24 right-7 z-50 w-[370px] max-h-[540px] flex flex-col rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            style={{ background: 'rgba(13,21,38,0.98)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4" style={{ background: 'linear-gradient(135deg,#1A2B5E,#0D1526)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center text-xl shrink-0">🏗️</div>
              <div>
                <div className="text-white font-bold text-[15px]">EEC Assistant</div>
                <div className="flex items-center gap-1.5 text-[11px] text-white/45">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" /> Online now
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="ml-auto text-white/40 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ maxHeight: 320 }}>
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-orange text-white rounded-br-sm'
                      : 'text-white/80 rounded-bl-sm'
                  }`}
                    style={m.role === 'bot' ? { background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.07)' } : {}}
                  >
                    {renderText(m.text)}
                  </div>
                  <div className="text-[10px] text-white/25 mt-1 px-1">{m.time}</div>
                </div>
              ))}

              {typing && (
                <div className="flex items-start">
                  <div className="px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <span className="w-2 h-2 rounded-full bg-white/40 animate-typing-1" />
                    <span className="w-2 h-2 rounded-full bg-white/40 animate-typing-2" />
                    <span className="w-2 h-2 rounded-full bg-white/40 animate-typing-3" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            {showQuick && (
              <div className="flex flex-wrap gap-2 px-4 pb-2">
                {quickReplies.map(q => (
                  <button key={q} onClick={() => send(q)}
                    className="text-[11px] px-3 py-1.5 rounded-full border transition-all hover:bg-orange hover:border-orange hover:text-white text-orange border-orange/40 bg-orange/06">
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="flex gap-2 px-4 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/06 border border-white/10 rounded-full px-4 py-2.5 text-[13px] text-white placeholder-white/30 outline-none focus:border-orange transition-colors"
              />
              <button onClick={() => send()}
                className="w-9 h-9 rounded-full bg-orange flex items-center justify-center text-white hover:bg-orange/80 transition-all shrink-0">
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
