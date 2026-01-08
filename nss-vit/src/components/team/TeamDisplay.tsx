/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ TeamDisplay.tsx
 * ╹ src/components/team/
 */

import { useState } from 'react';
import YearSelector from '../shared/YearSelector';
import PositionGroup from './PositionGroup';
import VolunteerSection from './VolunteerSection';

interface TeamMember {
  name: string;
  position: string;
  image?: string;
  email?: string;
  linkedin?: string;
  order?: number;
}

interface Team {
  year: string;
  fallbackImage?: string;
  members: TeamMember[];
}

interface VolunteerGroup {
  title: string;
  members: string[];
}

interface Volunteers {
  year: string;
  groups: VolunteerGroup[];
}

interface Props {
  teams: Team[];
  volunteers: Volunteers[];
}

const positionOrder = [
  // Faculty (always shown)
  'Program Officer', 'Faculty Advisor',
  // Leadership
  'In-Charge', 'Lead', 'Co-Lead', 'Operational Lead',
  // Heads
  'Documentation Head', 'Creatives Head', 'Events Head', 'Technical Head',
  'RRC Head', 'Publicity Head', 'Cultural Head', 'Social Media Head',
  // Leads & Coordinators
  'Documentation Lead', 'Creatives Lead', 'Events Lead',
  'Publicity Lead', 'Publicity Co-ordinator', 'Publicity Coordinator',
  'Cultural Lead', 'Social Media Lead', 'Social Media Co-ordinator',
];

export default function TeamDisplay({ teams, volunteers }: Props) {
  const [selectedYear, setSelectedYear] = useState(teams[0]?.year || '');

  const currentTeam = teams.find(t => t.year === selectedYear);
  const currentVolunteers = volunteers.find(v => v.year === selectedYear);

  const members = currentTeam?.members || [];
  const groupedMembers = positionOrder.reduce((acc, position) => {
    const posMembers = members.filter(m => m.position === position);
    if (posMembers.length > 0) {
      acc.push({ position, members: posMembers });
    }
    return acc;
  }, [] as { position: string; members: TeamMember[] }[]);

  const years = teams.map(t => t.year);

  return (
    <div>
      <YearSelector
        years={years}
        selectedYear={selectedYear}
        onSelectYear={setSelectedYear}
        className="mb-12"
      />

      <div className="mb-24">
        {groupedMembers.map(({ position, members }) => (
          <PositionGroup
            key={position}
            position={position}
            members={members}
            fallbackImage={currentTeam?.fallbackImage}
          />
        ))}
      </div>

      {currentVolunteers?.groups && (
        <VolunteerSection groups={currentVolunteers.groups} />
      )}
    </div>
  );
}
