/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ GalleryImageCard.tsx
 * ╹ src/components/gallery/
 */

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Props {
  src: string;
  alt: string;
  index: number;
  onClick: () => void;
}

export default function GalleryImageCard({ src, alt, index, onClick }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  if (hasError) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.03, 0.3) }}
      className="break-inside-avoid relative overflow-hidden border border-swiss-gray-200 cursor-zoom-in group mb-4 bg-swiss-gray-100"
      onClick={onClick}
    >
      {!isLoaded && (
        <div className="aspect-[4/3] bg-swiss-gray-100 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto object-cover transition-all duration-300 group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
        }`}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
      />
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
}
