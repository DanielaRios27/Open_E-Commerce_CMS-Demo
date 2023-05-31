import React, { Fragment } from 'react';

import styles from './rightsText.module.css'


function RightsText(props){
    const links = Object.entries(props.tags).map(([name, url], index) => (
        <React.Fragment key={name}>
                <a className={styles.tag} href={url} target='_blank'>{name}</a>
                {index !== Object.entries(props.tags).length - 1 && <span>&nbsp;&nbsp;</span>}
        </React.Fragment>
    ))

    return (
        <>
            <p className={styles.rights}>
                {props.rightsCentralText}
                {<span>&nbsp;&nbsp;</span>}
                {links}
            </p>
        </>
    )
};

export default RightsText;