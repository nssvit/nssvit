<script setup lang="ts">
// This page primarily exists to trigger the scroll to footer logic in default.vue
// You can add specific content here if needed, or just use it as a navigation target.
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

useHead({
  title: 'NSS VIT | Contact Us',
  meta: [
    { name: 'description', content: 'Get in touch with NSS VIT. Find our contact details and location.' }
  ]
});

onMounted(() => {
  // The layout (default.vue) will handle the scrolling.
  // If you want to ensure the layout's scroll logic has a target,
  // you can ensure the router navigates to home if this page is directly landed on
  // or just rely on the layout.
  // For simplicity, we assume the layout handles it.
  // If not, you might redirect to '/' and let the layout handle the hash.
  // Example: router.push({ path: '/', hash: '#contact' });
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center p-8">
      <h1 class="text-3xl font-bold text-primary mb-4">Contact Us</h1>
      <p class="text-lg text-text">
        You will be scrolled to our contact information at the bottom of the page.
      </p>
      <p class="mt-2 text-sm text-gray-600">
        If scrolling doesn't occur, please find our contact details in the footer.
      </p>
    </div>
  </div>
</template>