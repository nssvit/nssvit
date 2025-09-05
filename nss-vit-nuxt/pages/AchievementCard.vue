<script setup lang="ts">
defineProps<{
  achievement: {
    title: string;
    institution: string;
    image: string;
  };
  index: number;
}>();
</script>

<template>
  <div
    class="animate-fade-in relative overflow-hidden rounded-xl bg-gradient-card hover:bg-gradient-card-hover transition-all duration-300 p-6 shadow-soft hover:shadow-medium"
    :style="{ animationDelay: `${index * 0.1}s` }"
  >
    <div class="flex flex-col h-full space-y-4">
      <div class="relative h-64 w-full overflow-hidden rounded-lg">
        <img
          :src="achievement.image"
          :alt="achievement.title"
          class="h-full w-full object-cover transform transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div class="flex-1 space-y-2">
        <h3 class="text-text font-bold text-xl">{{ achievement.title }}</h3>
        <p class="text-blue-600 text-sm">{{ achievement.institution }}</p>
      </div>
      <div class="absolute top-4 right-4">
        <div class="w-8 h-8 flex items-center justify-center bg-gradient-accent rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>