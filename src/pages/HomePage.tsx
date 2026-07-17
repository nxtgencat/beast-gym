import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import FacilitiesSection from '../components/FacilitiesSection';
import BMICalculator from '../components/BMICalculator';
import ScheduleSection from '../components/ScheduleSection';
import ReviewSection from '../components/ReviewSection';
import PricingSection from '../components/PricingSection';
import CoachesSection from '../components/CoachesSection';
import BlogSection from '../components/BlogSection';
import GallerySection from '../components/GallerySection';
import type { Page } from '../types';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main>
      <Hero />
      <AboutSection />
      <FacilitiesSection />
      <BMICalculator />
      <ScheduleSection />
      <ReviewSection />
      <PricingSection />
      <CoachesSection onNavigate={onNavigate} />
      <BlogSection />
      <GallerySection />
    </main>
  );
}
