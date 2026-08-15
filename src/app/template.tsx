"use client";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 origin-left flex-col motion-safe:animate-[page-turn_0.7s_cubic-bezier(0.22,1,0.36,1)] motion-reduce:animate-fade-in">
      {children}
    </div>
  );
}
