import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';
import EducationSection from '@/components/sections/EducationSection';

export default function Home() {
  return (
    <div className="space-y-20"> {/* Espaçamento entre seções */}
      <AboutSection />
      <SkillsSection />
      <EducationSection/>
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}