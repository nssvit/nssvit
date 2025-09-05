<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  volunteerData: Array<{
    title: string;
    members: string[];
  }>;
}>();

// State to track which accordion is open
const activeAccordion = ref<number | null>(null);

// Toggle accordion function
const toggleAccordion = (index: number) => {
  activeAccordion.value = activeAccordion.value === index ? null : index;
};
</script>

<template>
  <div class="max-w-4xl mx-auto p-4">
    <h2 class="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-primary animate-fade-in">
      NSS 100 Unit
    </h2>
    <div class="m-5 space-y-4">
      <div
        v-for="(item, index) in volunteerData"
        :key="index"
        :class="`border rounded-xl ${activeAccordion === index ? 'border-blue-300' : 'border-transparent'} bg-background shadow-soft animate-fade-in`"
        :style="{ animationDelay: `${index * 0.15}s` }"
      >
        <button
          @click="toggleAccordion(index)"
          :class="`w-full flex justify-between items-center gap-x-3 py-4 px-8 font-semibold text-text hover:text-primary focus:outline-none rounded-lg transition-all duration-300 ${
            activeAccordion === index ? 'bg-gradient-card-active' : 'bg-gradient-card'
          }`"
          :aria-expanded="activeAccordion === index ? 'true' : 'false'"
        >
          <span class="text-lg">{{ item.title }}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            :class="`transition-transform duration-700 transform ${activeAccordion === index ? 'rotate-180' : ''}`" 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            :fill="activeAccordion === index ? '#4338CA' : '#1E1B4B'"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </button>
        <div
          :class="`overflow-hidden transition-all duration-700 ease-out ${
            activeAccordion === index ? 'opacity-100 scale-100 max-h-[2000px]' : 'opacity-0 scale-95 max-h-0'
          }`"
        >
          <div class="px-8 py-6 bg-gradient-light">
            <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pl-5">
              <li v-for="(member, memberIndex) in item.members" :key="memberIndex" class="text-text">
                {{ member }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
 