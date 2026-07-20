export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="font-heading text-brand text-3xl lg:text-4xl font-bold uppercase">About Us</h2>
          <p className="text-gray-400 text-xs tracking-[0.3em] mt-3 uppercase">Know more to be with us</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="text-gray-500 leading-relaxed space-y-4 order-2 lg:order-1 text-center lg:text-left">
            <p>Lorem ipsum dolor sit amet. Non faucibus id lacus purus tincidunt ultrices metus lacus. Vel sed eget arcu. Mauris nisi dignissim mattis tempor eget ac erat. Donec suscipit ullamcorper nisi ut aliquip ex ea commodo consequat. Turpis ipsum ac egestas eget imperdiet enim amet massa nulla.</p>
          </div>
          <div className="relative flex justify-center order-1 lg:order-2">
            <span className="font-heading text-[160px] sm:text-[220px] leading-none font-bold text-brand/20 select-none">X</span>
            <img
              src="public/assets/about.png"
              className="absolute inset-0 m-auto w-[240px] h-[320px] sm:w-[300px] sm:h-[420px] object-cover"
              alt="Female trainer holding a medicine ball"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
