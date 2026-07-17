import { instagramPosts } from '../data/instagram';

export default function InstagramSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-dark overflow-hidden">
      <img
        src="https://placehold.co/1600x700/141414/141414"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        alt="Gym equipment background"
      />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 text-center mb-14">
        <h2 className="font-heading text-brand text-3xl lg:text-4xl font-bold uppercase">Instagram</h2>
        <p className="text-white/50 text-xs tracking-[0.3em] mt-3 uppercase">Follow John Snow on Instagram</p>
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {instagramPosts.map((post, i) => (
          <img key={i} src={post.img} className="w-full h-64 object-cover" alt={post.alt} />
        ))}
      </div>
      <div className="relative text-center mt-12">
        <a href="#" className="inline-flex items-center gap-2 bg-brand text-white text-xs font-bold tracking-widest px-8 py-4 hover:bg-white hover:text-brand transition">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.2c2.7 0 3 0 4 .1 1 0 1.7.2 2.3.5.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.6.4 1.3.5 2.3 0 1 .1 1.3.1 4s0 3-.1 4c0 1-.2 1.7-.5 2.3-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.6.2-1.3.4-2.3.5-1 0-1.3.1-4 .1s-3 0-4-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.6-.4-1.3-.5-2.3 0-1-.1-1.3-.1-4s0-3 .1-4c0-1 .2-1.7.5-2.3.2-.6.5-1 1-1.5s.9-.8 1.5-1c.6-.2 1.3-.4 2.3-.5 1 0 1.3-.1 4-.1zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
          </svg>
          FOLLOW
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
