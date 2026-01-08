/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ GalleryGrid.tsx
 * ╹ src/components/gallery/
 */

import { useState, useEffect } from 'react';
import GalleryControls from './GalleryControls';
import GalleryImageCard from './GalleryImageCard';
import ImageLightbox from '../shared/ImageLightbox';

interface GallerySection {
  label: string;
  images: string[];
}

interface GalleryConfig {
  year: string;
  sections: Record<string, GallerySection>;
}

interface Props {
  galleries: GalleryConfig[];
}

export default function GalleryGrid({ galleries }: Props) {
  const [selectedYear, setSelectedYear] = useState(galleries[0]?.year || '');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const currentGallery = galleries.find(g => g.year === selectedYear);
  const sections = currentGallery?.sections || {};
  const categoryKeys = Object.keys(sections);

  // Set default category when year changes
  useEffect(() => {
    if (categoryKeys.length > 0 && !categoryKeys.includes(selectedCategory)) {
      setSelectedCategory(categoryKeys[0]);
    }
  }, [selectedYear, categoryKeys, selectedCategory]);

  const images = sections[selectedCategory]?.images || [];
  const years = galleries.map(g => g.year);
  const categories = categoryKeys.map(key => ({
    key,
    label: sections[key].label
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (galleries.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-swiss-gray-500">No galleries available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <GalleryControls
        years={years}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <p className="text-caption text-swiss-gray-500">
        {images.length > 0
          ? `Showing ${images.length} moments from ${sections[selectedCategory]?.label || 'selected category'}`
          : `No images available for ${sections[selectedCategory]?.label || 'selected category'}`}
      </p>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
        {images.map((image, index) => (
          <GalleryImageCard
            key={`${selectedYear}-${selectedCategory}-${index}`}
            src={image}
            alt={`NSS Gallery Moment ${index + 1}`}
            index={index}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      <ImageLightbox
        images={images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        alt="Gallery photo"
      />
    </div>
  );
}
