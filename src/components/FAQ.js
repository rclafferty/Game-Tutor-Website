import React, { useState } from 'react';
import { Link } from "react-router";

import ServicesJson from '../json/Services.json';

import styles from "../css/FAQ.module.css"

export default function FAQ({copyright}) {
    const [services] = useState(ServicesJson.services);
    const getServiceById = (id) => services.find(service => service.id === id && service['currently-offered'] === true);

    return (
        <>
            <div className='container'>
                <h1 className='header'>Frequently Asked Questions (FAQs)</h1>
                <div className={`${styles['faq']}`}>
                    <h2>How do I get started?</h2>
                    <p>
                        Getting started is easy! Simply schedule a free consultation by visiting our <Link to="/book">booking page</Link>. During the consultation, we'll discuss your goals and how we can help you achieve them. Your journey begins here!
                    </p>

                    <h2>What services do you offer?</h2>
                    <p>
                        We provide a wide range of services, including one-on-one coaching, game design consultations, and programming tutorials. Discover the perfect fit for your goals on our <Link to="/services">services page</Link>.
                    </p>

                    <h2>Can I cancel or reschedule my session?</h2>
                    <p>
                        Absolutely! Life happens, and we get it. You can cancel or reschedule your session up to 24 hours in advance. For more information, please review our cancellation policy on the <Link to="/book">booking page</Link>.
                    </p>

                    <h2>I just want to make games as a hobby, is this still right for me?</h2>
                    <p>
                        Yes! Whether you're a hobbyist or aiming for a professional career, our services are crafted to fit your unique journey. We tailor our approach to fit your individual needs and interests.
                    </p>

                    <h2>How do I contact support?</h2>
                    <p>
                        We're here for you! Reach out by phone, email, or join our vibrant Discord community for real-time support and inspiration. Your questions are always welcome!
                    </p>

                    <h2>What age groups do you work with?</h2>
                    <p>
                        We proudly welcome learners of all ages! Whether you're a young aspiring creator or an adult looking to level up your skills, our programs are designed to support your journey. For participants under 18, we just ask that a parent or legal guardian provides their permission so we can ensure a safe and supportive experience.
                    </p>

                    <h2>Do you offer in-person, online, or hybrid tutoring sessions?</h2>
                    <p>We specialize in online sessions, connecting you with expert guidance from anywhere in the world. Enjoy the flexibility and convenience of learning on your terms!</p>

                    <h2>Do you offer group sessions or workshops?</h2>
                    <p>
                        In order to focus on a truly personalized learning experience, we exclusively offer one-on-one sessions. This ensures you receive the individualized attention and tailored guidance you need to achieve your goals.
                    </p>

                    <h2>How long is a typical session?</h2>
                    <p>
                        Most sessions are a focused 60 minutes, but we're happy to adjust to your needs. Our goal is to provide a productive and engaging learning experience that fits your schedule.
                    </p>

                    <h2>What payment methods do you accept?</h2>
                    <p>
                        We currently only accept Venmo for payments. It's fast, secure, and simple. Payment information will be collected when you book your sessions, so you can focus on learning and leave the rest to us.
                    </p>

                    <h2>Do you give homework or practice assignments?</h2>
                    <p>
                        Absolutely! We provide engaging practice tasks to help you master new skills between sessions. These assignments aren't graded like traditional schoolwork, as they're custom-tailored to your learning plan and designed to accelerate your progress. Every task brings you closer to your goals!
                    </p>

                    <h2>What platform do you use for online sessions?</h2>
                    <p>
                        We use industry-leading platforms like <strong>Zoom</strong> and <strong>Google Meet</strong> to deliver seamless, high-quality online sessions. This ensures you enjoy a smooth, interactive learning experience—no matter where you are!
                    </p>

                    <h2>Do I need any special software or equipment?</h2>
                    <p>
                        Most students just need a gaming-ready laptop or desktop. If you're unsure, bring it up during your free consultation and we'll help you get set up with everything you need!
                    </p>

                    <h2>Are sessions recorded?</h2>
                    <p>
                        No, we do not record sessions, and we do not allow students to record them either. We believe that active participation leads to the best results, so we encourage you to take notes and utilize the resources provided to maximize your learning experience!
                    </p>

                    <h2>Do you help with school or university game dev assignments?</h2>
                    <p>
                        While we do not directly assist with completing school or university assignments (to respect academic integrity policies), we can help you understand the concepts and skills needed to complete them. Our focus is on empowering you to learn and grow as a game developer, so you pursue your goals with confidence!
                    </p>

                    <h2>Which game engines and tools do you support?</h2>
                    <p>
                        We proudly support a wide variety of industry-leading game engines, tools, and creative software! For the most up-to-date list of everything we currently offer, check out our <Link to="/services">services page</Link>. If you don't see your favorite tool listed, just ask during your free consultation and we'll do our best to help!
                    </p>
                </div>
            </div>
        </>
    );
}