import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ImageMarquee = ({ images, useSubtitle2 = true, useLinks = true, cycleTime = 5, imageWidth = 1300 }) => {
    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => prev + 1);
            setIsTransitioning(true);
        }, cycleTime * 1000);

        return () => clearInterval(interval);
    }, [cycleTime]);

    useEffect(() => {
        const slider = sliderRef.current;

        if (index === images.length) {
            const handleTransitionEnd = () => {
                setIsTransitioning(false);
                setIndex(0); // Jump back to the real first image
                slider.removeEventListener('transitionend', handleTransitionEnd);
            };

            slider.addEventListener('transitionend', handleTransitionEnd);
        }
    }, [index, images.length]);

    useEffect(() => {
        const slider = sliderRef.current;

        if (slider) {
            slider.style.transition = isTransitioning ? 'transform 0.5s ease-in-out' : 'none';
            slider.style.transform = `translateX(-${index * imageWidth}px)`;
        }
    }, [index, isTransitioning, imageWidth]);

    // Combine real images + clone of first
    const slides = [...images, images[0]];

    return (
        <div style={styles.container}>
            <div
                ref={sliderRef}
                style={{
                    ...styles.slider,
                    width: `${slides.length * 100}%`,
                }}
            >
                {slides.map((item, i) => {
                    const content = (
                        <div style={{ position: 'relative', width: '1300px', height: '400px' }}>
                            <img src={`${process.env.PUBLIC_URL}/${item.image}`} alt={`Slide ${i}`} style={styles.image} />
                            <div style={styles.description}>
                                {item.subtitle}
                                {useSubtitle2 && <><br />{item['subtitle-2']}</>}
                            </div>
                        </div>
                    );
                    return useLinks ? (
                        <Link key={i} to={`/service/${item.service}`} style={styles.linkWrapper} title={`${item.subtitle} ${item['subtitle-2']}`}>
                            {content}
                        </Link>
                    ) : (
                        <React.Fragment key={i}>{content}</React.Fragment>
                    );
                })}
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
