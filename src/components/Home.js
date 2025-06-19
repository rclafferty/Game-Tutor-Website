import ImageMarquee from './ImageMarquee';
import ServiceList from './ServiceList';
import DiscountBanner from './DiscountBanner';

import images from '../json/MarqueeImages.json';

export default function Home(props) {
    return (
        <>
            <ImageMarquee images={images.images} cycleTime={5} />
            <DiscountBanner />
            <ServiceList />
        </>
    );
}
