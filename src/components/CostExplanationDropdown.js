import React, { useState } from 'react';

import { parseBoldText } from '../helpers/parseBoldText';

import styles from '../css/ExplanationDropdown.module.css'

export default function CostExplanationDropdown({json, price, discount=0}) {
    console.log(json);
    const [isOpen, setIsOpen] = useState(null);
    
    const toggleDropdown = () => {
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <div className={`${styles["dropdown-container"]}`}>
            <div className={`${styles["button-row"]}`}>
                <button
                    onClick={() => toggleDropdown()}
                    title={isOpen ? `Hide ${json.title}` : `Show ${json.title}`}
                    >
                    <span>
                        <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                    </span>
                    {json.title} {(json.discount < 0.04) ? "" : `- ${json.discount * 100}% off`} {json['title-subtag'] ? json['title-subtag'] : ""}
                </button>
            </div>
            <div
                className={`${styles["dropdown-content"]} ${isOpen ? styles.open : 'hidden'}`}
            >
                <>
                    <div className={`${styles["dropdown-text-no-margin"]}`}>
                        <p>{parseBoldText(json.description)}</p>
                        { json['show-total'] &&
                            <h5>Total Price: ${price - (price * discount)}</h5>
                        }
                    </div>
                </>
            </div>
        </div>
    );
}