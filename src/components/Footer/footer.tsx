import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../SocialLinks/sociallinks"

import "./footer.scss"

const Footer = props => (
	<footer className={`Footer ${props.className}`}>
		<Link to="/" className="Footer__title">
			{props.siteTitle}
		</Link>
		<SocialLinks />
		<span className="Footer__legal">
			© {new Date().getFullYear()} {props.siteAuthor}. All rights reserved.
		</span>
	</footer>
)

export default Footer
