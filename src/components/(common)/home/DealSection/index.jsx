import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

const DealSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <SectionTitle>
          <Subtitle>New Products</Subtitle>
          <Title>Deal of the day</Title>
        </SectionTitle>
      </div>
    </section>
  );
};

export default DealSection;
