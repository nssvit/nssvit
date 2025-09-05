<script setup lang="ts">
const { data: tabsContent } = await useAsyncData('home-tabs', () => queryContent('/home/tabs').findOne())
</script>

<template>
  <div v-if="tabsContent" class="py-12 px-6 sm:px-10 lg:px-16 bg-background-alt animate-fade-in">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-primary mb-12">
        Our Commitment
      </h2>
      <GlobalTabsComponent v-if="tabsContent.tabs" :tabs="tabsContent.tabs" />
      <div v-else class="h-64 bg-gray-100 animate-pulse rounded-xl"></div>
    </div>
  </div>
</template> 