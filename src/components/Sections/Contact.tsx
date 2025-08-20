/* eslint-disable prettier/prettier */
import React, {FC} from 'react';

import Section from '../Layout/Section';
import {SectionId} from '../../data/data';

const Contact: FC = React.memo(() => {
  return (
    <Section sectionId={SectionId.Contact} className="bg-gray-900 text-white py-16">
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
            <a href="mailto:fl@nmsu.edu" className="text-blue-500 hover:underline">
              fl@nmsu.edu
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
});

export default Contact;
