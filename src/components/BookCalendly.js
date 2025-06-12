import React, { useEffect } from 'react';
import styles from '../css/Book.module.css'

export default function BookCalendly() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <h2>Calendly</h2>
            <div
                className={
                    "calendly-inline-widget " +
                    (styles["calendly-inline-widget-custom"] || "")
                }
                data-url="https://calendly.com/rclafferty"
                style={{ minWidth: "320px", height: "630px" }}
            ></div>
        </>
    );
}