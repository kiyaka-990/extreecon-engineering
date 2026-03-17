const items = [
  'Building Engineering Works',
  'Water Engineering Works',
  'Road Engineering Works',
  'Real Estate Development',
  'Infrastructure Design',
  'Highway Construction',
  'Nairobi · Mombasa · Kenya',
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div
      className="overflow-hidden py-0 border-t-4 border-orange"
      style={{ background: '#1A2B5E' }}
    >
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-5 px-10 py-4 border-r shrink-0"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <span className="w-2 h-2 rounded-full bg-orange shrink-0" />
            <span className="text-[13px] tracking-[2px] uppercase font-semibold text-white/80 font-barlow">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
