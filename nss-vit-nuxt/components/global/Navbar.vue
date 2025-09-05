<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const navLinks = [
  { path: '/', name: 'Home' },
  { path: '/team', name: 'Team' },
  { path: '/events', name: 'Events' },
  { path: '/gallery', name: 'Gallery' },
  { path: '/camp', name: 'Camp' },
  { path: '/achievements', name: 'Achievements' },
];
</script>

<template>
  <nav class="bg-blue-800 border-b border-blue-700 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center space-x-2">
          <a
            href="https://www.nss.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xl text-background flex items-center space-x-2"
          >
            <div class="flex items-center space-x-2">
              <img
                src="https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png"
                alt="NSS Logo"
                class="h-10 sm:h-12 md:h-12"
              />
            </div>
          </a>

          <a
            href="https://www.vit.edu.in"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xl text-background flex items-center space-x-2"
          >
            <div class="flex items-center space-x-2">
              <img
                src="https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/vit-logo.png"
                alt="VIT Logo"
                class="h-6 sm:h-8 md:h-8"
              />
            </div>
          </a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="p-2 rounded-md text-lg font-medium transition-all duration-300 ease-in-out text-background hover:text-secondary hover:scale-105"
            active-class="text-secondary transform scale-105"
          >
            {{ link.name }}
          </NuxtLink>
        </div>

        <!-- Hamburger Menu (Mobile) -->
        <div class="flex md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="text-background hover:text-secondary focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
      <div v-if="isOpen" class="md:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="isOpen = false"
            class="block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out text-background hover:text-secondary hover:scale-105"
            active-class="text-secondary transform scale-105"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>