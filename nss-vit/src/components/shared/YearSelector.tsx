/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ YearSelector.tsx
 * ╹ src/components/shared/
 */

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface YearSelectorProps {
  years: string[];
  selectedYear?: string;
  defaultYear?: string;
  onSelectYear?: (year: string) => void;
  onYearChange?: string; // Global function name for Astro pages
  className?: string;
}

export default function YearSelector({
  years,
  selectedYear: controlledYear,
  defaultYear,
  onSelectYear,
  onYearChange,
  className = ''
}: YearSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  // Use controlled value, or default to first year, or defaultYear prop
  const [internalYear, setInternalYear] = useState(
    controlledYear || defaultYear || years[0] || ''
  );

  // Sync with controlled prop if provided
  useEffect(() => {
    if (controlledYear) {
      setInternalYear(controlledYear);
    }
  }, [controlledYear]);

  const selectedYear = controlledYear || internalYear;

  const handleSelect = (year: string) => {
    setInternalYear(year);
    setIsOpen(false);

    // Call direct callback if provided
    if (onSelectYear) {
      onSelectYear(year);
    }

    // Call global function if provided (for Astro pages)
    if (onYearChange && typeof window !== 'undefined') {
      const fn = (window as any)[onYearChange];
      if (typeof fn === 'function') {
        fn(year);
      }
    }
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 px-6 py-3 bg-primary text-white min-w-[140px] justify-between"
        >
          <span className="text-sm font-semibold whitespace-nowrap">{selectedYear}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-swiss-gray-200 z-20 shadow-sm min-w-[140px]">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => handleSelect(year)}
                className={`block w-full px-6 py-3 text-left text-sm hover:bg-swiss-gray-50 whitespace-nowrap ${
                  selectedYear === year ? 'text-primary font-semibold' : 'text-text'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
