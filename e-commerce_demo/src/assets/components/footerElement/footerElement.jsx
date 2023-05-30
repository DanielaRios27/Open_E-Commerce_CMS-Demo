import FooterBtn from "./elements/footerBtn";
import FooterSubTitle from "./elements/footerSubTitle";
import RightsText from "./elements/rightsText";
import Styles from "./footerElement.module.css"

function FooterElement() {

    return (
        <>
            <div className={Styles.footer}>
                <div className={Styles.upperFooter}>
                    <FooterSubTitle subTitleText="About us" />
                    <div className={Styles.upperFooterButtons}>
                        <><FooterBtn btnIconSrc='src/assets/icons/footerIcons/historic-shield.svg' btnText="OUR HISTORY" btnName="Our History" sectionId="ourhistory" /></>
                        <><FooterBtn btnIconSrc='src/assets/icons/footerIcons/community.svg' btnText="OUR TEAM" btnName="Our Team" sectionId="ourteam" /></>
                        <><FooterBtn btnIconSrc='src/assets/icons/footerIcons/map.svg' btnText="OUR LOCATION" btnName="Our Location" sectionId="ourlocation" /></>
                    </div>
                </div>
                <div className={Styles.lowerFooter}>
                    <div className={Styles.lowerFooterElement}>
                        <FooterSubTitle subTitleText="Contact" />
                        <FooterBtn btnIconSrc='src/assets/icons/footerIcons/mail.svg' btnText="SEND EMAIL" btnName="Send Email" />
                        <FooterBtn btnIconSrc='src/assets/icons/footerIcons/phone.svg' btnText="COPY PHONE" btnName="Contact Phone" />
                        <FooterBtn btnIconSrc='src/assets/icons/footerIcons/page-edit.svg' btnText="CONTACT FORM" btnName="Contact Form" />
                    </div>
                    <div className={Styles.lowerFooterElement}>
                        <FooterSubTitle subTitleText="Socials" />
                        <div className={Styles.socialsIcons}>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className={Styles.lowerFooterElement}>
                        <FooterSubTitle subTitleText="PQR Form" />
                    </div>
                </div>
                <div className={Styles.rightsFooter}>
                    <RightsText rightsCentralText="Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test"/>
                </div>
            </div>
        </>
    )
}

export default FooterElement;