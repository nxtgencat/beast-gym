import { useState } from 'react';
import type { Page } from '../types';

const navLinks: { label: string; href?: string; page?: Page }[] = [
  { label: 'About Us', href: '#about', page: 'home' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'BMI', href: '#bmi' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Reviews', href: '#review' },
  { label: 'Coaches', page: 'coach' },
  { label: 'Blog', href: '#blog' },
  { label: 'Gallery', href: '#gallery' },
];

interface HeaderProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({ activePage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick(page?: Page, href?: string) {
    if (page) onNavigate(page);
    if (href) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-brand">
            <path d="M4 20C4 20 6 4 16 4C22 4 22 10 18 12C14 14 20 14 20 20C20 20 16 16 10 16C6 16 4 20 4 20Z" fill="currentColor" />
          </svg>
          <span className="font-heading text-white text-2xl font-bold tracking-wide italic">BEAST</span>
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.page, link.href)}
              className={`font-heading text-xs font-semibold tracking-widest uppercase transition cursor-pointer ${
                link.page && activePage === link.page ? 'text-brand' : 'text-white hover:text-brand'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block shrink-0">
          <a href="#" className="font-heading inline-block bg-brand text-white text-xs font-bold tracking-widest px-6 py-3.5 hover:bg-white hover:text-brand transition">
            JOIN NOW
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white cursor-pointer"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 px-6 pb-6 flex flex-col gap-4 pt-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.page, link.href)}
              className={`font-heading text-left text-xs font-semibold tracking-widest uppercase cursor-pointer ${
                link.page && activePage === link.page ? 'text-brand' : 'text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a href="#" className="font-heading bg-brand text-white text-xs font-bold tracking-widest px-6 py-3 text-center mt-2">
            JOIN NOW
          </a>
        </div>
      )}
    </header>
  );
}
