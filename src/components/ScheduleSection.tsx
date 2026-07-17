import { scheduleDays } from '../data/schedule';

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center mb-14">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold uppercase">Schedule</h2>
        <p className="text-gray-400 text-xs tracking-[0.3em] mt-3 uppercase">Keep up with the schedule to stay fit</p>
        <p className="text-gray-500 max-w-2xl mx-auto mt-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-brand text-white p-6 flex flex-col justify-center min-h-[190px]">
          <div className="flex items-center justify-between mb-2">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <p className="font-heading text-xl font-bold">24<sup>th</sup> - 30<sup>th</sup></p>
          <p className="font-heading text-xl font-bold uppercase">November 2019</p>
        </div>
        {scheduleDays.map((day) => (
          <div key={day.day} className="relative min-h-[190px] overflow-hidden group">
            <img src={day.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" alt={day.alt} />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative p-6 h-full flex flex-col justify-between text-white">
              <p className="font-heading font-bold uppercase">{day.day}, {day.date}</p>
              <p className="text-xs tracking-widest uppercase">{day.activities.join('<br/>')}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
