import { pricingPlans } from '../data/pricing';

const iconPaths: Record<string, React.ReactNode> = {
  dumbbell: (
    <svg className="mx-auto mb-4 text-brand" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9v6M3 10v4m18-4v4m-3-7v10M8 9h8v6H8z" />
    </svg>
  ),
  activity: (
    <svg className="mx-auto mb-4 text-brand" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M7 8v8M17 8v8" />
    </svg>
  ),
  x: (
    <svg className="mx-auto mb-4 text-brand" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
};

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center mb-14">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase">Join Now</h2>
        <p className="text-gray-400 text-xs tracking-[0.3em] mt-3 uppercase">Join & be one of us</p>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {pricingPlans.map((plan) => (
          <div key={plan.name} className="p-10 text-center">
            {iconPaths[plan.icon]}
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide mb-4">{plan.name}</h3>
            <ul className="text-gray-500 text-sm space-y-2 mb-6">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <p className="font-heading text-2xl font-bold">
              $ {plan.price} <span className="text-sm font-normal text-gray-400">/ MONTH</span>
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="#" className="inline-flex items-center gap-2 bg-brand text-white text-xs font-bold tracking-widest px-8 py-4 hover:bg-black transition">
          ENROLL NOW
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
