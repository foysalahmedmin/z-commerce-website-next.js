import Image from "next/image";

const StorySection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8">
          <div className="text-center md:text-left">
            <h1 className="mb-6 text-3xl font-bold uppercase md:mb-8 xl:text-5xl">
              Our Story
            </h1>
            <p className="mb-4">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/about/story.png"
              alt="story"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
