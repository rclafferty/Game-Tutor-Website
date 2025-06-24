import { Link, useNavigate } from 'react-router';

import styles from '../css/Home.module.css';

import ImageMarquee from './ImageMarquee';
import DiscountBanner from './DiscountBanner';
import FeaturedServices from './FeaturedServices';
import AboutPreview from './AboutPreview';

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

                <AboutPreview />
            </div>
        </>
    );
}
