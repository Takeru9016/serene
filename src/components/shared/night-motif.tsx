const stars = [
  { left: "8%", size: 2, top: "6%" },
  { left: "18%", size: 1.5, top: "12%" },
  { left: "88%", size: 2, top: "9%" },
  { left: "92%", size: 1.5, top: "20%" },
  { left: "4%", size: 1, top: "15%" },
  { left: "10%", size: 2, top: "85%" },
  { left: "20%", size: 1.5, top: "90%" },
  { left: "85%", size: 2, top: "88%" },
  { left: "92%", size: 1, top: "94%" },
  { left: "94%", size: 1.5, top: "80%" },
];

export function NightMotif() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {stars.map((star, i) => (
        <span
          className="absolute rounded-full bg-gold motion-safe:animate-[star-drift_75s_ease-in-out_infinite]"
          key={`${star.top}-${star.left}`}
          style={{
            animationDelay: `${i * 3}s`,
            height: `${star.size}px`,
            left: star.left,
            opacity: 0.35,
            top: star.top,
            width: `${star.size}px`,
          }}
        />
      ))}
    </div>
  );
}
