import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import styles from '../css/NavBar.module.css';
import BannerStyles from '../css/Banner.module.css';

import CompanyJSON from '../json/CompanyInfo.json';

export default function NavBar() {
    const navigate = useNavigate();
    
    const location = useLocation();
    
    const getActiveClass = (path) => location.pathname === path ? "selected" : "";

    return (
        <>
            <div className={styles.navbar}>
                <Link to={"/"}>
                    <img
                        src={`${process.env.PUBLIC_URL}/GameTutorLogo2.png`}
                        alt="Logo"
                        className={BannerStyles.logo}
                        style={{ cursor: 'pointer' }}
                    />
                    <h1 className='logo'>{CompanyJSON.name}</h1>
                </Link>
                <button
                    className={`${getActiveClass(`/`)}`}
                    onClick={() => navigate(`/`)}
                >
                    Home
                </button>
                <button
                    className={`${getActiveClass(`/services`)}`}
                    onClick={() => navigate(`/services`)}
                >
                    Services
                </button>
                <button
                    className={`${getActiveClass(`/book`)}`}
                    onClick={() => navigate(`/book`)}
                >
                    {CompanyJSON.book.waitlist ? "Join Waitlist" : "Book a Session"}
                </button>
                <button
                    className={`${getActiveClass(`/faq`)}`}
                    onClick={() => navigate(`/faq`)}
                >
                    FAQs
                </button>
                <button
                    className={`${getActiveClass(`/about`)}`}
                    onClick={() => navigate(`/about`)}
                >
                    About
                </button>
            </div>
        </>
    );
}