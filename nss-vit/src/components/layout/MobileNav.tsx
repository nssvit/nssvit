/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ MobileNav.tsx
 * ╹ src/components/layout/
 */

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

interface Props {
  links: NavLink[];
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ links, isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 top-[57px] z-[99] bg-white"
        onClick={onClose}
      />

      {/* Menu Content */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="fixed left-0 right-0 top-[57px] z-[100] bg-white border-b border-swiss-gray-200"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-6 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-3 text-lg font-medium text-text border-b border-swiss-gray-100 last:border-b-0 hover:text-primary transition-colors"
              onClick={onClose}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/get-involved"
            className="mt-4 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 px-5 py-3 text-sm font-semibold transition-colors"
            style={{ color: 'white' }}
            onClick={onClose}
          >
            Get Involved
            <ArrowUpRight className="w-4 h-4" style={{ color: 'white' }} />
          </a>
        </div>
      </motion.div>
    </>
  );
}
