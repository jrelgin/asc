"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import styles from './VerticalScrollGallery.module.css';

interface ImageProps {
  src: string;
  alt: string;
}

interface VerticalScrollGalleryProps {
  images: ImageProps[];
  className?: string;
  speed?: number; // Animation duration in seconds
}

const VerticalScrollGallery: React.FC<VerticalScrollGalleryProps> = ({
  images,
  className = '',
  speed = 25 // Default animation duration (seconds)
}) => {
  // Reference to the inner gallery container
  const innerRef = useRef<HTMLDivElement>(null);
  
  // Set up intersection observer to detect when in view
  const [containerRef, inView] = useInView({
    threshold: 0.1
  });
  
  // Animation state tracking
  const [animationClass, setAnimationClass] = useState('paused');
  
  // Ensure we have minimum number of images
  const expandedImages = [...images];
  while (expandedImages.length < 10) {
    expandedImages.push(...images);
  }
  
  // Split images into columns
  const leftColumnImages = expandedImages.filter((_, i) => i % 2 === 0);
  const rightColumnImages = expandedImages.filter((_, i) => i % 2 === 1);
  
  // For the right column, we'll take the last image and move it to the top for visual balance
  // This creates the appearance of a partially visible image at the top
  const balancedRightColumn = [
    rightColumnImages[rightColumnImages.length - 1],
    ...rightColumnImages.slice(0, -1)
  ];
  
  // Double the images to create seamless loop
  const leftColumn = [...leftColumnImages, ...leftColumnImages];
  const rightColumn = [...balancedRightColumn, ...balancedRightColumn];
  
  // Update animation play state based on visibility
  useEffect(() => {
    if (!innerRef.current) return;
    
    // Set animation duration via style
    if (innerRef.current) {
      innerRef.current.style.animationDuration = `${speed}s`;
    }
    
    // Toggle animation play state based on visibility
    if (inView) {
      console.log('Gallery in view - running animation');
      setAnimationClass('running');
    } else {
      console.log('Gallery out of view - pausing animation');
      setAnimationClass('paused');
    }
  }, [inView, speed]);
  
  return (
    <div 
      ref={containerRef}
      className={`${styles.verticalScrollGalleryContainer} ${className}`}
    >
      <div 
        ref={innerRef}
        className={`${styles.verticalScrollGalleryInner} ${styles[animationClass]}`}
      >
        {/* Left column */}
        <div className={styles.column}>
          {leftColumn.map((image, index) => (
            <div
              key={`left-${index}`}
              className={styles.galleryImageWrapper}
            >
              <div className={styles.galleryImage}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 45vw, 30vw"
                  className="object-cover"
                  priority={index < 3}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Right column with staggered position */}
        <div className={`${styles.column} ${styles.staggeredColumn}`}>
          {rightColumn.map((image, index) => (
            <div
              key={`right-${index}`}
              className={styles.galleryImageWrapper}
            >
              <div className={styles.galleryImage}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 45vw, 30vw"
                  className="object-cover"
                  priority={index < 3}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalScrollGallery;
