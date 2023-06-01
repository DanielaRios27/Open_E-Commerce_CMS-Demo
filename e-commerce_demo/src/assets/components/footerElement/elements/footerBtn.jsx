import React from 'react';
import styles from './footerBtn.module.css';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

function FooterBtn(props) {

    const handleClick = () => {
        scroller.scrollTo(props.sectionId, {
          duration: 200,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      };

    const linkResolver = () => {
        if (props.linkType == "local") {
            if (props.sectionId && props.pageLink) {
                return `/${props.pageLink}#${props.sectionId}`;
            } else if (props.pageLink) {
                return `/${props.pageLink}`;
            };
        } else if (props.linkType == "url") {
            return props.pageLink;
        } else {
            return '/';
        }
    };

    return (
        <>
            {
                <Link className={styles.btnLink} to={linkResolver()} onClick={handleClick}>
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