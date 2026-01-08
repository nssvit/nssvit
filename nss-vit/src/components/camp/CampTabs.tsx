/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ CampTabs.tsx
 * ╹ src/components/camp/
 */

import { useState } from 'react';
import { TabButtons, TabContent, TabPanel } from '../shared/TabControl';

interface Benefit {
  title: string;
  description: string;
}

interface Props {
  significance: string;
  benefits: Benefit[];
  activities: string[];
}

const tabs = [
  { id: 'significance', label: 'Significance' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'activities', label: 'Activities' },
];

export default function CampTabs({ significance, benefits, activities }: Props) {
  const [activeTab, setActiveTab] = useState('significance');

  return (
    <div className="border-t border-swiss-gray-200 pt-16">
      <h4 className="text-headline text-text mb-8 text-center">About Special Camp</h4>

      <TabButtons
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        variant="button"
        centered
        className="mb-8"
      />

      <TabContent activeTab={activeTab}>
        <TabPanel tabId="significance" className="max-w-3xl mx-auto">
          <p className="text-body text-swiss-gray-600 text-center">
            {significance}
          </p>
        </TabPanel>

        <TabPanel tabId="benefits" className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <h5 className="text-title text-text mb-2">{benefit.title}</h5>
                <p className="text-caption text-swiss-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel tabId="activities" className="max-w-3xl mx-auto">
          <ul className="space-y-3">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-center gap-3 text-body text-swiss-gray-600">
                <span className="w-2 h-2 bg-primary flex-shrink-0"></span>
                {activity}
              </li>
            ))}
          </ul>
        </TabPanel>
      </TabContent>
    </div>
  );
}
