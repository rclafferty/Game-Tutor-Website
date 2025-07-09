import styles from '../css/PriceChart.module.css'

import currencyFormat from '../helpers/currencyFormat.js';

export default function PriceChart({allOffers, price}) {

    const isIntroOfferAvailable = false;
    
    return (
        <>
        <div className={styles["price-chart"]}>
        <table>
            <thead>
                <tr>
                    <th></th>
                    {
                        allOffers.map((offer, index) => (
                            <th key={index}>{offer.title}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {/* Example data, replace with actual data */}
                { isIntroOfferAvailable &&
                    <tr>
                        <td><strong>Two Intro Sessions</strong></td>
                        {
                            allOffers.map((offer, index) => (
                                <td key={index}>{`${offer['include-intro-sessions'] ? "Yes" : "-"}`}</td>
                            ))
                        }
                    </tr>
                }
                <tr>
                    <td><strong>Full Plan</strong></td>
                    {
                        allOffers.map((offer, index) => (
                            <td key={index}>{`${offer['include-full-plan'] ? "Yes" : "-"}`}</td>
                        ))
                    }
                </tr>
                <tr>
                    <td><strong>Discount on Price</strong></td>
                    {
                        allOffers.map((offer, index) => (
                            <td key={index}>{`${offer['discount'] > 0.04 ? `${offer.discount * 100}%` : "-"}`}</td>
                        ))
                    }
                </tr>
                <tr>
                    <td><strong>Discount on Future Plans</strong></td>
                    {
                        allOffers.map((offer, index) => (
                            <td key={index}>{`${offer['discount-future-plan'] > 0.04 ? `${offer['discount-future-plan'] * 100}%` : "-"}`}</td>
                        ))
                    }
                </tr>
                <tr>
                    <td><strong>Sandbox Project</strong></td>
                    {
                        allOffers.map((offer, index) => (
                            <td key={index}>{`${offer['include-sandbox-project'] ? "Yes" : "-"}`}</td>
                        ))
                    }
                </tr>
            </tbody>
        </table>
        </div>

        <p>* = Base session price before any promotional offers, discounts, taxes, and fees.</p>
        {
            isIntroOfferAvailable && 
            <p>** = Introductory offer price will be credited towards the final price of another qualifying plan should you choose to continue within 1 month of completing the intro sessions.</p>
        }
        </>
    );
}
