<script setup lang="ts">
import { onMounted, watch, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const isLoading = ref(false);

// Handle route change loading state
router.beforeEach(() => {
  isLoading.value = true;
});

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 200); // Small delay to ensure smooth transitions
});

onMounted(() => {
  const handleRightClick = (e: MouseEvent) => {
    e.preventDefault();
  };
  document.addEventListener('contextmenu', handleRightClick);

  // Initial check for /contact path
  if (route.path === '/contact') {
    scrollToContact();
  }

  return () => {
    document.removeEventListener('contextmenu', handleRightClick);
  };
});

const scrollToContact = () => {
  // Ensure router is ready and then attempt to scroll
  router.isReady().then(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    } else {
      // If not immediately available, try after a short delay
      // This might happen if the footer hasn't rendered yet on initial load
      setTimeout(() => {
        const delayedContactSection = document.getElementById('contact');
        if (delayedContactSection) {
          delayedContactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 100);
    }
  });
};

// Watch for route changes to /contact
watch(() => route.path, (newPath) => {
  if (newPath === '/contact') {
    scrollToContact();
  }
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Loading indicator -->
    <div v-if="isLoading" class="fixed top-0 left-0 w-full h-1 bg-primary animate-pulse z-50"></div>
    
    <!-- Navigation -->
    <GlobalNavbar />
    
    <!-- Main content -->
    <main class="flex-grow">
      <NuxtPage />
    </main>
    
    <!-- Footer -->
    <GlobalFooter />
    
    <!-- Vercel Analytics and Speed Insights are loaded via plugin -->
    <NuxtRouteAnnouncer />
  </div>
</template>

<style scoped>
/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>