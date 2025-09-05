<script setup lang="ts">
const { data: announcementsData } = await useAsyncData('home-announcements', () => queryContent('/home/announcements').findOne())
</script>

<template>
  <div v-if="announcementsData" class="py-12 px-6 sm:px-10 lg:px-16 bg-background animate-fade-in">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-primary mb-12">
        {{ announcementsData.title || 'Latest Announcements' }}
      </h2>
      
      <div v-if="announcementsData.announcements" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div v-for="(announcement, index) in announcementsData.announcements" :key="index" 
          class="p-6 bg-gradient-card rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col">
          
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-semibold text-primary">{{ announcement.title }}</h3>
            <span class="text-sm text-text/60 bg-primary/10 px-2 py-1 rounded">{{ announcement.date }}</span>
          </div>
          
          <p class="text-text/80 mb-4">{{ announcement.intro }}</p>
          
          <!-- Conditionally render images if available -->
          <div v-if="announcement.images && announcement.images.length" class="mb-4 grid grid-cols-3 gap-2">
            <div v-for="(img, imgIndex) in announcement.images.slice(0, 3)" :key="imgIndex" class="aspect-square overflow-hidden rounded-lg">
              <img :src="img" :alt="`Announcement image ${imgIndex + 1}`" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
          
          <!-- Single image if provided -->
          <div v-if="announcement.image" class="mb-4 w-full">
            <img :src="announcement.image" :alt="announcement.title" class="w-full h-48 object-cover rounded-lg" />
          </div>
          
          <p v-if="announcement.body" class="text-text/70 mb-4">{{ announcement.body }}</p>
          
          <!-- Optional link -->
          <div v-if="announcement.link" class="mt-auto pt-4">
            <NuxtLink :to="announcement.link.url" class="inline-flex items-center text-primary hover:text-primary-dark">
              {{ announcement.link.text }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Fallback for when there are no announcements -->
      <div v-else class="h-64 bg-gray-100 animate-pulse rounded-xl"></div>
    </div>
  </div>
</template> 