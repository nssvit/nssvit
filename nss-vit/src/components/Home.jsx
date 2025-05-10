import React from 'react'
import HomeCarousel from './home/HomeCarousel'
import AboutSection from './home/AboutSection'
import HomeTabs from './home/HomeTabs'
import Announcement from './home/Announcement'
import FAQSection from './home/FAQSection'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>NSS VIT | Home</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="NSS VIT | Home" />
        <meta property="og:description"
          content="Welcome to NSS VIT. Join us in our mission to serve society and develop student personalities through community service and social initiatives." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nssvit.in" />
        <meta property="og:image" content="https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NSS VIT | Home" />
        <meta name="twitter:description"
          content="Welcome to NSS VIT. Join us in our mission to serve society and develop student personalities through community service and social initiatives." />
        <meta name="twitter:image" content="https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png" />
        <meta name="twitter:domain" content="nssvit.in" />
      </Helmet>
      <HomeCarousel />
      <AboutSection />
      <HomeTabs />
      <Announcement />
      <FAQSection />
    </HelmetProvider>
  )
}

export default Home
