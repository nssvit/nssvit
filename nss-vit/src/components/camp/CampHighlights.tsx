/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ CampHighlights.tsx
 * ╹ src/components/camp/
 */

import { Check } from 'lucide-react';

interface Props {
  highlights: string[];
}

export default function CampHighlights({ highlights }: Props) {
  return (
    <div className="mb-16">
      <h4 className="text-title text-text mb-6 flex items-center gap-2">
        Key Highlights
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {highlights.map((highlight, index) => (
          <div key={index} className="border border-swiss-gray-200 p-4 flex items-center gap-3">
            <div className="w-6 h-6 bg-primary flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-caption text-text">{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
