/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ TabControl.tsx
 * ╹ src/components/shared/
 */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
}

interface TabControlProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  variant?: 'underline' | 'button';
  centered?: boolean;
  className?: string;
}

export function TabButtons({
  tabs,
  activeTab,
  onTabChange,
  variant = 'underline',
  centered = false,
  className = ''
}: TabControlProps) {
  if (variant === 'button') {
    return (
      <div className={`flex ${centered ? 'justify-center' : ''} gap-2 ${className}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-6 py-3 text-caption font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-primary text-white'
                : 'bg-swiss-gray-50 text-swiss-gray-600 hover:bg-swiss-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex border-b border-swiss-gray-200 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`relative px-4 py-2 text-caption font-medium transition-colors ${
            activeTab === tab.id
              ? 'text-primary'
              : 'text-swiss-gray-500 hover:text-text'
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTabIndicator"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              transition={{ duration: 0.2 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}

interface TabPanelProps {
  children: React.ReactNode;
  tabId: string;
  className?: string;
}

export function TabPanel({ children, tabId, className = '' }: TabPanelProps) {
  return (
    <motion.div
      key={tabId}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface TabContentProps {
  activeTab: string;
  children: React.ReactNode;
}

export function TabContent({ activeTab, children }: TabContentProps) {
  return (
    <AnimatePresence mode="wait">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.props.tabId === activeTab) {
          return child;
        }
        return null;
      })}
    </AnimatePresence>
  );
}

export default TabButtons;
