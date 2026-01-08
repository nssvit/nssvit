/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ HomeTabs.tsx
 * ╹ src/components/home/
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TabItem {
  title: string;
  description: string;
}

interface TabData {
  values: TabItem[];
  objectives: TabItem[];
  goals: TabItem[];
}

interface Props {
  tabData?: TabData;
}

const defaultTabData: TabData = {
  values: [
    { title: 'Service', description: 'Power of service to transform communities.' },
    { title: 'Integrity', description: 'Highest standards of ethics and transparency.' },
    { title: 'Inclusivity', description: 'Welcoming environment for all.' },
    { title: 'Empowerment', description: 'Agents of positive change.' },
  ],
  objectives: [
    { title: 'Civic Engagement', description: 'Volunteerism among students.' },
    { title: 'Projects', description: 'Sustainable community initiatives.' },
    { title: 'Leadership', description: 'Teamwork and personal growth.' },
    { title: 'Partnerships', description: 'Collaborations for impact.' },
  ],
  goals: [
    { title: 'Development', description: 'Overall student growth.' },
    { title: 'Social Leaders', description: 'Drive positive change.' },
    { title: 'Administrators', description: 'Strong organizational skills.' },
    { title: 'Understanding', description: 'Human nature and society.' },
  ],
};

const tabs = [
  { id: 'values', label: 'Values' },
  { id: 'objectives', label: 'Objectives' },
  { id: 'goals', label: 'Goals' },
];

export default function HomeTabs({ tabData = defaultTabData }: Props) {
  const [activeTab, setActiveTab] = useState<'values' | 'objectives' | 'goals'>('values');

  // Merge provided data with defaults
  const data: TabData = {
    values: tabData.values?.length ? tabData.values : defaultTabData.values,
    objectives: tabData.objectives?.length ? tabData.objectives : defaultTabData.objectives,
    goals: tabData.goals?.length ? tabData.goals : defaultTabData.goals,
  };

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex border-b border-swiss-gray-200 dark:border-swiss-gray-700 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'values' | 'objectives' | 'goals')}
            className={`relative px-4 py-2 text-caption font-medium transition-colors ${
              activeTab === tab.id ? 'text-primary dark:text-secondary' : 'text-swiss-gray-500 dark:text-swiss-gray-400 hover:text-text dark:hover:text-swiss-gray-200'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary dark:bg-secondary"
                transition={{ duration: 0.2 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {data[activeTab].map((item, index) => (
            <div
              key={item.title}
              className="border border-swiss-gray-200 p-4 hover:border-primary transition-colors"
            >
              <span className="text-label text-primary mb-1 block">0{index + 1}</span>
              <h4 className="text-caption font-semibold text-text mb-1">{item.title}</h4>
              <p className="text-caption text-swiss-gray-600 text-xs">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
