import Styles from './footerSubTitle.module.css'

function FooterSubTitle(props){
    
    return (
        <>
            <h2 className={Styles.subTitleH2}>{props.subTitleText}</h2>
        </>
    )
};

export default FooterSubTitle;