import Carousel from '../Carousel';
import { useState } from 'react'
import React from 'react'

const CampCarousel = () => {
  const images = [
    "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740559377/img/2024-2025/camp/1.jpg",
    "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740559659/img/2024-2025/camp/14.jpg",
    "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740559671/img/2024-2025/camp/18.jpg",
    "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740559543/img/2024-2025/camp/16.jpg",
    "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740559544/img/2024-2025/camp/19.jpg"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <>
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-primary mb-4">
        Camp 2023-2024 Highlights
      </h2>
      <Carousel images={images} currentIndex={currentIndex} isTransitioning={isTransitioning} setCurrentIndex={setCurrentIndex} setIsTransitioning={setIsTransitioning} />
    </>
  )
}

export default CampCarousel
