import FooterBtn from "./elements/footerBtn";
import FooterSubTitle from "./elements/footerSubTitle";
import RightsText from "./elements/rightsText";
import Styles from "./footerElement.module.css"

function FooterElement() {
    let rightsTags = {
        "SrZafkiell": "https://github.com/SrZafkiell",
        "DanielaRios": "https://github.com/DanielaRios27",
        "CamiloAndres": "https://github.com/camiloandressqc",
        "Inolpolo": "https://github.com/inolpolo",
    }

    return (
        <>
            <div className={Styles.footer}>
                <div className={Styles.upperFooter}>
                    <FooterSubTitle subTitleText="About us" />
                    <div className={Styles.upperFooterButtons}>
                        <><FooterBtn btnIconSrc='src/assets/icons/footerIcons/historic-shield.svg' btnText="OUR HISTORY" btnName="Our History" linkType="local" pageLink="about" sectionId="ourhistory" /></>
                        <><FooterBtn btnIconSrc='src/assets/icons/footerIcons/community.svg' btnText="OUR TEAM" btnName="Our Team" linkType="local" pageLink="about" sectionId="ourteam" /></>
                        <><FooterBtn btnIconSrc='src/assets/icons/footerIcons/map.svg' btnText="OUR LOCATION" btnName="Our Location" linkType="local" pageLink="about" sectionId="ourlocation" /></>
                    </div>
                </div>
                <div className={Styles.lowerFooter}>
                    <div className={Styles.lowerFooterTop}>
                        <div className={Styles.lowerFooterSection}>
                            <FooterSubTitle subTitleText="Contact" />
                            <div className={Styles.lowerFooterSectionContent}>
                                <FooterBtn btnIconSrc='src/assets/icons/footerIcons/mail.svg' btnText="SEND EMAIL" btnName="Send Email" linkType="url" pageLink="https://google.com" />
                                <FooterBtn btnIconSrc='src/assets/icons/footerIcons/phone.svg' btnText="COPY PHONE" btnName="Contact Phone" linkType="local" pageLink="contact" sectionId="phone" />
                                <FooterBtn btnIconSrc='src/assets/icons/footerIcons/page-edit.svg' btnText="CONTACT FORM" btnName="Contact Form" linkType="local" pageLink="contact" sectionId="form" />
                            </div>
                        </div>
                        <div className={Styles.lowerFooterSection}>
                            <FooterSubTitle subTitleText="Socials" />
                            <div className={Styles.lowerFooterSectionContent}>
                                <div className={Styles.socialsIcons}>
                                    <a href="https://instagram.com/" target="_blank"><img className={Styles.socialIcon} src='src/assets/icons/footerIcons/instagram.svg' alt="Instagram" /></a>
                                    <a href="https://facebook.com/" target="_blank"><img className={Styles.socialIcon} src='src/assets/icons/footerIcons/facebook-tag.svg' alt="Facebook" /></a>
                                    <a href="https://tiktok.com" target="_blank"><img className={Styles.socialIcon} src='src/assets/icons/footerIcons/tiktok.svg' alt="TikTok" /></a>
                                </div>
                            </div>

                        </div>
                        <div className={Styles.lowerFooterSection}>
                            <FooterSubTitle subTitleText="PQR Form" />
                            <div className={Styles.lowerFooterSectionContent}>
                                <div className={Styles.pqrFormQRCode}>
                                    <img src='src/assets/icons/footerIcons/qr-code-pqr.svg' alt="QR Code" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.lowerFooterBottom}>
                        <div className={Styles.rightsFooter}>
                            <RightsText rightsCentralText="Designed by:" tags={rightsTags} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterElement;