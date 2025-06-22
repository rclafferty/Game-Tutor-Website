import React, { useState } from 'react';

import currencyFormat from '../helpers/currencyFormat.js';

import styles from '../css/PriceChart.module.css'

export default function PriceChart({allOffers, price}) {
    
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
                <tr>
                    <td><strong>Two Intro Sessions</strong></td>
                    {
                        allOffers.map((offer, index) => (
                            <td key={index}>{`${offer['include-intro-sessions'] ? "Yes" : "-"}`}</td>
                        ))
                    }
                </tr>
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
                <tr>
                    <td><strong>Total Price</strong></td>
                    {
                        allOffers.map((offer, index) => (
                            <td key={index}><strong>
                                {
                                    offer['replace-total'] ? offer['replace-total'] : currencyFormat.format(price - (price * (typeof offer.discount === 'number' ? offer.discount : 0)))
                                } {offer['append-total'] ? offer['append-total'] : ""}
                            </strong></td>
                        ))
                    }
                </tr>
            </tbody>
        </table>
        </div>

        <p>* = Average of 16 sessions</p>
        <p>** = Introductory offer price will be credited towards the final price of another qualifying plan should you choose to continue within 1 month of completing the intro sessions.</p>
        </>
    );
}