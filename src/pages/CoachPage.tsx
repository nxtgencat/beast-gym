import CoachProfile from '../components/CoachProfile';
import CoachCertifications from '../components/CoachCertifications';
import CoachIntroduction from '../components/CoachIntroduction';
import CoachSkillsSection from '../components/CoachSkills';
import InstagramSection from '../components/InstagramSection';

export default function CoachPage() {
  return (
    <main>
      <CoachProfile />
      <CoachCertifications />
      <CoachIntroduction />
      <CoachSkillsSection />
      <InstagramSection />
    </main>
  );
}
