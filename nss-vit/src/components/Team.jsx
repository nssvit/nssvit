import React from 'react'
import Profiles from './team/Profiles'
import Volunteers from './team/Volunteers'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Team = () => {
  return (
    <HelmetProvider>
      <div className="bg-background min-h-screen">
        <Helmet>
          <title>NSS VIT | Team</title>
          <meta name="description" content="Discover our NSS VIT Team, dedicated to fostering community service and personal growth among students through various social initiatives." />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="NSS VIT | Team" />
          <meta property="og:description" content="Discover our NSS VIT Unit, dedicated to fostering community service and personal growth among students through various social initiatives." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.nssvit.in/team" />
          <meta property="og:image" content="https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="nssvit.in" />
          <meta property="twitter:url" content="https://www.nssvit.in/team" />
          <meta name="twitter:title" content="NSS VIT | Team" />
          <meta name="twitter:description" content="Discover our NSS VIT Unit, dedicated to fostering community service and personal growth among students through various social initiatives." />
          <meta name="twitter:image" content="https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png" />
        </Helmet>
        
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center my-8 animate-fade-in text-transparent bg-clip-text bg-gradient-primary">
            Our Team
          </h1>
          <div className="max-w-7xl mx-auto">
            <Profiles />
            <Volunteers />
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default Team