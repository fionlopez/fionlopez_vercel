import React, { memo } from 'react'; // Memo import added
import { research, SectionId } from '../../data/data'; // External import
import Section from '../Layout/Section'; // Internal import

const ResearchSection = memo(() => {
  // Log the research data to check if it is an array and contains the expected data
  console.log(research); // This will log the data in the browser console

  return (
    <Section sectionId={SectionId.Research}>
      {/* "Research" title with bigger font and lighter grey */}
      <h2 className="text-4xl font-bold text-gray-300 mb-6">Research</h2> {/* Bigger and lighter grey */}

      <ul className="space-y-6">
        {research.map((item, index) => (
          <li key={index} className="border-l-4 border-blue-500 pl-4">
            {/* Location in slightly smaller font (still white) */}
            <div className="text-3xl font-bold text-white">{item.location}</div>

            {/* Title in smaller font (grey) */}
            <div className="text-xl font-semibold text-gray-400">{item.title}</div>

            {/* Date in smaller font (light grey) */}
            <div className="text-sm text-gray-400">{item.date}</div>

            <div className="text-gray-200">{item.content}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
});

ResearchSection.displayName = 'ResearchSection';

export default ResearchSection;
