<script setup lang="ts">
import { ref } from 'vue';

const { data: faqData } = await useAsyncData('home-faq', () => queryContent('/home/faq').findOne())
const activeItem = ref<number | null>(null);

const toggleItem = (index: number) => {
  activeItem.value = activeItem.value === index ? null : index;
};
</script>

<template>
  <div v-if="faqData" class="py-12 px-6 sm:px-10 lg:px-16 bg-background-alt animate-fade-in">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-primary mb-12">
        {{ faqData.title || 'Frequently Asked Questions' }}
      </h2>

      <div v-if="faqData.faqItems && faqData.faqItems.length" class="space-y-4">
        <div v-for="(item, index) in faqData.faqItems" :key="index"
          class="bg-gradient-card rounded-xl shadow-soft overflow-hidden">
          <button 
            class="flex justify-between items-center w-full p-5 text-left focus:outline-none"
            @click="toggleItem(index)"
          >
            <h3 class="text-xl font-medium text-primary">{{ item.question }}</h3>
            <svg 
              class="w-6 h-6 text-primary transition-transform duration-300"
              :class="{ 'rotate-180': activeItem === index }"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            class="overflow-hidden transition-all duration-300"
            :class="{ 'max-h-0': activeItem !== index, 'max-h-96': activeItem === index }"
          >
            <div class="p-5 pt-0 text-text/80">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
      <div v-else class="h-64 bg-gray-100 animate-pulse rounded-xl"></div>
    </div>
  </div>
</template> 