import { useState } from 'react';
import { useNavigate } from 'react-router';

import styles from '../css/Home.module.css';

import ServicesJson from '../json/Services.json';
import CompanyJSON from '../json/CompanyInfo.json';

export default function AboutPreview() {
    const navigate = useNavigate();

    const [services] = useState(ServicesJson.services);

    if (!services || services.length === 0) {
        return <p>No services available at the moment.</p>;
    }

    return (
        <>
            <h1 className='col-12 header'>About {CompanyJSON.name}</h1>
            <div className={`${styles['about-preview']}`}>
                <div className='container'>
                <p>
                    {CompanyJSON.name} is dedicated to helping gamers of all levels improve their skills and enjoy their favorite games more. Whether you're a beginner looking to learn the basics or an experienced player aiming to refine your strategies, our expert tutors are here to guide you.
                </p>
                <p>
                    With personalized coaching sessions, we focus on your unique goals and challenges, providing tailored advice and strategies to help you succeed. Our tutors are passionate gamers and developers themselves, bringing a wealth of knowledge and experience to each session.
                    Join us at {CompanyJSON.name} and take your game dev skills to the next level!
                </p>
                <button
                    className="wide center"
                    onClick={() => navigate(`/about`)}
                    style={{ marginTop: '2rem' }}
                >
                    Learn More About Us
                </button>
                </div>
            </div>
        </>
    );
}