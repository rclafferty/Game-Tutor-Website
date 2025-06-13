import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const cycleTime = 7;

const imageList = [
  {
    "image": '/images/164558.jpeg',
    "page": "service/unity"
  },
  {
    "image": '/images/259600.jpeg',
    "page": "service/unreal"
  },
  {
    "image": '/images/277667.jpeg',
    "page": "service/unity"
  },
  {
    "image": '/images/277667.jpeg',
    "page": "service/unreal"
  },
  {
    "image": '/images/277667.jpeg',
    "page": "service/unity"
  },
  {
    "image": '/images/277667.jpeg',
    "page": "service/unreal"
  },
  {
    "image": '/images/277667.jpeg',
    "page": "service/unity"
  }
  // Add more image URLs
];

const ImageMarquee = () => {
    const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => prev + 1);
      setIsTransitioning(true);
    }, cycleTime * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;

    if (index === imageList.length) {
      const handleTransitionEnd = () => {
        setIsTransitioning(false);
        setIndex(0); // Jump back to the real first image
        slider.removeEventListener('transitionend', handleTransitionEnd);
      };

      slider.addEventListener('transitionend', handleTransitionEnd);
    }
  }, [index]);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      slider.style.transition = isTransitioning ? 'transform 0.5s ease-in-out' : 'none';
      slider.style.transform = `translateX(-${index * 600}px)`;
    }
  }, [index, isTransitioning]);

  // Combine real images + clone of first
  const slides = [...imageList, imageList[0]];

  return (
    <div style={styles.container}>
      <div
        ref={sliderRef}
        style={{
          ...styles.slider,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((item, i) => (
            <Link key={i} to={item.page} style={styles.linkWrapper}>
                <img src={item.image} alt={`Slide ${i}`} style={styles.image} />
            </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '400px',
    overflow: 'hidden',
    position: 'relative',
  },
  slider: {
    display: 'flex',
    height: '100%',
  },
  image: {
    width: '600px',
    height: '400px',
    objectFit: 'cover',
    flexShrink: 0,
  },
};

export default ImageMarquee;
