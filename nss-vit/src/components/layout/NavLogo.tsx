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
    <div className="flex items-center gap-2">
      <a
        href="https://www.nss.gov.in"
        target="_blank"
        rel="noopener noreferrer"
        className="h-8 md:h-9"
      >
        <img
          src={nssLogo}
          alt="NSS Logo"
          className="h-full w-auto"
        />
      </a>
      <a
        href="https://www.vit.edu.in"
        target="_blank"
        rel="noopener noreferrer"
        className="h-5 md:h-6"
      >
        <img
          src={vitLogo}
          alt="VIT Logo"
          className="h-full w-auto brightness-0"
        />
      </a>
    </div>
  );
}
