/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ GalleryControls.tsx
 * ╹ src/components/gallery/
 */

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Props {
  years: string[];
  selectedYear: string;
  onYearChange: (year: string) => void;
  categories: { key: string; label: string }[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function GalleryControls({
  years,
  selectedYear,
  onYearChange,
  categories,
  selectedCategory,
  onCategoryChange
}: Props) {
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between sticky top-0 z-30 bg-white/90 backdrop-blur-sm py-4 border-b border-swiss-gray-200">
      {/* Year Selector */}
      <div className="relative">
        <button
          onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
          className="flex items-center gap-3 px-6 py-3 bg-primary text-white min-w-[140px] justify-between"
        >
          <span className="text-sm font-semibold whitespace-nowrap">{selectedYear}</span>
          <ChevronDown className={`w-4 h-4 transition-transform flex-shrink-0 ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {isYearDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-swiss-gray-200 z-50 shadow-sm min-w-[140px]">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => {
                  onYearChange(year);
                  setIsYearDropdownOpen(false);
                }}
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

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onCategoryChange(key)}
            className={`px-4 py-2 text-caption font-medium transition-all ${
              selectedCategory === key
                ? 'bg-primary text-white shadow-sm'
                : 'bg-swiss-gray-50 text-swiss-gray-600 hover:bg-swiss-gray-100'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
