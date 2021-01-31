import React from "react"
import "./sociallinks.scss"

import {FaEnvelope, FaGithub} from "react-icons/fa"

// Edit these to add or remove social media icons.
const socialMediaAccounts = [
    {id: 1, icon: FaGithub, url: "http://github.com/miguelcarrasco"},
    {id: 2, icon: FaEnvelope, url: "mailto:tlacaelel.software@gmail.com"},
]

const SocialLinks = ({className}) => (
    <div className={`SocialLinks ${className}`}>
        {socialMediaAccounts.map(account => (
            <a
                href={account.url}
                key={account.id}
                className={`SocialLinks__container ${className}__container`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <account.icon className={`SocialLinks__icon ${className}__icon`}/>
            </a>
        ))}
    </div>
)

export default SocialLinks
