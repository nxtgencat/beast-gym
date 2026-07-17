import { facilities } from '../data/facilities';

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="pb-0">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center mb-14">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase">Facilities</h2>
        <p className="text-gray-400 text-xs tracking-[0.3em] mt-3 uppercase">How it feels to be with us</p>
        <p className="text-gray-500 max-w-2xl mx-auto mt-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {facilities.map((f) => (
          <div key={f.label} className="relative h-72 group overflow-hidden">
            <img src={f.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt={f.alt} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10"></div>
            <span className="absolute bottom-5 left-5 text-white font-heading font-semibold uppercase tracking-wide">{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
