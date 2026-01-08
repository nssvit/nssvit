/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ MemberCard.tsx
 * ╹ src/components/team/
 */

interface Props {
  name: string;
  position: string;
  image?: string;
  fallbackImage?: string;
  email?: string;
  linkedin?: string;
}

export default function MemberCard({
  name,
  position,
  image,
  fallbackImage,
  email,
  linkedin
}: Props) {
  const displayImage = image || fallbackImage || '/favicon.svg';

  return (
    <div className="border border-swiss-gray-200 hover:border-primary p-4 md:p-6 transition-colors group">
      <div className="relative mb-3 md:mb-4">
        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-2 border-swiss-gray-100 group-hover:border-primary transition-colors bg-swiss-gray-100">
          <img
            src={displayImage}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-caption md:text-title font-semibold text-text mb-1">{name}</h3>
        <p className="text-xs md:text-caption text-swiss-gray-500 mb-3 md:mb-4">{position}</p>
        <div className="flex justify-center gap-2 md:gap-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-9 md:h-9 border border-swiss-gray-200 flex items-center justify-center text-swiss-gray-400 hover:border-primary hover:text-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-4 md:h-4">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="w-8 h-8 md:w-9 md:h-9 border border-swiss-gray-200 flex items-center justify-center text-swiss-gray-400 hover:border-primary hover:text-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-4 md:h-4">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
