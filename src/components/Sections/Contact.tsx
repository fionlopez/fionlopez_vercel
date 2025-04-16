import React, {FC} from 'react'; // Import React explicitly for TypeScript

import {SectionId} from '../../data/data'; // Internal import
import Section from '../Layout/Section'; // Internal import

const Contact: FC = React.memo(() => {
  return (
    <Section className="bg-gray-900 text-white py-16" sectionId={SectionId.Contact}>
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <div className="text-lg text-gray-200">
          <p className="mt-2">
            Department of Astronomy
            <br />
            New Mexico State University
            <br />
            Las Cruces, NM 88001
            <br />
            <a href="mailto:fionalopez687@gmail.com" className="text-blue-500 hover:underline">
              fionalopez687@gmail.com
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
});

export default Contact;
