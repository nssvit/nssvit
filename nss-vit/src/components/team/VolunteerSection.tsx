/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ VolunteerSection.tsx
 * ╹ src/components/team/
 */

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface VolunteerGroup {
  title: string;
  members: string[];
}

interface Props {
  groups: VolunteerGroup[];
}

export default function VolunteerSection({ groups }: Props) {
  const [expandedGroup, setExpandedGroup] = useState<number | null>(0);

  return (
    <div className="border-t border-swiss-gray-200 pt-12 md:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4">
          <span className="text-label text-primary mb-2 md:mb-4 block">NSS 100 Unit</span>
          <h2 className="text-title md:text-headline text-text">OUR VOLUNTEERS</h2>
          <p className="text-caption md:text-body text-swiss-gray-600 mt-3 md:mt-4">
            The backbone of NSS VIT - our dedicated volunteers who actively participate in community service and social initiatives.
          </p>
        </div>

        <div className="md:col-span-8 space-y-3 md:space-y-4">
          {groups.map((group, idx) => (
            <div
              key={idx}
              className={`border transition-colors ${expandedGroup === idx ? 'border-primary' : 'border-swiss-gray-200'}`}
            >
              <button
                onClick={() => setExpandedGroup(expandedGroup === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left"
              >
                <div>
                  <span className="text-caption md:text-title font-semibold text-text">{group.title}</span>
                  <span className="text-xs md:text-caption text-swiss-gray-500 ml-2">
                    ({group.members.length})
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 md:w-5 md:h-5 transition-transform flex-shrink-0 ${expandedGroup === idx ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedGroup === idx && (
                <div className="px-4 pb-4 md:px-6 md:pb-6 border-t border-swiss-gray-100">
                  <div className="flex flex-wrap gap-1.5 md:gap-2 pt-3 md:pt-4">
                    {group.members.map((name, i) => (
                      <span key={i} className="px-2 py-1 md:px-3 bg-swiss-gray-50 text-xs md:text-caption text-text">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
