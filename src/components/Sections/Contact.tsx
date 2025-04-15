import { FC } from 'react';
import Section from '../Layout/Section'; // Adjust the path if needed
import { SectionId } from '../../data/data'; // Adjust the path if needed

const Contact: FC = () => {
  return (
    <Section sectionId={SectionId.Contact} className="bg-gray-900 text-white py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <div className="text-lg text-gray-200">
          <p className="mt-2">
            Department of Astronomy<br />
            New Mexico State University<br />
            Las Cruces, NM 88001<br />
            <a
              href="mailto:fionalopez687@gmail.com"
              className="text-blue-500 hover:underline"
            >
              fionalopez687@gmail.com
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
