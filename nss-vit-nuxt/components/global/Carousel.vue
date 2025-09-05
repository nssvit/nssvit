<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps<{
  images: string[];
}>();

const currentIndex = ref(0);
const isTransitioning = ref(false);
let timer: NodeJS.Timeout | null = null;

const nextSlide = () => {
  if (isTransitioning.value || props.images.length === 0) return;
  isTransitioning.value = true;
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const prevSlide = () => {
  if (isTransitioning.value || props.images.length === 0) return;
  isTransitioning.value = true;
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};

const startAutoScroll = () => {
  if (timer) clearInterval(timer);
  timer = setInterval(nextSlide, 5000);
};

onMounted(() => {
  if (props.images.length > 1) {
    startAutoScroll();
  }
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});

watch(isTransitioning, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      isTransitioning.value = false;
      if (props.images.length > 1) { // Restart autoscroll only if it was active
        startAutoScroll();
      }
    }, 700); // Duration of transition
  }
});

const handleManualChange = (action: 'prev' | 'next') => {
  if (timer) clearInterval(timer); // Stop autoscroll on manual interaction
  if (action === 'prev') prevSlide();
  else nextSlide();
  // Autoscroll will restart via the isTransitioning watcher
};

</script>

<template>
  <div class="relative w-full" v-if="images.length > 0">
    <!-- Carousel Wrapper -->
    <div class="relative h-56 overflow-hidden md:h-[30rem]">
      <div class="relative h-full w-full flex justify-center items-center">
        <TransitionGroup
          enter-active-class="transition-all duration-1000 ease-in-out"
          enter-from-class="opacity-0 scale-105"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-1000 ease-in-out absolute w-full h-full"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
          tag="div"
          class="relative h-full w-full"
        >
          <div
            v-for="(image, index) in images"
            :key="image + index"
            v-show="currentIndex === index"
            class="absolute w-full h-full"
          >
            <img
              :src="image"
              :alt="`Carousel item ${index + 1}`"
              class="w-full h-full object-cover"
            />
          </div>
        </TransitionGroup>
      </div>
    </div>

    <!-- Slider Controls -->
    <template v-if="images.length > 1">
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none focus:ring-0"
        @click="handleManualChange('prev')"
      >
        <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/60 dark:bg-gray-800/60 group-hover:bg-white/80 dark:group-hover:bg-gray-800/80">
          <svg
            class="w-5 h-5 text-black dark:text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none focus:ring-0"
        @click="handleManualChange('next')"
      >
        <span class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/60 dark:bg-gray-800/60 group-hover:bg-white/80 dark:group-hover:bg-gray-800/80">
          <svg
            class="w-5 h-5 text-black dark:text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </template>
  </div>
</template>