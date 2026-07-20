export default function ReviewSection() {
  return (
    <section id="review" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center mb-14">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase">Review</h2>
        <p className="text-gray-400 text-xs tracking-[0.3em] mt-3 uppercase">Read what people says</p>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative max-w-md mx-auto lg:mx-0">
          <img
            src="public/assets/review.png"
            className="w-full h-[420px] object-cover"
            alt="Shirtless male athlete giving a testimonial"
          />
          <svg className="absolute -bottom-6 -right-6 text-brand w-20 h-20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 7C4.8 7 3 8.8 3 11c0 2.2 1.8 4 4 4-.3 2.5-2 4-4 4v2c3.9 0 7-3.1 7-7v-3c0-2.2-1.8-4-4-4zm10 0c-2.2 0-4 1.8-4 4 0 2.2 1.8 4 4 4-.3 2.5-2 4-4 4v2c3.9 0 7-3.1 7-7v-3c0-2.2-1.8-4-4-4z" />
          </svg>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-gray-500 leading-relaxed text-lg italic">Lorem ipsum dolor sit amet. Magna massa iaculis porta sed. Turpis arcu vitae condimentum vel purus sed eget. Vulputate malesuada purus arcu quam sem viverra. Lorem tincidunt sapien vestibulum mollibus.</p>
          <p className="font-heading font-bold uppercase mt-6">Neil Francis</p>
          <div className="flex items-center gap-3 mt-6 justify-center lg:justify-start">
            <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-brand hover:text-brand transition cursor-pointer">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-brand hover:text-brand transition cursor-pointer">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
