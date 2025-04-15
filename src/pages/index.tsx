import dynamic from 'next/dynamic';
import {FC, memo, useEffect, useState} from 'react';

import Page from '../components/Layout/Page';
import ContactSection from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import OutreachSection from '../components/Sections/Outreach';
import PublicationsSection from '../components/Sections/Publications';
import ResearchSection from '../components/Sections/Research';
import {homePageMeta} from '../data/data';

const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;

  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5,
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
      <Header isHeroVisible={isHeroVisible} />
      <Hero />
      <ResearchSection />
      <PublicationsSection />
      <OutreachSection />
      <ContactSection />
      <Footer />
    </Page>
  );
});

export default Home;
