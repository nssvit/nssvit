<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  accordionItems: {
    title: string;
    content: string;
  }[];
}>();

const activeIndex = ref<number | null>(null);

const toggleAccordion = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div class="max-w-5xl mx-auto p-4">
    <!-- Heading -->
    <h2 class="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-primary animate-fade-in my-6">
      List of Events
    </h2>
    <div class="space-y-6">
      <div
        v-for="(item, index) in accordionItems"
        :key="index"
        class="bg-gradient-card hover:bg-gradient-card-hover backdrop-blur-sm rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-blue-200 animate-fade-in"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <button
          class="w-full px-6 sm:px-8 py-4 sm:py-6 flex items-center justify-between text-left focus:outline-none rounded-xl group"
          @click="toggleAccordion(index)"
          :aria-expanded="activeIndex === index"
          :aria-controls="`accordion-content-${index}`"
        >
          <span class="text-lg sm:text-xl font-bold text-text group-hover:text-primary transition-colors duration-300">
            {{ item.title }}
          </span>
          <div :class="[
            'w-7 h-7 bg-gradient-accent group-hover:bg-gradient-button rounded-full flex items-center justify-center shadow-soft transition-all duration-300',
            { 'rotate-180': activeIndex === index }
          ]">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </button>
        <div
          :id="`accordion-content-${index}`"
          :class="[
            'px-6 sm:px-8 overflow-hidden transition-all duration-500 ease-in-out',
            activeIndex === index ? 'max-h-[1000px] py-4 sm:py-6' : 'max-h-0 py-0'
          ]"
          role="region"
          :aria-labelledby="`accordion-header-${index}`"
        >
          <div class="text-text leading-relaxed text-base sm:text-lg">
            <!-- Render content -->
            <p 
              v-for="(line, idx, arr) in item.content.split('\n')" 
              :key="idx"
              :class="getLineClass(line, idx, item.content.split('\n'))"
              v-html="line.trim()"
              v-if="line.trim() !== ''"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    getLineClass(line: string, idx: number, arr: string[]) {
      const trimmedLine = line.trim();
      const isLocationLine = trimmedLine.startsWith("Location:");
      const isTitleLine = idx === 0 || arr[idx - 1].trim() === "";

      if (isTitleLine && !isLocationLine && trimmedLine !== "") {
        // Title styled with primary color
        return "text-primary font-bold mt-2";
      } else if (isLocationLine) {
        // Location styled with accent color
        return "text-accent mt-1";
      } else if (trimmedLine !== "") {
        // Regular text
        return "mt-2";
      } else {
        return "";
      }
    }
  }
}
</script> 