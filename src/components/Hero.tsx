export default function Hero() {
  return (
    <section className="relative pt-16 lg:pt-[72px]">
      <div className="relative h-[420px] sm:h-[480px] lg:h-[580px] bg-[#141414] overflow-hidden">
        <img
          src="https://placehold.co/1600x580/171717/171717"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          alt="Gym athlete training in dark gym background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20"></div>
        <div className="relative h-full max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center">
          <div className="flex items-center gap-6 lg:gap-10">
            <div className="hidden sm:flex flex-col items-center gap-4">
              <button className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-brand hover:border-brand transition shrink-0 cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                  <path d="M6 4l14 8-14 8V4z" />
                </svg>
              </button>
              <span className="vertical-text text-white/70 text-[10px] tracking-[0.3em]">PLAY VIDEO</span>
            </div>
            <div>
              <p className="text-brand font-heading text-sm tracking-[0.35em] mb-3 font-semibold">CAREER</p>
              <h1 className="font-heading text-white text-4xl sm:text-5xl lg:text-7xl font-bold uppercase leading-[1.05]">
                Live it<br />like a rock!
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center gap-4 py-4 text-white text-xs bg-black">
        <span className="tracking-widest">1 / 2</span>
        <div className="flex-1 h-[2px] bg-white/20">
          <div className="h-full w-1/2 bg-brand"></div>
        </div>
        <span className="flex items-center gap-2 tracking-widest">
          Fast
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </section>
  );
}
