<script setup>
// Global CSS rules
useHead({
  bodyAttrs: {
    class: 'bg-background text-text selection:bg-primary/20 selection:text-primary',
  },
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { charset: 'utf-8' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Global CSS styles */
* {
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

/* Enable text selection for specific elements where needed */
p, h1, h2, h3, h4, h5, h6, span, a, li {
  user-select: text;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
}

/* For specific dynamic content areas */
.content-area {
  user-select: text;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
}

/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}
</style>
