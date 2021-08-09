import React from 'react'
import { IconGithub, IconInstagram, IconLinkedIn, IconTwitter, IconWhatsapp } from '../../../assets'
import './footer.scss'


const Icon = ({ img }) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    {/* <img className="logo" src={IconGithub} alt="logo" /> */}
                    <p className="logo" >SR GROUP</p>
                </div>
                <div className="social-wrapper">
                    <Icon img={IconWhatsapp} />
                    <Icon img={IconInstagram} />
                    <Icon img={IconTwitter} />
                    <Icon img={IconLinkedIn} />
                    <Icon img={IconGithub} />
                </div>
            </div>

            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
