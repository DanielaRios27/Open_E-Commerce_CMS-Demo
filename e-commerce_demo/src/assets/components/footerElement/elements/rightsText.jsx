import Styles from './rightsText.module.css'

function RightsText(props){
    return (
        <>
            <p className={Styles.rights}>{props.rightsCentralText}</p>
        </>
    )
};

export default RightsText;