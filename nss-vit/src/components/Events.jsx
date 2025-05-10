import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Slider from './events/Slider'
import Accordian from './events/Accordian'

const Events = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>NSS VIT | Events</title>

          <meta name="description" content="Explore the diverse events organized by NSS VIT, including workshops, seminars, and community outreach programs aimed at making a positive impact." />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="NSS VIT | Events" />
          <meta property="og:description" content="Explore the diverse events organized by NSS VIT, including workshops, seminars, and community outreach programs aimed at making a positive impact." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.nssvit.in/events" />
          <meta property="og:image" content="https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="nssvit.in" />
          <meta property="twitter:url" content="https://www.nssvit.in/events" />
          <meta name="twitter:title" content="NSS VIT | Events" />
          <meta name="twitter:description" content="Explore the diverse events organized by NSS VIT, including workshops, seminars, and community outreach programs aimed at making a positive impact." />
          <meta name="twitter:image" content="https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png" />

        </Helmet>
        <Slider />
        <Accordian />
      </div>
    </HelmetProvider>
  )
}

export default Events
