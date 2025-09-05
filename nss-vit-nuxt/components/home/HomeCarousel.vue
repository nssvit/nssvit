<script setup lang="ts">
import { useAsyncData } from 'nuxt/app'
import { queryContent } from '@nuxt/content/runtime'

const { data: carouselData } = await useAsyncData('home-carousel', () => queryContent('/home/carousel').findOne())
</script>

<template>
  <div v-if="carouselData?.images">
    <GlobalCarousel :images="carouselData.images" />
  </div>
  <div v-else class="h-56 md:h-[30rem] bg-gray-100 animate-pulse"></div>
</template> 