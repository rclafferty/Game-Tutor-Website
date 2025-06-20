import React, { useState, useEffect } from 'react';

function JumpToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // setVisible(window.scrollY > 200);
            setVisible(true);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        visible && (
            <div
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem',
                    zIndex: 1000,
                }}
            >
                <button
                    onClick={scrollToTop}
                    style={{
                        width: '100%',
                        height: '100%',
                        fontSize: '1.2rem',
                        borderRadius: '3rem',
                        border: 'none',
                        background: 'var(--secondary-color)',
                        color: '#fff',
                        cursor: 'pointer',
                        // boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    aria-label="Jump to top"
                >
                    ↑
                </button>
            </div>
        )
    );
}

export default JumpToTopButton;