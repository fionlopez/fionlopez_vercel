import { useEffect } from 'react';
import { SectionId } from '../data/data';

export const useNavObserver = (
  selectors: string,
  handler: (section: SectionId | null) => void
) => {
  useEffect(() => {
    const headings = document.querySelectorAll<HTMLElement>(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible: { id: string; ratio: number } | null = null;

        for (const entry of entries) {
          const id = entry.target.getAttribute('id');
          if (!id) continue;

          // Only consider entries actually intersecting
          if (entry.isIntersecting) {
            if (
              !mostVisible ||
              entry.intersectionRatio > mostVisible.ratio
            ) {
              mostVisible = {
                id,
                ratio: entry.intersectionRatio,
              };
            }
          }
        }

        if (mostVisible?.id) {
          handler(mostVisible.id as SectionId);
        }
      },
      {
        root: null,
        threshold: [0.25, 0.5, 0.75], // Trigger on varying visibility
        rootMargin: '0px 0px -40% 0px', // Favor mid-screen sections
      }
    );

    headings.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [selectors, handler]);
};
