<script setup lang="ts">
const { data: content } = await useAsyncData('home-about', () => queryContent('/home/about').findOne())
</script>
<template>
  <div v-if="content" class="py-12 px-6 sm:px-10 lg:px-16 bg-background animate-fade-in">
    <div class="max-w-6xl mx-auto text-center space-y-8">
      <h2 class="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-primary animate-fade-in">
        About
      </h2>
      <div class="bg-gradient-card p-8 rounded-2xl shadow-soft animate-fade-in">
        <h3 class="text-2xl font-semibold text-text">{{ content.title }}</h3>
        <p class="mt-4 text-text/80 text-md leading-relaxed">
          {{ content.nssDefinition }}
        </p>
        <h3 class="text-2xl font-semibold text-text mt-8">{{ content.whyJoinTitle }}</h3>
        <p class="mt-4 text-text/80 text-lg leading-relaxed text-left">
          {{ content.whyJoinIntro }}
        </p>
        <ul class="list-disc pl-6 mt-4 space-y-3 text-text/70 text-base text-left">
          <li v-for="(point, i) in content.whyJoinPoints" :key="i" class="hover:text-primary transition-colors">
            {{ point }}
          </li>
        </ul>
        <div class="mt-8 flex justify-center">
          <a
            :href="content.knowMoreLink"
            target='_blank'
            class='bg-gradient-button text-white py-3 px-8 rounded-full shadow-soft hover:animate-button-pop transform transition-all duration-300 hover:shadow-lg font-medium'
            rel="noopener noreferrer">
            Know More
          </a>
        </div>
      </div>
      <div class='p-8 animate-fade-in'>
        <p class="text-lg text-text/80 max-w-5xl mx-auto leading-relaxed text-balance">
          {{ content.vitNssDescription }}
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
        <div class="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col justify-between animate-fade-in">
          <h3 class="text-2xl font-semibold text-primary">{{ content.missionTitle }}</h3>
          <p class="mt-4 text-text/70">
            {{ content.missionDescription }}
          </p>
        </div>
        <div class="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col justify-between animate-fade-in" style="animation-delay: '0.2s'">
          <h3 class="text-2xl font-semibold text-primary">{{ content.visionTitle }}</h3>
          <p class="mt-4 text-text/70">
            {{ content.visionDescription }}
          </p>
        </div>
      </div>
      <div class="mt-16 animate-fade-in" style="animation-delay: '0.4s'">
        <p class="text-xl italic text-text/80 bg-gradient-card p-6 rounded-2xl shadow-soft inline-block">
          {{ content.ctaText }}
          <span class="block mt-2 font-semibold text-primary">
            {{ content.ctaHighlight }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>