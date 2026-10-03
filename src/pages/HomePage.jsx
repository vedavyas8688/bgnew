import HeroSection from "@/components/homepage/HeroSection";
import AboutSection from "@/components/homepage/AboutSection";
import UspSection from "@/components/homepage/UspSection";
import ProductsSection from "@/components/homepage/ProductsSection";
import SolutionsSection from "@/components/homepage/SolutionsSection";
import WhyChooseUsSection from "@/components/homepage/WhyChooseUsSection";
import StatisticsSection from "@/components/homepage/StatisticsSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import ProjectsSection from "@/components/homepage/ProjectsSection";
import LatestBlogsSection from "@/components/homepage/LatestBlogsSection";
import ConsultationSection from "@/components/homepage/ConsultationSection";
import ApplicationModalSection from "@/components/shared/EnquiryModalSection";
import data from "@/data/pages/index.json";

export default function HomePage() {
  return (
    <>
      <HeroSection data={data.hero} />
      <AboutSection data={data.aboutSection} />
      <UspSection data={data.uspSection} />
      <ProductsSection data={data.productsSection} />
      <SolutionsSection data={data.solutionsSection} />
      <WhyChooseUsSection data={data.whyChooseUsSection} />
      <StatisticsSection data={data.statisticsSection} />
      <TestimonialsSection data={data.testimonialsSection} />
      <ProjectsSection data={data.projectsSection} />
      <LatestBlogsSection data={data.latestBlogsSection} />
      <ConsultationSection data={data.consultationSection} />
      <ApplicationModalSection data={data.contactModalSection} />
    </>
  );
}
