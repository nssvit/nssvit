// This plugin defines types for Nuxt Content to help TypeScript

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  // No need to implement anything - this file just exists to make TypeScript happy
})

// Type declarations
declare module '@nuxt/content/runtime' {
  export interface ParsedContent {
    // Home page data
    pageTitle?: string
    title?: string
    description?: string
    ogImage?: string
    twitterImage?: string
    
    // Carousel data
    images?: string[]
    
    // FAQ data
    faqItems?: Array<{
      question: string
      answer: string
    }>
    
    // Announcements data
    announcements?: Array<{
      title: string
      date: string
      intro: string
      body?: string
      images?: string[]
      image?: string
      link?: {
        url: string
        text: string
      }
      details?: Array<{
        label: string
        value: string
        icon?: string
      }>
      todos?: string[]
      conclusion?: string
      highlight?: string
      highlightSubtext?: string
      greeting?: string
    }>
    
    // Tabs data
    tabs?: Array<{
      title: string
      items: Array<{
        title: string
        description: string
      }>
    }>
    
    // About data
    whatIsNssTitle?: string
    whatIsNssDescription?: string
    whyJoinTitle?: string
    whyJoinDescription?: string
    whyJoinPoints?: string[]
    descriptionPara?: string
    missionTitle?: string
    missionDescription?: string
    visionTitle?: string
    visionDescription?: string
    callToActionText?: string
    callToActionSubtext?: string
  }
} 