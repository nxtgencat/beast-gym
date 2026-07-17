import { useState } from 'react';

export default function GallerySection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const galleryThumbs = [
    'https://placehold.co/160x100/1a1a1a/1a1a1a',
    'https://placehold.co/160x100/262626/262626',
    'https://placehold.co/160x100/1a1a1a/1a1a1a',
    'https://placehold.co/160x100/262626/262626',
    'https://placehold.co/160x100/1a1a1a/1a1a1a',
    'https://placehold.co/160x100/262626/262626',
  ];

  return (
    <section id="gallery">
      <div className="relative h-[420px] overflow-hidden">
        <img
          src="https://placehold.co/1600x420/262626/262626"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Trainer coaching a client on the gym floor"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 right-0 flex">
          {galleryThumbs.map((src, i) => (
            <img key={i} src={src} className="w-1/6 h-24 object-cover" alt="Gallery thumbnail" />
          ))}
        </div>
      </div>
      <div id="contact" className="bg-[#f7f7f7] py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-brand text-xs font-bold tracking-[0.3em] uppercase">Contact Us</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase mt-3">Get in touch</h2>
            <p className="text-gray-400 text-sm tracking-widest uppercase mt-2">Reach out to us</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white border border-gray-200 px-5 py-4 text-sm outline-none focus:border-brand"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white border border-gray-200 px-5 py-4 text-sm outline-none focus:border-brand"
            />
            <textarea
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white border border-gray-200 px-5 py-4 text-sm outline-none focus:border-brand"
            />
            <button className="bg-brand text-white text-xs font-bold tracking-widest px-8 py-4 hover:bg-black transition cursor-pointer">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
