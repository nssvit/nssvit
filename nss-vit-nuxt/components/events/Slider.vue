<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps<{
  testimonials: {
    img: string;
    quote: string;
    name: string;
  }[];
}>();

const active = ref(0);
const autorotate = ref(true);
const isAnimating = ref(false);
let autorotateInterval: any = null;

const handleSlideChange = (newIndex: number) => {
  if (isAnimating.value || newIndex === active.value) return;
  isAnimating.value = true;
  active.value = newIndex;
  stopAutorotate();

  setTimeout(() => {
    isAnimating.value = false;
  }, 700);
};

const stopAutorotate = () => {
  autorotate.value = false;
  if (autorotateInterval) {
    clearInterval(autorotateInterval);
  }
};

watch(() => autorotate.value, (newVal) => {
  if (newVal && !isAnimating.value) {
    autorotateInterval = setInterval(() => {
      handleSlideChange((active.value + 1) % props.testimonials.length);
    }, 5000);
  } else {
    if (autorotateInterval) clearInterval(autorotateInterval);
  }
});

watch(() => isAnimating.value, (newVal) => {
  if (!newVal && autorotate.value) {
    if (autorotateInterval) clearInterval(autorotateInterval);
    autorotateInterval = setInterval(() => {
      handleSlideChange((active.value + 1) % props.testimonials.length);
    }, 5000);
  }
});

onMounted(() => {
  if (autorotate.value && !isAnimating.value) {
    autorotateInterval = setInterval(() => {
      handleSlideChange((active.value + 1) % props.testimonials.length);
    }, 5000);
  }
});

onUnmounted(() => {
  if (autorotateInterval) {
    clearInterval(autorotateInterval);
  }
});
</script>

<template>
  <div class="w-full max-w-5xl mx-auto my-4 sm:my-6 md:my-8 px-2 sm:px-4">
    <!-- Tabs Navigation -->
    <div class="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-full p-1 flex justify-between items-center shadow-lg overflow-hidden mb-4 sm:mb-6">
      <div
        class="absolute h-full w-1/4 rounded-full bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg transition-transform duration-300 ease-in-out"
        :style="{
          transform: `translateX(${active * 100}%)`,
        }"
      ></div>
      <div class="relative flex w-full justify-between items-center">
        <button
          v-for="(testimonial, index) in testimonials"
          :key="index"
          @click="handleSlideChange(index)"
          :disabled="isAnimating"
          :class="`
            flex-1 z-10
            px-1 
            py-1.5
            text-xs sm:text-sm md:text-base lg:text-lg
            font-medium
            text-center
            whitespace-nowrap
            transition-colors duration-300
            outline-none
            ${active === index ? 'text-white' : 'text-blue-700'}
            hover:opacity-90
            focus:outline-none
          `"
        >
          <span class="block truncate">
            {{ testimonial.name }}
          </span>
        </button>
      </div>
    </div>

    <!-- Image Container -->
    <div class="relative w-full aspect-video sm:aspect-[16/9] md:aspect-[16/8] bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg overflow-hidden mb-4 sm:mb-6">
      <img
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :src="testimonial.img"
        :alt="testimonial.name"
        :class="`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out ${
          active === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`"
        loading="lazy"
      />
    </div>

    <!-- Content -->
    <div 
      class="p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg transition-all duration-500 ease-in-out"
      :key="active"
    >
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :class="`transition-all duration-700 ease-in-out ${
          active === index ? 'opacity-100 block' : 'opacity-0 hidden'
        }`"
      >
        <blockquote class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-medium">
          "{{ testimonial.quote }}"
        </blockquote>
      </div>
    </div>

    <!-- Indicator dots -->
    <div class="flex justify-center items-center gap-2 sm:gap-3 mt-4 sm:mt-6">
      <button
        v-for="(_, index) in testimonials"
        :key="index"
        @click="handleSlideChange(index)"
        :class="`
          transition-all duration-500 ease-in-out
          rounded-full
          focus:outline-none
          h-1.5 sm:h-2
          ${active === index 
            ? 'w-6 sm:w-8 bg-gradient-to-r from-blue-300 to-purple-400' 
            : 'w-1.5 sm:w-2 bg-blue-200 hover:bg-blue-300'
          }
        `"
        :aria-label="`Go to slide ${index + 1}`"
      />
    </div>
  </div>
</template> 