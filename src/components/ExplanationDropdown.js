import React, { useState } from 'react';

import styles from '../css/ExplanationDropdown.module.css'

function ExplanationDropdown({json}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles["dropdown-container"]}>
      <div className={styles["button-row"]}>
        {json.map((item, index) => item.display ? (
          <button
            key={index}
            className={`secondary`}
            onClick={() => toggleDropdown(index)}
            title={openIndex === index ? `Hide ${json[index].title}` : `Show ${json[index].title}`}
          >
            {/* Font Awesome icon for arrow (chevron) or plus */}
            <span style={{ marginRight: '8px' }}>
              <i className={`margin-left-1 fa-solid ${openIndex === index ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
              {/* Alternatively, use 'fa-plus' and 'fa-minus' for plus/minus */}
              {/* <i className={`fa-solid ${openIndex === index ? 'fa-minus' : 'fa-plus'}`}></i> */}
            </span>
            {openIndex === index ? `${json[index].title}` : `${json[index].title}`}
          </button>
        ) : null )}
      </div>

      <div
        className={`${styles["dropdown-content"]} ${openIndex !== null ? styles.open : ''}`}
      >
        {openIndex !== null && (
          <>
            <div className='row'>
                <img className={styles["dropdown-image"]} src={`${process.env.PUBLIC_URL}/images/${json[openIndex].image}`} alt="" />
                <div className={`col-7 ${styles["dropdown-text"]}`}>
                    <h5>{json[openIndex].title}</h5>
                    <p>{json[openIndex].description}</p>
                </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ExplanationDropdown;
