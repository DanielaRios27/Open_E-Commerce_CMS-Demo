import React from 'react';

import styles from './footerBtn.module.css';
import { Link } from 'react-router-dom';

// const btnClick = () => {
// };

function FooterBtn(props) {
    
    const linkResolver = () => {
        if (props.sectionId && props.pageLink) {
          return `/${props.pageLink}#${props.sectionId}`;
        } else if (props.pageLink) {
          return `/${props.pageLink}`;
        }
        return '/';
      };

    return (
        <>
            {
                <Link className={styles.btnLink} to={linkResolver()} >
                    <div className={styles.footerBtn}>
                        <img className={styles.footerBtnIcon} src={props.btnIconSrc} alt={props.btnName} />
                        <p className={styles.footerBtnText}>{props.btnText}</p>
                    </div>
                </Link>
            }
        </>
    )
};

export default FooterBtn;