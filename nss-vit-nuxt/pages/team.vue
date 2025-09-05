<script setup lang="ts">
const { data: profilesData } = await useAsyncData('team-profiles', () =>
  queryContent('/team/profiles').findOne()
);

const { data: volunteersData } = await useAsyncData('team-volunteers', () =>
  queryContent('/team/volunteers').findOne()
);

useHead({
  title: profilesData.value?.pageTitle || 'NSS VIT | Team',
  meta: [
    { name: 'description', content: profilesData.value?.description || 'Discover our NSS VIT Team, dedicated to fostering community service and personal growth among students' },
    { property: 'og:title', content: profilesData.value?.pageTitle || 'NSS VIT | Team' },
    { property: 'og:description', content: profilesData.value?.description || 'Discover our NSS VIT Team, dedicated to fostering community service and personal growth among students' },
    { property: 'og:url', content: 'https://www.nssvit.in/team' },
    { property: 'og:image', content: profilesData.value?.ogImage || 'https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png' },
    { name: 'twitter:title', content: profilesData.value?.pageTitle || 'NSS VIT | Team' },
    { name: 'twitter:description', content: profilesData.value?.description || 'Discover our NSS VIT Team, dedicated to fostering community service and personal growth among students' },
    { name: 'twitter:image', content: profilesData.value?.twitterImage || 'https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png' },
  ],
});
</script>

<template>
  <div v-if="profilesData && volunteersData" class="bg-background min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl md:text-5xl font-bold text-center my-8 animate-fade-in text-transparent bg-clip-text bg-gradient-primary">
        {{ profilesData.headerTitle }}
      </h1>
      <div class="max-w-7xl mx-auto">
        <TeamProfiles 
          :profiles="profilesData.profiles" 
          :defaultFallbackImg="profilesData.defaultFallbackImg" 
        />
        <TeamVolunteers 
          :volunteerData="volunteersData.volunteerData" 
        />
      </div>
    </div>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
    <p>Loading team information...</p>
  </div>
</template> 