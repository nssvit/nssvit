/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ CampInfoGrid.tsx
 * ╹ src/components/camp/
 */

import { MapPin, Calendar } from 'lucide-react';

interface Props {
  location: string;
  dates: string;
}

export default function CampInfoGrid({ location, dates }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div className="border border-swiss-gray-200 p-6 flex items-center gap-4">
        <div className="w-10 h-10 border border-primary flex items-center justify-center text-primary">
          <MapPin className="w-5 h-5" />
        </div>
        <div>
          <span className="text-label text-swiss-gray-400">Location</span>
          <p className="text-title text-text">{location}</p>
        </div>
      </div>
      <div className="border border-swiss-gray-200 p-6 flex items-center gap-4">
        <div className="w-10 h-10 border border-primary flex items-center justify-center text-primary">
          <Calendar className="w-5 h-5" />
        </div>
        <div>
          <span className="text-label text-swiss-gray-400">Dates</span>
          <p className="text-title text-text">{dates}</p>
        </div>
      </div>
    </div>
  );
}
