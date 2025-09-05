// Type declarations for Nuxt Content
declare global {
  const queryContent: (path: string) => {
    only: (fields: string[]) => { findOne: () => Promise<any> },
    findOne: () => Promise<any>
  }
  
  // Add additional type definitions as needed
  interface ContentData {
    [key: string]: any;
    
    // Home page data
    pageTitle?: string;
    title?: string;
    description?: string;
    ogImage?: string;
    twitterImage?: string;
    
    // Carousel data
    images?: string[];
    
    // FAQ data
    faqItems?: Array<{
      question: string;
      answer: string;
    }>;
    
    // Announcements data
    announcements?: Array<{
      title: string;
      date: string;
      intro: string;
      body?: string;
      images?: string[];
      image?: string;
      link?: {
        url: string;
        text: string;
      };
      details?: Array<{
        label: string;
        value: string;
        icon?: string;
      }>;
      todos?: string[];
      conclusion?: string;
      highlight?: string;
      highlightSubtext?: string;
      greeting?: string;
    }>;
    
    // Tabs data
    tabs?: Array<{
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    }>;
    
    // About data
    whatIsNssTitle?: string;
    whatIsNssDescription?: string;
    whyJoinTitle?: string;
    whyJoinDescription?: string;
    whyJoinPoints?: string[];
    descriptionPara?: string;
    missionTitle?: string;
    missionDescription?: string;
    visionTitle?: string;
    visionDescription?: string;
    callToActionText?: string;
    callToActionSubtext?: string;
  }
}

export {}; 