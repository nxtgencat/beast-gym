import type { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black pt-14">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-white/10 pb-10">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 cursor-pointer">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-brand">
            <path d="M4 20C4 20 6 4 16 4C22 4 22 10 18 12C14 14 20 14 20 20C20 20 16 16 10 16C6 16 4 20 4 20Z" fill="currentColor" />
          </svg>
          <span className="font-heading text-white text-xl font-bold tracking-wide italic">BEAST</span>
        </button>
        <div className="flex items-center gap-4">
          <span className="text-white/70 text-xs tracking-widest uppercase">Subscribe to our newsletter</span>
          <div className="flex items-center bg-white/5 border border-white/20">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent text-white text-sm px-4 py-3 outline-none placeholder-white/40 w-48"
            />
            <button className="px-4 text-white hover:text-brand transition cursor-pointer">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-white/50 text-xs">
        <p>&copy; Beast 2019 All Rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">TERMS &amp; CONDITIONS</a>
          <span className="w-px h-3 bg-white/20"></span>
          <a href="#" className="hover:text-white">PRIVACY POLICY</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center hover:bg-brand hover:border-brand transition">
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" /></svg>
          </a>
          <a href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center hover:bg-brand hover:border-brand transition">
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M18.9 3H21l-6.5 7.4L22 21h-6.4l-5-6.5-5.7 6.5H2.7l6.9-7.9L2 3h6.6l4.5 6 5.8-6zM17.8 19h1.2L7.3 5H6l11.8 14z" /></svg>
          </a>
          <a href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center hover:bg-brand hover:border-brand transition">
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c2.7 0 3 0 4 .1 1 0 1.7.2 2.3.5.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.6.4 1.3.5 2.3 0 1 .1 1.3.1 4s0 3-.1 4c0 1-.2 1.7-.5 2.3-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.6.2-1.3.4-2.3.5-1 0-1.3.1-4 .1s-3 0-4-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.6-.4-1.3-.5-2.3 0-1-.1-1.3-.1-4s0-3 .1-4c0-1 .2-1.7.5-2.3.2-.6.5-1 1-1.5s.9-.8 1.5-1c.6-.2 1.3-.4 2.3-.5 1 0 1.3-.1 4-.1zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" /></svg>
          </a>
          <a href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center hover:bg-brand hover:border-brand transition">
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M6.9 8.4H3.5V20h3.4V8.4zM5.2 3.5a2 2 0 100 4 2 2 0 000-4zM20.5 20h-3.4v-6c0-1.4 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V20h-3.4V8.4h3.3v1.6c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5V20z" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
