/* eslint-disable no-irregular-whitespace */
import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';
import profileImage from '../images/profile.jpg';
import heroImage from '../images/header-background.webp';
import outreachImage from '../images/outreach_1.webp'; // Static image import
import outreachImage2 from '../images/outreach_2.jpg';
import Loines from '../images/Loines.jpg';
import moon from '../images/moon.jpg';
import {Hero, HomepageMeta, TimelineItem} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Fiona Lopez',
  description: ' ',
};

/**
 * Section definition
 */
export const SectionId = {
  About: 'About',
  Research: 'Research',
  Publications: 'Publications',
  Outreach: 'Outreach',
  Contact: 'Contact',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  actions: [
    {
      href: '/assets/Fiona_Lopez_CV.pdf', // Ensure the CV is placed in the public/assets directory
      Icon: ArrowDownTrayIcon,
      primary: true,
      text: 'Curriculum Vitae (CV)',
    },
    {
      href: `#${SectionId.Contact}`,
      primary: false,
      text: 'Contact',
    },
  ],
  description: (
    <div>
      <p className="text-lg text-gray-200">
        I'm a graduate student pursuing my PhD in Astronomy at New Mexico State University, with a B.S. in Physics. My
        research interests focus on galaxy clusters and high-redshift galaxies.
      </p>
    </div>
  ),
  imageSrc: heroImage,
  name: `Fiona Lopez`,
  profilePic: profileImage, // Add this line to include the profile image
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const research: TimelineItem[] = [
  {
    date: 'Summer 2024-Present',
    location: 'Maria Mitchell Association/Remote',
    title: 'Research Assistant', //
    content: (
      <p>
        I started as a National Science Foundation Research Experiences for Undergraduates (NSF REU) intern at the Maria
        Mitchell Association during the summer of 2024. Since then I have continued working with Dr. Mónica Relaño, with
        whom I collaborated with there. I have been studying the interplay between dust, gas, and stars in high-redshift
        galaxies as part of the CRISTAL survey ([CII] Resolved ISM in Star-forming Galaxies with ALMA). This survey
        investigates the gas, dust, and stars in representative sample of star-forming galaxies at redshifts of z ~ 4-5
        on kiloparsec-spatially resolved scales. Specifically, I utilized JWST observations to create emission line maps
        for two galaxies within this sample. To analyze these maps, I processed the data in Python and performed
        Gaussian fiting to extract emission lines. based on these emission line maps, I derived estimates of the gas,
        dust, and star distributions within the galaxies, all through Python. Our findings are currently being prepared
        for publication.
      </p>
    ),
  },
  {
    date: 'Fall 2023-Present',
    location: 'University of Utah',
    title: 'Research Assistant', //
    content: (
      <p>
        I started as a National Science Foundation Research Experiences for Undergradutes (NSF REU) intern at the
        University of Utah during the summer of 2023. Since then I have continued working with Dr. Daniel Wik, with whom
        I collaborated with there. I used NuSTAR observations of 10 relaxed galaxy clusters to measure their
        temperatures and compared them with measurements from Chandra and XMM-Newton in identical regions. This process
        involved NuSTAR observations using light curve filtering, background characterization, and global spectral
        extraction/fitting. All of this work was done in IDL and Xspec (spectral fitting program). Our findings are
        currently being submitted for publication.
      </p>
    ),
  },
  {
    date: 'Fall 2022-Spring 2023',
    location: 'Texas A&M University',
    title: 'Research student', //
    content: (
      <p>
        {' '}
        I was in a group of undergraduate students, led by Dr. Rolan Allen, which explored the potential evidence for a
        dark matter particle with second-gauge couplings. I contributed in calculating the cross-section of the proposed
        particle using Monte Carlo integration in Python.
      </p>
    ),
  },
];

// In data.tsx
export const publications = {
  papers: [
    {
      citation: (
        <>
          <strong>F. Lopez</strong>, D. R. Wik, C. Potter, R. A. Rojas Bolivar, A. Tümer, D. Eckert, F. Gastaldello, B.
          R. Grefenstette, K. Madsen, B. Maughan, E. D. Miller, G. Schellenberger, and A. N. Wallbank{' '}
          {/* prettier-ignore */}
          <em>
            “Cross-Calibration of Galaxy Cluster Temperatures Measured with NuSTAR, XMM-Newton, and Chandra,” Accepted, pending ApJ publication
          </em>
        </>
      ),
    },
    {
      citation: (
        <>
          R. Allen, B. Tallman, A. Boone, A. Vijayakumar, <strong>F. Lopez</strong>, S. Apata, and J. Martinez,
          <em>
            “Potential for Definitive Discovery of a 70GeV Dark Matter WIMP with Only Second-Order Gauge Couplings,”{' '}
            <a
              href="https://doi.org/10.31526/lhep.2023.342"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              LHEP 2023 (2023) 342
            </a>
          </em>
        </>
      ),
    },
    {
      citation: (
        <>
          B. Tallman, A. Boone, C. LaFontaine, T. Croteau, Q. Ballard, S. Hernandez, S. Ellis, A. Vijayakumar,{' '}
          <strong>F. Lopez</strong>, S. Apata, J. Martinez, and R. Allen{' '}
          <em>
            “Indirect detection, direct detection, and collider detection cross-sections for a 70 GeV dark matter WIMP,”{' '}
            <a
              href="https://doi.org/10.22323/1.414.0988"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              PoS ICHEP2022 (2022) 988
            </a>
          </em>
        </>
      ),
    },

    // Add more papers as needed
  ],
  posters: [
    {
      citation: (
        <>
          <strong>F. Lopez</strong>, M. Relaño, "Investigating the role of interstellar dust, gas and stars in
          high-redshift galaxies using ALMA and JWST observations", 245th American Astronomical Society Meeting, poster
          session, 2025.
        </>
      ),
    },
    {
      citation: (
        <>
          <strong>F. Lopez</strong>, D. Wik, and C. Potter, "Galaxy Cluster Temperatures: Solving the Discrepancy​
          Between Chandra and XMM-Newton Using NuSTAR's Precision​", 243rd American Astronomical Society Meeting, poster
          session, 2024.
        </>
      ),
    },
    {
      citation: (
        <>
          B. Tallman, A. Boone, C. LaFontaine, T. Croteau, Q. Ballard, S. Hernandez, S. Ellis, A. Vijayakumar,
          <strong>F. Lopez</strong>, S. Apata, J. Martinez, and R. Allen, "Potential for Evidence of a Dark Matter
          Particle with Second Order Gauge Couplings​", American Physics Society Texas Section Meeting, presentation,
          2022.
        </>
      ),
    },
    // Add more posters as needed
  ],
};

// data.tsx
export const outreach = [
  {
    location: 'Texas A&M University',
    title: 'Department of Physics & Astronomy',
    content: `
    I volunteered as a Physics Demo Presenter at various
    department outreach events, including the TAMU Physics Festival, First
    Friday in Historic Downtown Bryan, and the TAMU EnVision Conference. Whether
    engaging the local community at First Friday or contributing to our largest event,
    the Physics Festival, I've enjoyed sharing the excitement of physics with the community.
    One of my favorite demonstrations to present is the Van de Graaff generator.
  `,
    imageSrc: [outreachImage, outreachImage2], // Use StaticImageData type here
  },
  {
    location: 'Maria Mitchell Association',
    title: 'Loines Observatory',
    content: `
    I worked open nights at Loines Observatory, where I guided participants
    on a special evening of stargazing. On some nights, I led tours of Nantucket's night sky, 
    helping visitors identify constellations. On other nights, I operated the 24-inch refracting telescope
    or the 8-inch reflecting telescope, allowing visitors to observe the Moon,
    stars, nebulae, and globular clusters. 
  `,
    imageSrc: [Loines, moon], // Use StaticImageData type here
  },
];
