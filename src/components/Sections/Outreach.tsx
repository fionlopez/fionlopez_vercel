import {FC, memo} from 'react';
import {StaticImageData} from 'next/image'; // Importing types
import Image from 'next/image';
import {outreach, SectionId} from '../../data/data'; // Internal import
import Section from '../Layout/Section'; // Internal import

const OutreachSection: FC = memo(() => {
  return (
    <Section sectionId={SectionId.Outreach} className="bg-black text-white">
      <h2 className="text-4xl font-bold text-gray-300 mb-6">Outreach</h2>

      <ul className="space-y-12">
        {outreach.map((item, index) => (
          <li key={index} className="flex flex-col items-center space-y-6 lg:space-y-0 lg:flex-row lg:space-x-8">
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
                  <Image
                    key={i}
                    alt={`${item.title} image ${i + 1}`}
                    className="w-full h-auto rounded-lg shadow-lg max-w-xl mx-auto"
                    height={1200}
                    width={1600}
                    src={img}
                  />
                ) : (
                  <Image
                    key={i}
                    alt={`${item.title} image ${i + 1}`}
                    className="w-full h-auto rounded-lg shadow-lg max-w-xl mx-auto"
                    height={1200}
                    width={1600}
                    src={img}
                  />
                ),
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
});

OutreachSection.displayName = 'OutreachSection';
export default OutreachSection;
