<script setup lang="ts">
const { data: sliderData } = await useAsyncData('events-slider', () =>
  queryContent('/events/slider-data').findOne()
);

const { data: accordionData } = await useAsyncData('events-accordion', () =>
  queryContent('/events/accordion-data').findOne()
);

useHead({
  title: sliderData.value?.pageTitle || 'NSS VIT | Events',
  meta: [
    { name: 'description', content: sliderData.value?.description || 'Explore the diverse events organized by NSS VIT' },
    { property: 'og:title', content: sliderData.value?.pageTitle || 'NSS VIT | Events' },
    { property: 'og:description', content: sliderData.value?.description || 'Explore the diverse events organized by NSS VIT' },
    { property: 'og:url', content: 'https://www.nssvit.in/events' },
    { property: 'og:image', content: sliderData.value?.ogImage || 'https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png' },
    { name: 'twitter:title', content: sliderData.value?.pageTitle || 'NSS VIT | Events' },
    { name: 'twitter:description', content: sliderData.value?.description || 'Explore the diverse events organized by NSS VIT' },
    { name: 'twitter:image', content: sliderData.value?.twitterImage || 'https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png' },
  ],
});
</script>

<template>
  <div v-if="sliderData && accordionData">
    <EventsSlider :testimonials="sliderData.slides" />
    <EventsAccordion :accordionItems="accordionData.accordionItems" />
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
    <p>Loading events information...</p>
  </div>
</template> 