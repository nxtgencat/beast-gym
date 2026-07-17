import { coaches } from '../data/coaches';
import type { Page } from '../types';

interface CoachesSectionProps {
  onNavigate: (page: Page) => void;
}

export default function CoachesSection({ onNavigate }: CoachesSectionProps) {
  return (
    <section id="coaches" className="py-20 lg:py-28 bg-dark">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center mb-14">
        <h2 className="font-heading text-brand text-3xl lg:text-4xl font-bold uppercase">Coaches</h2>
        <p className="text-white/50 text-xs tracking-[0.3em] mt-3 uppercase">Our training force</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {coaches.map((coach) => (
          <button
            key={coach.name}
            onClick={() => onNavigate('coach')}
            className="relative h-80 group overflow-hidden text-left cursor-pointer"
          >
            <img
              src={coach.img}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
              alt={coach.alt}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <span className="absolute bottom-5 left-5 text-white font-heading font-semibold uppercase">{coach.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
