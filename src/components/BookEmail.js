import { Link } from 'react-router-dom';

import styles from '../css/Book.module.css'

export default function BookEmail() {

    const email = "test@test.com";
    const subject = encodeURIComponent("Tutoring Inquiry");
    const body = encodeURIComponent(
        `Hi,

        I am interested in tutoring. Please connect me with a tutor.

        [INSERT DETAILS ABOUT YOUR REQUEST]

        Thank you in advance,

        [NAME]`
    );
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    return (
        <>
            <h2>Email</h2>
            <p>Email us at </p>
            <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
                {email}
            </a>
        </>
    );
}