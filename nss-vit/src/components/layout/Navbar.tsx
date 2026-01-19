/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ Navbar.tsx
 * ╹ src/components/layout/
 */

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import NavLogo from './NavLogo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

interface NavLink {
  name: string;
  href: string;
  isExternal?: boolean;
}

interface Props {
  nssLogo?: string;
  vitLogo?: string;
  navLinks?: NavLink[];
}

// Default navigation links as fallback
const defaultNavLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Team', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Camp', href: '/camp' },
  { name: 'Achievements', href: '/achievements' },
];

export default function Navbar({ nssLogo, vitLogo, navLinks }: Props) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use provided navLinks or fallback to defaults
  const links = navLinks?.length ? navLinks : defaultNavLinks;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full bg-white transition-all duration-300 ${
          isScrolled
            ? 'border-b border-swiss-gray-200 shadow-sm'
            : 'border-b border-swiss-gray-100'
        }`}
        style={{ zIndex: 9999 }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 sm:px-8 lg:px-10 py-3">
          <NavLogo nssLogo={nssLogo} vitLogo={vitLogo} />
          <DesktopNav links={links} />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-text hover:bg-swiss-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      <MobileNav
        links={links}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
