import React, { useState } from 'react';

import styles from '../css/ExplanationDropdown.module.css'

function ExplanationDropdown({json}) {
  const [isOpen, setIsOpen] = useState(null);

  const toggleDropdown = (index) => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <div className={`${styles["dropdown-container"]}`}>
      <div className={`margin-left-2 ${styles["button-row"]}`}>
        {json.display ? (
          <button
            onClick={() => toggleDropdown()}
            title={isOpen ? `Hide ${json.title}` : `Show ${json.title}`}
          >
            {/* Font Awesome icon for arrow (chevron) or plus */}
            <span style={{ marginRight: '8px' }}>
              <i className={`margin-left-1 fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
              {/* Alternatively, use 'fa-plus' and 'fa-minus' for plus/minus */}
              {/* <i className={`fa-solid ${openIndex === index ? 'fa-minus' : 'fa-plus'}`}></i> */}
            </span>
            {isOpen ? `${json.title}` : `${json.title}`}
          </button>
        ) : null }
      </div>

      <div
        className={`${styles["dropdown-content"]} ${isOpen ? styles.open : ''}`}
      >
        {isOpen && (
          <>
            <div className='row margin-left-2'>
                <img className={`${styles["dropdown-image"]}`} src={`${process.env.PUBLIC_URL}/images/${json.image}`} alt="" />
                <div className={`col-7 ${styles["dropdown-text"]}`}>
                    <h5>{json.title}</h5>
                    <p>{json.description}</p>
                </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ExplanationDropdown;
