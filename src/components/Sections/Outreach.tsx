import { outreach, SectionId } from '../../data/data';
import Section from '../Layout/Section';
import type { StaticImageData } from 'next/image';
import Image from 'next/image'; // Import Next.js Image component

const OutreachSection = () => {
  return (
    <Section sectionId={SectionId.Outreach}>
      <h2 className="text-4xl font-bold text-gray-300 mb-6">Outreach</h2>

      <ul className="space-y-12">
        {outreach.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center space-y-6 lg:space-y-0 lg:flex-row lg:space-x-8"
          >
            {/* Content */}
            <div className="w-full lg:w-2/3 space-y-4">
              <div className="text-3xl font-bold text-white">{item.location}</div>
              <div className="text-xl font-semibold text-gray-400">{item.title}</div>
              <div className="text-gray-200">{item.content}</div>
            </div>

            {/* Images */}
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex flex-col gap-4">
              {item.imageSrc.map((img: string | StaticImageData, i: number) =>
                typeof img === 'string' ? (
                  <img
                    key={i}
                    src={img}
                    alt={`${item.title} image ${i + 1}`}
                    className="w-full h-auto rounded-lg shadow-lg max-w-xl mx-auto"
                  />
                ) : (
                  <Image
                     key={i}
                    src={img}
                    alt={`${item.title} image ${i + 1}`}
                    width={1600}
                    height={1200}
                    className="w-full h-auto rounded-lg shadow-lg max-w-xl mx-auto"
                  />
                )
                )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default OutreachSection;
