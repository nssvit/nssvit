/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ DesktopNav.tsx
 * ╹ src/components/layout/
 */

import { ArrowUpRight } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

interface Props {
  links: NavLink[];
}

export default function DesktopNav({ links }: Props) {
  return (
    <>
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            data-astro-reload={link.href.startsWith('/#') ? true : undefined}
            className="text-sm font-medium text-swiss-gray-600 hover:text-text transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4">
        <a
          href="/get-involved"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 px-5 py-2.5 text-sm font-semibold transition-colors"
          style={{ color: 'white' }}
        >
          Get Involved
          <ArrowUpRight className="w-4 h-4" style={{ color: 'white' }} />
        </a>
      </div>
    </>
  );
}
