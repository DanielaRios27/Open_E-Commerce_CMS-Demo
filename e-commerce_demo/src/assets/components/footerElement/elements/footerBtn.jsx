import React from 'react';

import styles from './footerBtn.module.css';
import { Link } from 'react-router-dom';

// const btnClick = () => {
// };

function FooterBtn(props) {

    const handleClick = () => {
    };

    return (
        <>
            {
                <Link className={styles.btnLink} to={'/about#'+props.sectionId} >
                    <div className={styles.footerBtn} onClick={handleClick}>
                        <img className={styles.footerBtnIcon} src={props.btnIconSrc} alt={props.btnName} />
                        <p className={styles.footerBtnText}>{props.btnText}</p>
                    </div>
                </Link>
            }
        </>
    )
};

export default FooterBtn;