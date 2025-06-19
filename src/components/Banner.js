import React from 'react';
import { useNavigate } from 'react-router';
import propTypes from 'prop-types';

import NavBar from './NavBar';

import BannerStyles from '../css/Banner.module.css';

export default function Banner(props) {
    const navigate = useNavigate();
    
    function toggleTheme() {
        const htmlEl = document.documentElement;
        const currentTheme = htmlEl.getAttribute('data-theme');
        htmlEl.setAttribute('data-theme', currentTheme === 'normal' ? 'color-blind' : 'normal');
    }

    function toggleThemeText() {
        const htmlEl = document.documentElement;
        const currentTheme = htmlEl.getAttribute('data-theme');
        return currentTheme === 'normal' ? 'Colorblind Off' : 'Colorblind On';
    }

    const [themeText, setThemeText] = React.useState(toggleThemeText());

    function handleToggleTheme() {
        toggleTheme();
        setThemeText(toggleThemeText());
    }

    return (
        <>
            {/* <button
                onClick={handleToggleTheme}
                className={BannerStyles.toggleThemeButton}
                aria-label="Toggle theme"
            >
                {themeText}
            </button> */}
            <header className="row mb-4" style={{ position: 'relative' }}>
                <NavBar />
            </header>
        </>
    );
}

Banner.propTypes = {
    headerText: propTypes.string.isRequired
};