import { blogPosts } from '../data/blog';

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center mb-14">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase">Blog</h2>
        <p className="text-gray-400 text-xs tracking-[0.3em] mt-3 uppercase">Read to stay in shape</p>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.title}>
            <div className="relative h-56 overflow-hidden">
              <img src={post.img} className="w-full h-full object-cover" alt={post.alt} />
              <span className="absolute top-4 left-4 bg-brand text-white text-xs font-bold px-3 py-2 leading-tight">
                22<br />NOV
              </span>
            </div>
            <h3 className="font-heading font-bold uppercase text-sm mt-5">{post.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{post.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
