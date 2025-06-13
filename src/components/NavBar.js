import { useLocation, useNavigate } from 'react-router';

import styles from '../css/NavBar.module.css';

export default function NavBar() {
    const navigate = useNavigate();
    
    const location = useLocation();
    
    const getActiveClass = (path) => location.pathname === path ? "selected" : "";

    return (
        <>
            <div className={styles.navbar}>
                <button
                    className={`${getActiveClass("/")}`}
                    onClick={() => navigate(`/`)}
                >
                    Home
                </button>
                <button
                    className={`${getActiveClass("/book")}`}
                    onClick={() => navigate(`/book`)}
                >
                    Book a Service
                </button>
                <button
                    className={`${getActiveClass("/about")}`}
                    onClick={() => navigate(`/about`)}
                >
                    About
                </button>
            </div>
        </>
    );
}