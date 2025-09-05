<script setup lang="ts">
const { data: pageData } = await useAsyncData('achievements-page', () =>
  queryContent('/achievements/list').findOne()
)

useHead({
  title: pageData.value?.pageTitle || 'NSS VIT | Achievements',
  meta: [
    { name: 'description', content: pageData.value?.description || 'Default achievements description' },
    { property: 'og:title', content: pageData.value?.pageTitle || 'NSS VIT | Achievements' },
    { property: 'og:description', content: pageData.value?.description || 'Default achievements description' },
    { property: 'og:url', content: `https://www.nssvit.in/achievements` },
    { property: 'og:image', content: pageData.value?.ogImage || 'https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png' },
    { name: 'twitter:title', content: pageData.value?.pageTitle || 'NSS VIT | Achievements' },
    { name: 'twitter:description', content: pageData.value?.description || 'Default achievements description' },
    { name: 'twitter:image', content: pageData.value?.twitterImage || 'https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png' },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-gradient-light py-16 px-4 sm:px-6 lg:px-8" v-if="pageData">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-4 animate-fade-in">
          {{ pageData.headerTitle }}
        </h2>
        <p class="text-lg text-blue-600 max-w-2xl mx-auto animate-fade-in" style="animation-delay: 0.1s;">
          {{ pageData.headerDescription }}
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AchievementsAchievementCard
          v-for="(achievement, index) in pageData.items"
          :key="index"
          :achievement="achievement"
          :index="index"
        />
      </div>
    </div>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
      <p>Loading achievements...</p>
  </div>
</template>