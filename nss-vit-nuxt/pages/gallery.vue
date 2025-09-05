<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

useHead({
  title: 'NSS VIT | Gallery',
  meta: [
    { name: 'description', content: 'Explore some moments captured in our NSS VIT Gallery, showcasing the impact of our community service initiatives, events, and camps.' },
    { property: 'og:title', content: 'NSS VIT | Gallery' },
    { property: 'og:description', content: 'Explore some moments captured in our NSS VIT Gallery, showcasing the impact of our community service initiatives, events, and camps.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.nssvit.in/gallery' },
    { property: 'og:image', content: 'https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: 'nssvit.in' },
    { property: 'twitter:url', content: 'https://www.nssvit.in/gallery' },
    { name: 'twitter:title', content: 'NSS VIT | Gallery' },
    { name: 'twitter:description', content: 'Explore some moments captured in our NSS VIT Gallery, showcasing the impact of our community service initiatives, events, and camps.' },
    { name: 'twitter:image', content: 'https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png' },
  ],
});

const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740557641/img";

const sectionConfig2023 = { ab1: 18, ab2: 11, university: 11, clg: 17, camp: 33 };
const sectionConfig2024 = { ab1: 15, ab2: 21, university: 13, clg: 12, camp: 20 };

const categoryLabels: Record<string, string> = {
  ab1: "Area Based 1",
  ab2: "Area Based 2",
  university: "University",
  clg: "College",
  camp: "Camp",
};

const yearOptions = [
  { value: "2024-2025", label: "2024-2025" },
  { value: "2023-2024", label: "2023-2024" },
];

const selectedYear = ref(yearOptions[0].value);
const selectedCategory = ref('ab1');
const lightboxImage = ref('');
const isLightboxOpen = ref(false);
const imageLoaded = ref<Record<number, boolean>>({});
const isDropdownOpen = ref(false);

const currentConfig = computed(() => {
  return selectedYear.value === "2024-2025" ? sectionConfig2024 : sectionConfig2023;
});

const getImagesForSection = (section: string) => {
  const count = (currentConfig.value as Record<string, number>)[section];
  if (!count) return [];
  return Array.from({ length: count }, (_, i) =>
    `${CLOUDINARY_BASE_URL}/${selectedYear.value}/${section}/${i + 1}.jpg`
  );
};

const currentImages = computed(() => getImagesForSection(selectedCategory.value));

const handleYearChange = (year: string) => {
  selectedYear.value = year;
  selectedCategory.value = 'ab1'; // Reset category or keep current if applicable
  imageLoaded.value = {};
  isDropdownOpen.value = false;
};

const handleCategoryChange = (category: string) => {
  selectedCategory.value = category;
  imageLoaded.value = {};
};

const openLightbox = (image: string) => {
  lightboxImage.value = image;
  isLightboxOpen.value = true;
  if (process.client) {
    document.body.style.overflow = 'hidden';
  }
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
  lightboxImage.value = '';
  if (process.client) {
    document.body.style.overflow = 'auto';
  }
};

const handleImageLoad = (index: number) => {
  imageLoaded.value = { ...imageLoaded.value, [index]: true };
};

const categoryButtonIndex = computed(() => Object.keys(currentConfig.value).indexOf(selectedCategory.value));
const categoryButtonWidth = computed(() => 100 / Object.keys(currentConfig.value).length);

onMounted(() => {
  const handleEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  };
  if (process.client) {
    window.addEventListener('keydown', handleEsc);
  }
  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto'; // Ensure overflow is reset
    }
  });
});
</script>

