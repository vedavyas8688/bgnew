import StorySection from "@/components/aboutuspage/StorySection";
import MissionSection from "@/components/aboutuspage/MissionSection";
import ProcessSection from "@/components/shared/ProcessSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import ConsultationSection from "@/components/shared/ConsultationSection";
import data from "@/data/pages/about-us.json";

export default function AboutUsPage() {
  return (
    <>
      <StorySection data={data.storySection} />
      <MissionSection data={data.missionSection} />
      <ProcessSection data={data.processSection} />
      <TestimonialsSection data={data.testimonialsSection} />
      <ConsultationSection data={data.consultationSection} />
    </>
  );
}
