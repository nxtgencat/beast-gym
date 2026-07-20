export default function CoachProfile() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-start">
        <img
          src="public/assets/john.png"
          className="w-40 h-40 lg:w-full lg:h-[560px] object-cover mx-auto lg:mx-0 border-2 border-brand lg:border-0"
          alt="John Snow, body building coach"
        />
        <div className="text-center lg:text-left">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">John Snow</h1>
          <p className="text-brand text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mt-3">Body Building Coach</p>
          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex gap-2 justify-center lg:justify-start">
              <dt className="font-bold uppercase tracking-widest">Age:</dt>
              <dd className="text-gray-500">29</dd>
            </div>
            <div className="flex gap-2 justify-center lg:justify-start">
              <dt className="font-bold uppercase tracking-widest">Experience:</dt>
              <dd className="text-gray-500">5 Years</dd>
            </div>
            <div className="flex gap-2 justify-center lg:justify-start">
              <dt className="font-bold uppercase tracking-widest">Phone:</dt>
              <dd className="text-gray-500">+1 9876543210</dd>
            </div>
            <div className="flex gap-2 justify-center lg:justify-start">
              <dt className="font-bold uppercase tracking-widest">Email:</dt>
              <dd className="text-gray-500">john@Beast.com</dd>
            </div>
          </dl>
          <div className="flex items-center gap-3 mt-8 justify-center lg:justify-start">
            <a href="#" className="w-9 h-9 border border-gray-300 flex items-center justify-center hover:bg-brand hover:border-brand hover:text-white transition">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" /></svg>
            </a>
            <a href="#" className="w-9 h-9 border border-gray-300 flex items-center justify-center hover:bg-brand hover:border-brand hover:text-white transition">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.9 3H21l-6.5 7.4L22 21h-6.4l-5-6.5-5.7 6.5H2.7l6.9-7.9L2 3h6.6l4.5 6 5.8-6zM17.8 19h1.2L7.3 5H6l11.8 14z" /></svg>
            </a>
            <a href="#" className="w-9 h-9 border border-gray-300 flex items-center justify-center hover:bg-brand hover:border-brand hover:text-white transition">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c2.7 0 3 0 4 .1 1 0 1.7.2 2.3.5.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.6.4 1.3.5 2.3 0 1 .1 1.3.1 4s0 3-.1 4c0 1-.2 1.7-.5 2.3-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.6.2-1.3.4-2.3.5-1 0-1.3.1-4 .1s-3 0-4-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.6-.4-1.3-.5-2.3 0-1-.1-1.3-.1-4s0-3 .1-4c0-1 .2-1.7.5-2.3.2-.6.5-1 1-1.5s.9-.8 1.5-1c.6-.2 1.3-.4 2.3-.5 1 0 1.3-.1 4-.1zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" /></svg>
            </a>
            <a href="#" className="w-9 h-9 border border-gray-300 flex items-center justify-center hover:bg-brand hover:border-brand hover:text-white transition">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M6.9 8.4H3.5V20h3.4V8.4zM5.2 3.5a2 2 0 100 4 2 2 0 000-4zM20.5 20h-3.4v-6c0-1.4 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V20h-3.4V8.4h3.3v1.6c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5V20z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
