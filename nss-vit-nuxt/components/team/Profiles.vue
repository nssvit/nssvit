<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  profiles: Array<{
    name: string;
    img: string;
    linkedin: string;
    email: string;
    position: string;
  }>;
  defaultFallbackImg: string;
}>();

// Group profiles by position
const groupedByPosition = computed(() => {
  return props.profiles.reduce((acc, item) => {
    (acc[item.position] = acc[item.position] || []).push(item);
    return acc;
  }, {} as Record<string, any[]>);
});

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = props.defaultFallbackImg;
};
</script>

<template>
  <div class="space-y-12 my-10">
    <div v-for="position in Object.keys(groupedByPosition)" :key="position" class="p-4">
      <h2 class="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-primary animate-fade-in">
        {{ position }}
      </h2>
      <div class="flex flex-wrap justify-center gap-8 m-2">
        <div 
          v-for="(item, index) in groupedByPosition[position]" 
          :key="index" 
          class="max-w-sm bg-gradient-card hover:bg-gradient-card-hover border border-blue-200 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 p-6 mt-2 animate-fade-in"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="relative">
            <div class="h-48 w-48 mx-auto rounded-full overflow-hidden bg-gradient-light p-1.5 shadow-inner-soft">
              <img
                :src="item.img || defaultFallbackImg"
                @error="handleImageError"
                :alt="item.name"
                class="h-full w-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
          </div>
          <div class="p-3 text-center">
            <h3 class="text-xl font-semibold text-text">{{ item.name }}</h3>
            <div class="flex justify-center mt-4 space-x-4">
              <a
                v-if="item.linkedin"
                :href="item.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="group"
                :aria-label="`LinkedIn profile of ${item.name}`"
              >
                <div class="w-10 h-10 bg-gradient-button group-hover:bg-gradient-button-hover rounded-full flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:animate-button-pop">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </a>
              <a
                :href="item.email"
                target="_blank"
                rel="noopener noreferrer"
                class="group"
                :aria-label="`Email ${item.name}`"
              >
                <div class="w-10 h-10 bg-gradient-accent group-hover:bg-gradient-button-hover rounded-full flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:animate-button-pop">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 