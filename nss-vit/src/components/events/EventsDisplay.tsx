/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ EventsDisplay.tsx
 * ╹ src/components/events/
 */

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import EventCategoryTabs from './EventCategoryTabs';
import CategoryOverview from './CategoryOverview';
import EventAccordion from './EventAccordion';

interface Event {
  title: string;
  location?: string;
  description: string;
}

interface EventCategory {
  id: string;
  name: string;
  img: string;
  description: string;
}

interface EventDetail {
  category: string;
  events: Event[];
}

interface Props {
  categories: EventCategory[];
  eventDetails: EventDetail[];
}

export default function EventsDisplay({ categories, eventDetails }: Props) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || '');

  const currentCategory = categories.find(c => c.id === activeCategory);
  const currentEvents = eventDetails.find(e => e.category === activeCategory)?.events || [];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="space-y-12">
      <EventCategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <AnimatePresence mode="wait">
        {currentCategory && (
          <CategoryOverview
            key={activeCategory}
            name={currentCategory.name}
            img={currentCategory.img}
            description={currentCategory.description}
            eventCount={currentEvents.length}
          />
        )}
      </AnimatePresence>

      <EventAccordion events={currentEvents} />
    </div>
  );
}
