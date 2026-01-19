/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ JoinCTA.tsx
 * ╹ src/components/join/
 */

interface JoinCTAProps {
  registrationOpen?: boolean;
  batch?: string;
  deadline?: string;
  formUrl?: string;
}

export default function JoinCTA({
  registrationOpen = false,
  batch = '2027',
  deadline = 'January 30, 2026',
  formUrl = 'https://forms.google.com',
}: JoinCTAProps) {
  if (!registrationOpen) {
    return null;
  }

  return (
    <a href="#join" className="flex-1 bg-primary p-6 flex flex-col justify-between group">
      <div>
        <span className="text-label text-white/70 mb-2 block">Registration Open</span>
        <h3 className="text-title text-white">Join the Movement</h3>
        <p className="text-caption text-white/70 mt-2">Batch {batch} applications now open</p>
        <p className="text-caption text-white/50 mt-1">Deadline: {deadline}</p>
      </div>
      <div className="self-end mt-4 w-10 h-10 border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 7h10v10"/>
          <path d="M7 17 17 7"/>
        </svg>
      </div>
    </a>
  );
}
