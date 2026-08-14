"use client";

export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-1 animate-fade-in flex-col">{children}</div>;
}
