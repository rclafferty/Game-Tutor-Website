import styles from '../css/DiscountBanner.module.css'

export default function Book() {
    return (
        <>
            <div className={styles["discount-banner"]}>
                <h1>Limited time: $10 per session the first two sessions (75% off)! New students only</h1>
            </div>
        </>
    );
}