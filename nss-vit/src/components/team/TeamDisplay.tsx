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
  fallbackImage?: string;
}

//change the order of the positions 

const positionOrder = [
  // Faculty
  'Program Officer',
  'Faculty Advisor',
  
  // Leadership
  'Lead',
  'In-Charge',
  'Joint Lead',
  'Co-Lead',
  'Operational Lead',

  // Events
  'Events Head',
  'Events Lead',

  // Documentation
  'Documentation Head',
  'Documentation Lead',
  
  // Creatives
  'Creatives & Media Manager',
  'Creatives Head',
  'Creatives Lead',

  // Media / Publicity / Social
  'Media Lead',
  'Publicity Head',
  'Publicity Lead',
  'Social Media Head',
  'Social Media Lead',
  'Social Media Co-ordinator',

  // Cultural
  'Cultural Head',
  'Cultural Lead',

  // Technical
  'Technical Head',
  'Technical Lead',

  // Other Roles
  'Camp Lead',
  'Coordinator',
  'RRC Head',
  
  'Publicity Co-ordinator',
  'Publicity Coordinator',

];

export default function TeamDisplay({ teams, volunteers, fallbackImage }: Props) {
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
            fallbackImage={currentTeam?.fallbackImage || fallbackImage}
          />
        ))}
      </div>

      {currentVolunteers?.groups && (
        <VolunteerSection groups={currentVolunteers.groups} />
      )}
    </div>
  );
}
