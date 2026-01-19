/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ NavLogo.tsx
 * ╹ src/components/layout/
 */

interface Props {
  nssLogo?: string;
  vitLogo?: string;
}

export default function NavLogo({ nssLogo = '/favicon.svg', vitLogo = '/favicon.svg' }: Props) {
  return (
    <a
      href="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      aria-label="Go to homepage"
    >
      <img
        src={nssLogo}
        alt="NSS Logo"
        className="h-8 md:h-9 w-auto"
      />
      <img
        src={vitLogo}
        alt="VIT Logo"
        className="h-5 md:h-6 w-auto brightness-0"
      />
    </a>
  );
}
