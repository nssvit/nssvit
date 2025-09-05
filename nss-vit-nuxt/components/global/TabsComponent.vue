<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  activeTab: number;
  tabs: string[];
  contents: Array<{ title?: string; description: string }[]>;
}>();

const emit = defineEmits(['update:activeTab']);

const tabWidthPercentage = computed(() => {
  return props.tabs.length > 0 ? 100 / props.tabs.length : 0;
});

const indicatorTransform = computed(() => {
  return `translateX(${props.activeTab * 100}%)`; // Assuming each tab takes up 100% of the indicator's possible movement section
});
</script>

<template>
  <div class="max-w-5xl mx-auto my-8 px-4">
    <!-- Tabs -->
    <div class="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-full p-1 flex justify-between items-center shadow-lg overflow-hidden">
      <div
        class="absolute h-10 rounded-full bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg transition-transform duration-300"
        :style="{ width: `${tabWidthPercentage}%`, transform: indicatorTransform }"
      ></div>
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        class="flex-1 z-10 py-2 text-sm font-medium outline-none transition-colors duration-300"
        :class="[activeTab === index ? 'text-white' : 'text-blue-700', 'sm:text-base md:text-lg']"
        @click="emit('update:activeTab', index)"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Content -->
    <div class="mt-4 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-md">
      <Transition name="fade" mode="out-in">
        <div :key="activeTab">
          <div v-for="(contentItem, contentIndex) in contents[activeTab]" :key="contentIndex" class="mb-4 last:mb-0">
            <h3 v-if="contentItem.title" class="text-md sm:text-lg md:text-lg font-semibold text-blue-700">
              {{ contentItem.title }}
            </h3>
            <p class="text-base sm:text-md md:text-lg text-gray-700 mt-2">
              {{ contentItem.description }}
            </p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>