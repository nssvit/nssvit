import React from 'react';
import { useState } from 'react';
import Carousel from '../Carousel';
const HomeCarousel = () => {
  const images = [
    "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740557662/img/home-carousel/1.jpg",
    "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740557662/img/home-carousel/2.jpg",
    "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740557662/img/home-carousel/3.jpg",
    "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740557662/img/home-carousel/4.jpg",
    "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740557662/img/home-carousel/5.jpg",
    "https://res.cloudinary.com/du6zyqqyw/image/upload/f_auto,q_auto/v1740557662/img/home-carousel/6.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  return(
    <Carousel images={images} currentIndex={currentIndex} isTransitioning={isTransitioning} setCurrentIndex={setCurrentIndex} setIsTransitioning={setIsTransitioning}/>
  )
};

export default HomeCarousel;
