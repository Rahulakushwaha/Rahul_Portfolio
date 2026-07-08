"use client";

export default function ProfilePhoto({ src = "/profile.jpg", alt = "Rahul Kushwaha" }) {
  return (
    <div className="relative w-56 h-56 sm:w-64 sm:h-64 shrink-0 mx-auto">
      {/* soft ambient glow */}
      <div className="absolute -inset-4 rounded-[2rem] bg-signal/10 blur-2xl -z-10" />

      {/* gradient border frame */}
      <div
        className="absolute inset-0 rounded-[1.75rem] p-[2px]"
        style={{
          background: "linear-gradient(135deg, #4C7DFF 0%, #34D399 50%, #F5A94C 100%)",
        }}
      >
        <div className="w-full h-full rounded-[1.7rem] bg-bg" />
      </div>

      {/* photo */}
      <div className="absolute inset-[2px] rounded-[1.7rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(76,125,255,0.35)] transition-transform duration-500 hover:scale-[1.02]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
