/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ CampThemeBanner.tsx
 * ╹ src/components/camp/
 */

import { Sparkles } from 'lucide-react';

interface Props {
  theme: string;
}

export default function CampThemeBanner({ theme }: Props) {
  return (
    <div className="bg-primary p-8 mb-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 border-2 border-white/30 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <span className="text-label text-white/70">Theme</span>
          <h3 className="text-headline text-white">{theme}</h3>
        </div>
      </div>
    </div>
  );
}
