/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ Accordion.tsx
 * ╹ src/components/shared/
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus } from 'lucide-react';

interface AccordionItemProps {
  title: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  icon?: 'chevron' | 'plus';
  badge?: React.ReactNode;
}

export function AccordionItem({
  title,
  children,
  isOpen,
  onToggle,
  icon = 'chevron',
  badge
}: AccordionItemProps) {
  return (
    <div className={`border transition-colors ${isOpen ? 'border-primary' : 'border-swiss-gray-200'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 md:p-6 text-left"
      >
        <div className="flex items-center gap-2 pr-4">
          <span className="text-caption md:text-title font-medium text-text">{title}</span>
          {badge}
        </div>
        {icon === 'plus' ? (
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.15 }}
            className="flex-shrink-0"
          >
            <Plus className="w-4 h-4 text-swiss-gray-400" />
          </motion.div>
        ) : (
          <ChevronDown
            className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-swiss-gray-100">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  defaultOpen?: number;
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  children,
  defaultOpen = 0,
  allowMultiple = false,
  className = 'space-y-2'
}: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpen !== null ? [defaultOpen] : []
  );

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndices(prev =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isOpen: openIndices.includes(index),
            onToggle: () => toggleIndex(index),
          });
        }
        return child;
      })}
    </div>
  );
}

export default Accordion;
