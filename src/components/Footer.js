import React, { useState } from 'react';
import { Link } from "react-router";

import styles from "../css/Footer.module.css"

import scrollToTop from '../helpers/scrollToTop';

import ServicesJson from '../json/Services.json';
import CompanyJSON from '../json/CompanyInfo.json';

export default function Footer() {
    const [services] = useState(ServicesJson.services);
    const getServiceById = (id) => services.find(service => service.id === id && service['currently-offered'] === true);

    return (
        <>
            <div className={`${styles['footer-div']}`}>
                <div className='container'>

                <div className={`${styles['footer-links']}`}>
                    <div className={`${styles['group']}`}>
                        <div className={`${styles['footer-signage']}`}>
                                <img
                                    src={`${process.env.PUBLIC_URL}${CompanyJSON.logoWhiteUrl}`}
                                    alt="Logo"
                                    />
                                <h1>{CompanyJSON.name}</h1>
                        </div>
                        <p>Ready to make your dream game a reality? {CompanyJSON.name} offers one-on-one coaching tailored to your goals. Book your first session today and start building with confidence!</p>
                    </div>
                    <div className={`${styles['group']}`}>
                        <h1><Link to={'/services'} className='header-link' onClick={scrollToTop}>Services</Link></h1>
                        <ul>
                        <li><Link to={`/services`} onClick={scrollToTop}>All Services</Link></li>
                        {services.map(({id}, i) => {
                            const service = getServiceById(id);
                            if (!service) {
                                console.log(`services[${i}] (id: ${id}) is undefined`);
                                return null;
                            }
                            return (
                                <li><Link to={`/services/${service.id}`} onClick={scrollToTop}>{service.name}</Link></li>
                            );
                        })}
                        </ul>
                    </div>
                    <div className={`${styles['group']}`}>
                        <h1>Resources</h1>
                        <ul>
                            <li><Link to={"/"} onClick={scrollToTop}>Home</Link></li>
                            <li><Link to={"/book"} onClick={scrollToTop}>Book a Session</Link></li>
                            <li><Link to={"/about"} onClick={scrollToTop}>About</Link></li>
                            <li><Link to={"/privacy"} onClick={scrollToTop}>Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className={`${styles['group']}`}>
                        <h1><Link to={'/book'} className='header-link'>Contact</Link></h1>
                        <ul>
                            <li><i className="fas fa-phone" style={{ fontSize: 16, color: "white" }}></i>{" "}<Link to={`tel:${CompanyJSON.phone}`}>{CompanyJSON.phone}</Link></li>
                            <li><i className="fas fa-envelope" style={{ fontSize: 16, color: "white" }}></i>{" "}<Link to={`mailto:${CompanyJSON.email}`}>{CompanyJSON.email}</Link></li>
                            <li><i className="fab fa-discord" style={{ fontSize: 16, color: "white" }}></i>{" "}<Link to={CompanyJSON.socialMediaLinks.discord}>Join Discord</Link></li>
                        </ul>
                    </div>
                </div>

                <p className={`center`}>&copy; 2025 {CompanyJSON.name}</p>
            </div>
            </div>
        </>
    );
}