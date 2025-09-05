<script setup lang="ts">
const { data: pageData } = await useAsyncData('developers-page', () =>
  queryContent('/developers/list').findOne()
)

useHead({
  title: pageData.value?.pageTitle || 'NSS VIT | Developers',
  meta: [
    { name: 'description', content: pageData.value?.description || 'Meet the developers behind the NSS VIT website' },
    { property: 'og:title', content: pageData.value?.pageTitle || 'NSS VIT | Developers' },
    { property: 'og:description', content: pageData.value?.description || 'Meet the developers behind the NSS VIT website' },
    { property: 'og:url', content: 'https://www.nssvit.in/developers' },
    { property: 'og:image', content: pageData.value?.ogImage || 'https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png' },
    { name: 'twitter:title', content: pageData.value?.pageTitle || 'NSS VIT | Developers' },
    { name: 'twitter:description', content: pageData.value?.description || 'Meet the developers behind the NSS VIT website' },
    { name: 'twitter:image', content: pageData.value?.twitterImage || 'https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png' },
  ],
})
</script>

<template>
  <section class="py-16 bg-gradient-light" v-if="pageData">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-primary animate-fade-in">
        {{ pageData.headerTitle }}
      </h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div 
          v-for="(dev, index) in pageData.devs" 
          :key="index"
          class="bg-gradient-card hover:bg-gradient-card-hover transition-all duration-300 rounded-2xl shadow-soft hover:shadow-medium p-6 flex flex-col animate-fade-in"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
            <div class="flex-shrink-0">
              <img
                :src="dev.photo"
                :alt="dev.name"
                class="w-24 h-24 object-cover rounded-full border-4 border-white shadow-medium"
                loading="lazy"
              />
            </div>
            
            <div class="flex flex-col md:pt-3">
              <h3 class="text-2xl font-bold text-text">{{ dev.name }}</h3>
              <p class="text-accent font-medium mb-2">{{ dev.title }}</p>
              
              <div class="flex items-center gap-3 mt-1">
                <a 
                  :href="dev.linkedIn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="bg-blue-700 text-white p-2 rounded-full hover:bg-primary transition-colors duration-300 hover:animate-button-pop"
                  aria-label="LinkedIn Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a 
                  :href="dev.github" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="bg-blue-700 text-white p-2 rounded-full hover:bg-primary transition-colors duration-300 hover:animate-button-pop"
                  aria-label="GitHub Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a 
                  :href="dev.email" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="bg-blue-700 text-white p-2 rounded-full hover:bg-primary transition-colors duration-300 hover:animate-button-pop"
                  aria-label="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div class="bg-white bg-opacity-70 rounded-xl p-5 shadow-inner-soft">
            <p class="text-text leading-relaxed">{{ dev.description }}</p>
          </div>
          
          <div class="mt-6 self-center">
            <div class="h-1 w-16 bg-gradient-accent rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div class="mt-16 text-center">
        <NuxtLink 
          to="/team" 
          class="inline-block py-3 px-8 bg-gradient-button hover:bg-gradient-button-hover text-white font-medium rounded-full shadow-medium hover:shadow-strong transition-all duration-300 hover:animate-button-pop"
        >
          Meet our Unit
        </NuxtLink>
      </div>
    </div>
  </section>
  <div v-else class="min-h-screen flex items-center justify-center">
    <p>Loading developers information...</p>
  </div>
</template> 