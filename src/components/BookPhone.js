import { Link } from 'react-router-dom';

import styles from '../css/Book.module.css'

export default function BookPhone() {
    const phoneNumber = "+1234567890"; // Replace with your phone number
    const telLink = `tel:${phoneNumber}`;

    return (
        <>
            <h2>Phone</h2>
            <p>Call us at</p>
            <a href={telLink}>
                {phoneNumber}
            </a>
        </>
    );
}