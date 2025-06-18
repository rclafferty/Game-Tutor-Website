import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const cycleTime = 5;

const imageList = [
  {
    "image": '/images/Banner/UnityPhysics.png',
    "page": "/service/unity",
    "subtitle": "Learn Physics",
    "subtitle-2": "in Unity 101"
  },
  // {
  //   "image": '/images/259600.jpeg',
  //   "page": "service/unreal",
  //   "subtitle": "Learn Unity Physics",
  //   "subtitle-2": "in Unity 101"
  // },
  {
    "image": '/images/Banner/UnityAI.png',
    "page": "/service/unity",
    "subtitle": "Learn AI",
    "subtitle-2": "in Unity 101"
  },
  // {
  //   "image": '/images/277667.jpeg',
  //   "page": "service/unreal",
  //   "subtitle": "Learn Unity Physics",
  //   "subtitle-2": "in Unity 101"
  // },
  {
    "image": '/images/Banner/Animation.png',
    "page": "/service/unity",
    "subtitle": "Learn Animation",
    "subtitle-2": "in Unity 101"
  },
  {
    "image": '/images/Banner/CSharp.png',
    "page": "/service/unity",
    "subtitle": "Learn C# Scripting",
    "subtitle-2": "in Unity 101"
  },
  // {
  //   "image": '/images/277667.jpeg',
  //   "page": "service/unreal",
  //   "subtitle": "Learn Unity Physics",
  //   "subtitle-2": "in Unity 101"
  // },
  {
    "image": '/images/Banner/VersionControl.png',
    "page": "/service/unity",
    "subtitle": "Learn Version Control",
    "subtitle-2": "in Unity 101"
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
      slider.style.transform = `translateX(-${index * 1300}px)`;
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
          <Link key={i} to={item.page} style={styles.linkWrapper} title={`${item.subtitle} ${item['subtitle-2']}`}>
            <div style={{ position: 'relative', width: '1300px', height: '400px' }}>
              <img src={`${process.env.PUBLIC_URL}/${item.image}`} alt={`Slide ${i}`} style={styles.image} />
              <div style={styles.description}>
                {item.subtitle}<br />{item['subtitle-2']}
              </div>
            </div>
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
    width: '1300px',
    height: '400px',
    objectFit: 'cover',
    flexShrink: 0,
    display: 'block',
  },
  description: {
    position: 'absolute',
    inset: 0, // shorthand for top:0, right:0, bottom:0, left:0
    background: 'rgba(0,0,0,0.1)',
    color: '#fff',
    padding: '32px',
    fontSize: '4rem',
    boxSizing: 'border-box',
    textShadow: '1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000, 0 1px 0 #000, 1px 0 0 #000, 0 -1px 0 #000, -1px 0 0 #000',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center', // use flex-end for "right" alignment
    width: '100%',
    height: '100%',
  }
};

export default ImageMarquee;
