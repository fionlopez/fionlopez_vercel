import React, { memo } from 'react'; // Memo import added
import { publications, SectionId } from '../../data/data'; // External import
import Section from '../Layout/Section'; // Internal import

const PublicationsSection = memo(() => {
  // Separate papers and posters
  const researchPapers = publications.papers;
  const conferencePosters = publications.posters;

  return (
    <Section sectionId={SectionId.Publications}>
      <h2 className="text-4xl font-bold text-gray-300 mb-6">Publications</h2>

      {/* Research Papers Subsection */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-200 mb-4">Papers</h3>
        <ul className="space-y-6">
          {researchPapers.map((item, index) => (
            <li key={index} className="p-4 bg-gray-800 rounded-xl shadow-md">
              {item.citation && (
                <div className="text-gray-200">
                  {/* Apply italic selectively */}
                  {React.Children.map(item.citation, (child) =>
                    typeof child === 'string' ? (
                      <span>{child}</span>
                    ) : (
                      child
                    )
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Conference Posters Subsection */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-200 mb-4">Posters and Presentations</h3>
        <ul className="space-y-6">
          {conferencePosters.map((item, index) => (
            <li key={index} className="p-4 bg-gray-800 rounded-xl shadow-md">
              {item.citation && (
                <div className="text-gray-200">
                  {/* No italic here, allow selective styling */}
                  {item.citation}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
});

PublicationsSection.displayName = 'PublicationsSection';

export default PublicationsSection;
