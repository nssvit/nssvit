/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ JoinDetails.tsx
 * ╹ src/components/join/
 */

interface JoinDetailsProps {
  registrationOpen?: boolean;
  deadline?: string;
  formUrl?: string;
}

export default function JoinDetails({
  registrationOpen = false,
  deadline = 'January 30, 2026',
  formUrl = 'https://forms.google.com',
}: JoinDetailsProps) {
  if (!registrationOpen) {
    return null;
  }

  return (
    <section id="join" className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <span className="text-label text-primary mb-4 block">Get Involved</span>
          <h2 className="text-headline text-text mb-6">
            JOIN THE<br/>MOVEMENT
          </h2>
          <p className="text-body text-swiss-gray-600 max-w-md">
            Be part of something bigger than yourself. NSS VIT welcomes students who want to make a real difference in their community.
          </p>
        </div>

        <div className="md:col-span-7 md:col-start-7">
          <div className="border border-swiss-gray-200 p-8">
            <h3 className="text-title text-text mb-6">Registration Details</h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between py-3 border-b border-swiss-gray-100">
                <span className="text-caption text-swiss-gray-500">Eligibility</span>
                <span className="text-caption text-text">FY & SY Students</span>
              </div>
              <div className="flex justify-between py-3 border-b border-swiss-gray-100">
                <span className="text-caption text-swiss-gray-500">Deadline</span>
                <span className="text-caption text-text">{deadline}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-swiss-gray-100">
                <span className="text-caption text-swiss-gray-500">Hours Required</span>
                <span className="text-caption text-text">120 hours / year</span>
              </div>
              <div className="flex justify-between py-3 border-b border-swiss-gray-100">
                <span className="text-caption text-swiss-gray-500">Duration</span>
                <span className="text-caption text-text">2 Years</span>
              </div>
            </div>

            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-swiss btn-swiss-primary w-full justify-center"
            >
              Start Application
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M7 7h10v10"/>
                <path d="M7 17 17 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
