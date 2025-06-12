import React from 'react';
import { useNavigate } from 'react-router';
import propTypes from 'prop-types';

import logo from './../logo.svg';

import NavBar from './NavBar';
import DiscountBanner from './DiscountBanner';

import BannerStyles from '../css/Banner.module.css';

// `props` is an object that contains the properties passed to the component
//      In this case, `props.headerText` is used to display the header text
//      `props` is a common convention in React
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
            <button
                onClick={handleToggleTheme}
                className={BannerStyles.toggleThemeButton}
                aria-label="Toggle theme"
            >
                {themeText}
            </button>
            <header className="row mb-4" style={{ position: 'relative' }}>
                <div className="col-5 d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className={BannerStyles.logo}
                        onClick={() => navigate(`/`)}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className="col-7 d-flex flex-column justify-content-center">
                    <h1
                        className={BannerStyles.header_style}
                        onClick={() => navigate(`/`)}
                        style={{ cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        {props.headerText}
                    </h1>
                    <h2
                        className={BannerStyles.subtitle_style}
                        onClick={() => navigate(`/`)}
                        style={{ cursor: 'pointer' }}
                    >
                        {props.subHeaderText}
                    </h2>
                </div>
                <NavBar />

                {/* <DiscountBanner /> */}
            </header>
        </>
    );
}

Banner.propTypes = {
    headerText: propTypes.string.isRequired
};