import styles from '../css/DiscountBanner.module.css'

export default function Book() {
    return (
        <>
            <div className={styles["discount-banner"]}>
                <h1>Two Sessions Free!</h1>

                <h5>For a <strong>limited time</strong>, new students receive their first two sessions free.</h5>
                <h5>Come join the world of game dev risk-free!</h5>
            </div>
        </>
    );
}