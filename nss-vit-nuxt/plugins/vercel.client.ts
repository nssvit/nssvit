import { inject } from '@vercel/analytics';
import { speedInsights } from '@vercel/speed-insights';

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Initialize Vercel Analytics
    inject();
    
    // Initialize Vercel Speed Insights
    speedInsights();
  }
}); 