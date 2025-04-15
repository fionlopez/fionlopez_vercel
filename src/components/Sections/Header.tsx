import { Dialog, Transition } from '@headlessui/react';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { FC, Fragment, memo, useCallback, useState } from 'react';

import { SectionId } from '../../data/data'; // Assuming this contains { Hero, About, Research, Publications, Outreach }
import { useNavObserver } from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

// Define prop types to accept isHeroVisible
interface HeaderProps {
  isHeroVisible: boolean;
}

const Header: FC<HeaderProps> = memo(({ isHeroVisible }) => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);

  const intersectionHandler = useCallback((section: SectionId | null) => {
    console.log('Updated current section:', section);
    setCurrentSection(section);
  }, []);

  const navSections: SectionId[] = [
    SectionId.About,
    SectionId.Research,
    SectionId.Publications,
    SectionId.Outreach,
    SectionId.Contact,
  ];

  useNavObserver(navSections.map((section) => `#${section}`).join(','), intersectionHandler);

  return (
    <div>
      <MobileNav currentSection={currentSection} navSections={navSections} isHeroVisible={isHeroVisible} />
      <DesktopNav currentSection={currentSection} navSections={navSections} isHeroVisible={isHeroVisible} />
    </div>
  );
});

const DesktopNav: FC<{
  navSections: SectionId[];
  currentSection: SectionId | null;
  isHeroVisible: boolean;
}> = memo(({ navSections, currentSection, isHeroVisible }) => {
  const baseClass =
    '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100';
  const activeClass = classNames(baseClass, 'text-orange-500');
  const inactiveClass = classNames(baseClass, 'text-neutral-100');

  return (
    <header className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block" id={headerID}>
      <nav className="flex justify-center gap-x-8">
        {navSections.map((section) => (
          <NavItem
            activeClass={activeClass}
            current={section === currentSection}
            inactiveClass={inactiveClass}
            key={section}
            section={section}
            isHeroVisible={isHeroVisible}
          />
        ))}
      </nav>
    </header>
  );
});

const MobileNav: FC<{
  navSections: SectionId[];
  currentSection: SectionId | null;
  isHeroVisible: boolean;
}> = memo(({ navSections, currentSection, isHeroVisible }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const baseClass =
    'p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500';
  const activeClass = classNames(baseClass, 'bg-neutral-900 text-white font-bold');
  const inactiveClass = classNames(baseClass, 'text-neutral-200 font-medium');

  return (
    <>
      <button
        aria-label="Menu Button"
        className="fixed right-2 top-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden"
        onClick={toggleOpen}>
        <Bars3BottomRightIcon className="h-8 w-8 text-white" />
        <span className="sr-only">Open sidebar</span>
      </button>
      <Transition.Root as={Fragment} show={isOpen}>
        <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full">
            <div className="relative w-4/5 bg-stone-800">
              <nav className="mt-5 flex flex-col gap-y-2 px-2">
                {navSections.map((section) => (
                  <NavItem
                    activeClass={activeClass}
                    current={section === currentSection}
                    inactiveClass={inactiveClass}
                    key={section}
                    onClick={toggleOpen}
                    section={section}
                    isHeroVisible={isHeroVisible}
                  />
                ))}
              </nav>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
});

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
  isHeroVisible: boolean;
}> = memo(({ section, current, inactiveClass, activeClass, onClick }) => {
  // Update the condition to only rely on 'current' state for active sections
  const isActive = current;

  return (
    <Link
      className={isActive ? activeClass : inactiveClass}
      href={`/#${section === 'About' ? SectionId.About : section}`}
      key={section}
      onClick={onClick}>
      {section}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;
