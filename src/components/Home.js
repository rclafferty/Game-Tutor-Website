import { Link, useNavigate } from 'react-router';

import ImageMarquee from './ImageMarquee';
import DiscountBanner from './DiscountBanner';
import FeaturedServices from './FeaturedServices';

import styles from '../css/Home.module.css';

import images from '../json/MarqueeImages.json';

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <ImageMarquee images={images.images} cycleTime={5} />
                {/* <FeaturedServices /> */}
            <div className='container'>
                <DiscountBanner />
                <FeaturedServices />
                <button
                    className="wide center"
                    onClick={() => navigate('/services')}
                    title="View all services"
                    style={{ marginTop: '2rem' }}
                >
                    View All Services
                </button>

                <div className={`${styles['about-preview']}`}>
                    <h1 className=''>About Game Tutor</h1>
                    <p>
                        Game Tutor is dedicated to helping gamers of all levels improve their skills and enjoy their favorite games more. Whether you're a beginner looking to learn the basics or an experienced player aiming to refine your strategies, our expert tutors are here to guide you.
                    </p>
                    <p>
                        With personalized coaching sessions, we focus on your unique goals and challenges, providing tailored advice and strategies to help you succeed. Our tutors are passionate gamers and developers themselves, bringing a wealth of knowledge and experience to each session.
                        Join us at Game Tutor and take your gaming to the next level!
                    </p>
                    <button
                        className="wide center"
                        onClick={() => navigate(`/`)}
                    >
                        Learn More About Us
                    </button>
                </div>
            </div>
        </>
    );
}
