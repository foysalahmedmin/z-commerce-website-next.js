import CounterSection from "@/components/(common)/about/CounterSection";
import StorySection from "@/components/(common)/about/StorySection";
import TeamSection from "@/components/(common)/about/TeamSection";
import ServicesSection from "@/components/partials/Sections/ServicesSection";
import TestimonialSection from "@/components/partials/Sections/TestimonialSection";

const AboutPage = () => {
  return (
    <main>
      <StorySection />
      <CounterSection />
      <TeamSection />
      <div className="container">
        <hr />
      </div>
      <ServicesSection />
      <div className="container">
        <hr />
      </div>
      <TestimonialSection />
    </main>
  );
};

export default AboutPage;