<template>
  <div class="px-4 py-10 md:px-10 lg:px-16">
    <!-- Year Selector Dropdown -->
    <div class="max-w-5xl mx-auto mb-6">
      <div class="relative w-48 mx-auto">
        <button
          @click="isDropdownOpen = !isDropdownOpen"
          class="w-full px-4 py-2 text-left bg-gradient-to-r from-blue-300 to-purple-400 rounded-full shadow-soft hover:shadow-medium transition-all duration-300 flex items-center justify-between"
          aria-haspopup="true"
          :aria-expanded="isDropdownOpen"
        >
          <span class="text-white font-medium">{{ selectedYear }}</span>
          <svg
            class="w-5 h-5 text-white transition-transform duration-300"
            :class="{ 'transform rotate-180': isDropdownOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <Transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <div v-if="isDropdownOpen" class="absolute w-full mt-2 bg-white rounded-lg shadow-medium z-50">
            <button
              v-for="option in yearOptions"
              :key="option.value"
              @click="handleYearChange(option.value)"
              class="w-full px-4 py-2 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-blue-700 first:rounded-t-lg last:rounded-b-lg transition-colors duration-300"
            >
              {{ option.label }}
            </button>
          </div>
        </Transition>
      </div>
    </div>

    <!-- Category buttons -->
    <div class="max-w-5xl mx-auto mb-10 px-2 sm:px-4">
      <div class="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-full p-0.5 sm:p-1 flex justify-between items-center shadow-lg overflow-hidden">
        <!-- Animated selection indicator -->
        <div
          class="absolute h-full rounded-full bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg transition-transform duration-300"
          :style="{
            width: `${categoryButtonWidth}%`,
            transform: `translateX(${categoryButtonIndex * 100}%)`,
          }"
        ></div>

        <!-- Buttons -->
        <button
          v-for="(label, categoryKey) in categoryLabels"
          :key="categoryKey"
          v-show="Object.keys(currentConfig).includes(categoryKey)"
          @click="handleCategoryChange(categoryKey)"
          class="flex-1 z-10 py-2 px-1 text-xs xs:text-sm sm:text-base font-medium outline-none transition-colors duration-300 leading-tight min-h-[40px] flex items-center justify-center text-center"
          :class="selectedCategory === categoryKey ? 'text-white' : 'text-blue-700'"
        >
          <span class="inline-block">{{ label }}</span>
        </button>
      </div>
    </div>

    <!-- Image Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="(image, index) in currentImages"
        :key="image + index"
        class="relative aspect-square overflow-hidden rounded-lg bg-gradient-card hover:bg-gradient-card-hover shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
        :style="{ animationDelay: `${index * 0.05}s` }"
      >
        <img
          :src="image"
          :alt="`Gallery Image ${index + 1}`"
          class="absolute inset-0 w-full h-full transition-opacity duration-300"
          :class="imageLoaded[index] ? 'opacity-100' : 'opacity-0'"
          @click="openLightbox(image)"
          @load="handleImageLoad(index)"
          style="object-fit: cover; object-position: center"
          loading="lazy"
        />
        <div
          class="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-15 transition-opacity duration-300 cursor-pointer"
          @click="openLightbox(image)"
        ></div>
      </div>
      <div v-if="currentImages.length === 0" class="col-span-full text-center py-10 text-gray-500">
        No images available for this category and year.
      </div>
    </div>

    <!-- Lightbox -->
    <Transition name="lightbox-fade">
      <div
        v-if="isLightboxOpen"
        class="fixed inset-0 z-[100] bg-blue-800/90 flex items-center justify-center p-4 backdrop-blur-sm"
        @click="closeLightbox"
      >
        <div
          class="relative max-w-[90vw] max-h-[90vh] mx-auto animate-fade-in"
          @click.stop
        >
          <button
            class="absolute -top-12 right-0 text-white text-4xl hover:text-accent transition-colors focus:outline-none"
            @click="closeLightbox"
            aria-label="Close lightbox"
          >
            ×
          </button>
          <img
            :src="lightboxImage"
            alt="Enlarged gallery image"
            class="max-w-full max-h-[90vh] mx-auto rounded-lg shadow-strong"
            style="object-fit: contain; width: auto; height: auto"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}
/* Ensure animate-fade-in is defined in main.css or here if not global */
.animate-fade-in {
  animation: fade-in-up 0.6s ease-out forwards; /* or your definition */
}
@keyframes fade-in-up { /* if not global */
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>