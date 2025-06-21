import React, { useState } from 'react';
import { Link } from "react-router";

import ServicesJson from '../json/Services.json';

import styles from "../css/Footer.module.css"

export default function Footer({copyright}) {
    const [services] = useState(ServicesJson.services);
    const getServiceById = (id) => services.find(service => service.id === id && service['currently-offered'] === true);

    return (
        <>
            <div className='container'>
                <h1 className='header'>FAQs</h1>
                <div className={`${styles['faq']}`}>
                    <h2>How do I start?</h2>
                    <p>You can schedule a free consultation by visiting our <Link to="/book">booking page</Link>.</p>

                    <h2>What services do you offer?</h2>
                    <p>We offer a variety of services including one-on-one coaching, game design consultations, and programming tutorials. You can view all our services on the <Link to="/services">services page</Link>.</p>

                    <h2>Can I cancel or reschedule my session?</h2>
                    <p>Yes, you can cancel or reschedule your session up to 24 hours in advance. Please refer to our cancellation policy on the <Link to="/book">booking page</Link> for more details.</p>

                    <h2>I just want to make games as a hobby, is this still right for me?</h2>
                    <p>Yes!</p>

                    <h2>How do I contact support?</h2>
                    <p>If you have any questions or need assistance, you can contact us via phone at ..., or by email at .... We are also available via our Discord server.</p>
                </div>
            </div>
        </>
    );
}