import { coachSkills } from '../data/skills';

export default function CoachSkillsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center mb-14">
        <h2 className="font-heading text-brand text-3xl lg:text-4xl font-bold uppercase">Skills</h2>
        <p className="text-gray-400 text-xs tracking-[0.3em] mt-3 uppercase">Skillset of our coach</p>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <p className="text-gray-500 leading-relaxed text-center lg:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="space-y-7">
          {coachSkills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm font-bold uppercase tracking-widest mb-2">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="h-1.5 bg-brand/15">
                <div className="h-full bg-brand" style={{ width: `${skill.percent}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
