import ContentSection from '@/components/productspage/ContentSection';
import TestimonialsSection from '@/components/shared/TestimonialsSection';
import ConsultationSection from '@/components/shared/ConsultationSection';
import data from '@/data/pages/products.json';

export default function ProductsPage() {
  return (
    <>
      <ContentSection data={data.contentSection} />
      <TestimonialsSection data={data.section2} />
      <ConsultationSection data={data.section3} />
    </>
  );
}
