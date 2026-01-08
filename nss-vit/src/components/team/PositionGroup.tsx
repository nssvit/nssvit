/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ PositionGroup.tsx
 * ╹ src/components/team/
 */

import MemberCard from './MemberCard';

interface Member {
  name: string;
  position: string;
  image?: string;
  email?: string;
  linkedin?: string;
}

interface Props {
  position: string;
  members: Member[];
  fallbackImage?: string;
}

export default function PositionGroup({ position, members, fallbackImage }: Props) {
  const gridClass = members.length === 1
    ? 'grid-cols-1 max-w-sm'
    : members.length === 2
      ? 'grid-cols-1 md:grid-cols-2 max-w-2xl'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';

  return (
    <div className="mb-16 last:mb-0">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-title text-text">{position}</h2>
        <div className="flex-1 h-px bg-swiss-gray-200"></div>
      </div>

      <div className={`grid gap-6 ${gridClass}`}>
        {members.map((member) => (
          <MemberCard
            key={member.name}
            name={member.name}
            position={member.position}
            image={member.image}
            fallbackImage={fallbackImage}
            email={member.email}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
}
