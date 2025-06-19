import { Link } from 'react-router';
import styles from '../css/DiscountBanner.module.css'

export default function Book() {
    return (
        <>
            <Link
                to={"/book"}
                className={styles["discount-banner"] + " " + styles["discount-banner-link"]}>
                <h1>Limited time: $10 per session the first two sessions (75% off)! New students only</h1>
            </Link>
        </>
    );
}