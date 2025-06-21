import React, { useState } from 'react';
import { Link } from "react-router";

import ServicesJson from '../json/Services.json';

import styles from "../css/Footer.module.css"

export default function Footer({copyright}) {
    const [services] = useState(ServicesJson.services);
    const getServiceById = (id) => services.find(service => service.id === id && service['currently-offered'] === true);

    return (
        <>
            <div className={`${styles['footer-div']}`}>
                <div className='container'>
                {/* <hr className={`${styles['footer-hr']}`} /> */}

                <div className={`${styles['footer-links']}`}>
                    <div className={`${styles['group']}`}>
                        <div className={`${styles['footer-signage']}`}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/GameTutorLogo2.png`}
                                    alt="Logo"
                                    // className={BannerStyles.logo}
                                    style={{ cursor: 'pointer' }}
                                    />
                                <h1>{copyright}</h1>
                        </div>
                        <p>Ready to make your dream game a reality? Game Tutor offers one-on-one coaching tailored to your goals. Book your first session today and start building with confidence!</p>
                    </div>
                    <div className={`${styles['group']}`}>
                        <h1><Link to={'/services'} className='header-link'>Services</Link></h1>
                        <ul>
                        <li><Link to={`/services`}>All Services</Link></li>
                        {services.map(({id}, i) => {
                            const service = getServiceById(id);
                            if (!service) {
                                console.log(`services[${i}] (id: ${id}) is undefined`);
                                return null;
                            }
                            return (
                                <li><Link to={`/service/${service.id}`}>{service.name}</Link></li>
                            );
                        })}
                        </ul>
                    </div>
                    <div className={`${styles['group']}`}>
                        <h1>Resources</h1>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/book"}>Book a Session</Link></li>
                            <li><Link to={"/about"}>About</Link></li>
                        </ul>
                    </div>
                </div>

                <p className={`center`}>&copy; 2025 {copyright}</p>
            </div>
            </div>
        </>
    );
}