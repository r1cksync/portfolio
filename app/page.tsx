import Hero from "@/components/landing/Hero";
import StatsBar from "@/components/landing/StatsBar";
import TechMarquee from "@/components/TechMarquee";
import FeaturedWork from "@/components/landing/FeaturedWork";
import ExperienceTimeline from "@/components/landing/ExperienceTimeline";
import StackPreview from "@/components/landing/StackPreview";
import ContactCTA from "@/components/landing/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <StatsBar />
      <FeaturedWork />
      <ExperienceTimeline />
      <StackPreview />
      <ContactCTA />
    </>
  );
}
