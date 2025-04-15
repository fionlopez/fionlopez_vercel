import dynamic from 'next/dynamic';
import { FC, memo, useState, useEffect } from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import { homePageMeta } from '../data/data';

// Import the ResearchSection
import ResearchSection from '../components/Sections/Research'; // Adjust path if necessary
// Import the ResearchSection
import ContactSection from '../components/Sections/Contact'; // Adjust path if necessary


// Import the PublicationsSection
import PublicationsSection from '../components/Sections/Publications'; // Adjust path if necessary
import OutreachSection from '../components/Sections/Outreach';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;

  // State to track whether the Hero section is in view
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  // Intersection Observer to track Hero section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true);
        } else {
          setIsHeroVisible(false);
        }
      },
      {
        root: null,
        threshold: 0.5, // Trigger when 50% of the Hero section is visible
      }
    );

    const heroElement = document.getElementById('hero');
    if (heroElement) observer.observe(heroElement);

    return () => {
      if (heroElement) observer.unobserve(heroElement);
    };
  }, []);

  return (
    <Page description={description} title={title}>
      {/* Pass the isHeroVisible state to Header */}
      <Header isHeroVisible={isHeroVisible} />
      <Hero />
      <ResearchSection /> {/* Add the ResearchSection here */}
      <PublicationsSection /> {/* Corrected usage of PublicationsSection */}
      <OutreachSection /> 
      <ContactSection />
      <Footer />
    </Page>
  );
});

export default Home;
