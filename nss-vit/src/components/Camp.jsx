import React from 'react'
import AboutCamp from './camp/AboutCamp'
import CampTabs from './camp/CampTabs'
import CampCarousel from './camp/CampCarousel'
import CampDetails from './camp/CampDetails'
import ImpactSection from './camp/ImpactSection'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Camp = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>NSS VIT | Camp</title>

        <meta name="description" content="NSS VIT Special Camp engages in immersive community service experiences that foster teamwork, leadership, and social responsibility." />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="NSS VIT | Camp" />
        <meta property="og:description" content="NSS VIT Special Camp engages in immersive community service experiences that foster teamwork, leadership, and social responsibility." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nssvit.in/camp" />
        <meta property="og:image" content="https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="nssvit.in" />
        <meta property="twitter:url" content="https://www.nssvit.in/camp" />
        <meta name="twitter:title" content="NSS VIT | Camp" />
        <meta name="twitter:description" content="NSS VIT Special Camp engages in immersive community service experiences that foster teamwork, leadership, and social responsibility." />
        <meta name="twitter:image" content="https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png" />
        
      </Helmet>
      <AboutCamp />
      <CampTabs />
      <CampDetails />
      <CampCarousel />
      <ImpactSection/>
    </HelmetProvider>
  )
}

export default Camp
