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
          json[index].display && <button key={index} className={`secondary`} onClick={() => toggleDropdown(index)}>
            {openIndex === index ? `Hide ${json[index].title}` : `${json[index].title}`}
          </button>
        ) : null )}
      </div>

      <div
        className={`${styles["dropdown-content"]} ${openIndex !== null ? styles.open : ''}`}
      >
        {openIndex !== null && (
          <>
            <div className='row'>
                <div className='col-5'>
                    <img className={styles["dropdown-image"]} src="/images/logo.png" alt="" />
                </div>
                <div className='col-7 mt-5'>
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
