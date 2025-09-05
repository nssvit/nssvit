<script setup lang="ts">
import { queryContent } from '#imports'

const { data: homeData } = await useAsyncData('home-content', () => queryContent('/home').only(['title', 'pageTitle', 'description', 'ogImage', 'twitterImage']).findOne())

useHead({
  title: homeData.value?.pageTitle || 'NSS VIT | Home',
  meta: [
    { name: 'description', content: homeData.value?.description || 'Welcome to NSS VIT.' },
    { property: 'og:title', content: homeData.value?.pageTitle || 'NSS VIT | Home' },
    { property: 'og:description', content: homeData.value?.description || 'Welcome to NSS VIT.' },
    { property: 'og:image', content: homeData.value?.ogImage || '/img/nss-logo.png' },
    { name: 'twitter:title', content: homeData.value?.pageTitle || 'NSS VIT | Home' },
    { name: 'twitter:description', content: homeData.value?.description || 'Welcome to NSS VIT.' },
    { name: 'twitter:image', content: homeData.value?.twitterImage || '/img/nss-logo.png' },
  ]
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero section with carousel -->
    <section id="hero" class="relative">
      <HomeCarousel />
    </section>

    <!-- About NSS section -->
    <section id="about" class="py-16">
      <HomeAboutSection />
    </section>

    <!-- Values, Objectives, Goals tabs -->
    <section id="values" class="py-16 bg-background-alt">
      <HomeTabsComponent />
    </section>

    <!-- Announcements section -->
    <section id="announcements" class="py-16">
      <HomeAnnouncements />
    </section>

    <!-- FAQ section -->
    <section id="faq" class="py-16 bg-background-alt">
      <HomeFAQSection />
    </section>
  </div>
</template>