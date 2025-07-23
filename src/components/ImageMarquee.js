import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from "../css/ImageMarquee.module.css"

const ImageMarquee = ({ images, useSubtitle2 = true, useLinks = true, cycleTime = 5 }) => {
    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const sliderRef = useRef(null);

    const [imageWidth, setImageWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (sliderRef.current) {
                // Each slide is 100% of the container, so get the container's width
                const container = sliderRef.current.parentNode;
                setImageWidth(container.offsetWidth);
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => prev + 1);
            setIsTransitioning(true);
        }, cycleTime * 1000);

        return () => clearInterval(interval);
    }, [cycleTime]);

    useEffect(() => {
        const slider = sliderRef.current;

        if (slider) {
            slider.style.transform = `translateX(-${index * imageWidth}px)`;
        }

        if (index === images.length) {
            const handleTransitionEnd = () => {
                setIsTransitioning(false);
                setIndex(0); // Jump back to the real first image
                slider.removeEventListener('transitionend', handleTransitionEnd);
            };

            slider.addEventListener('transitionend', handleTransitionEnd);
        }
    }, [index, images.length, imageWidth, isTransitioning]);

    // Combine real images + clone of first
    const slides = [...images, images[0]];

    return (
        <div className={styles["marquee-container"]}>
            <div
                className={styles["marquee-slider"]}
                ref={sliderRef}
            >
                {slides.map((item, i) => {
                    const content = (
                        <div
                            className={styles["marquee-slider-content"]}
                            style={{
                                width: imageWidth ? `${imageWidth}px` : undefined,
                                minWidth: imageWidth ? `${imageWidth}px` : undefined,
                            }}
                        >
                            <img src={`${item.image}`} alt={`Slide ${i} -- ${item['alt-text'] ? item['alt-text'] : `No alt text available for ${item.subtitle} ${useSubtitle2 && item['subtitle-2']}`}`} />
                            <div className={styles["marquee-overlay-text"]}>
                                {item.subtitle}
                                {useSubtitle2 &&
                                    <>
                                        <br />
                                        {item['subtitle-2']}
                                    </>
                                }
                            </div>
                        </div>
                    );
                    return useLinks ? (
                        <Link key={i} to={`/services/${item.service}`} title={`${item.subtitle} ${item['subtitle-2']}`}>
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

export default ImageMarquee;
