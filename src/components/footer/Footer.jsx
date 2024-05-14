import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Link } from "react-router-dom";

import "./style.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<ContentWrapper>
				<ul className="menuItems">
					<li className="menuItem">Terms Of Use</li>
					<li className="menuItem">Privacy-Policy</li>
					<li className="menuItem">About</li>
					<li className="menuItem">Blog</li>
					<li className="menuItem">FAQ</li>
				</ul>

				<div className="socialIcons">
					<Link
						to="https://github.com/mohitmaithanii/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="icon">
							<FaGithub />
						</span>
					</Link>
					<Link
						to="https://www.linkedin.com/in/mohitmaithanii/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="icon">
							<FaLinkedin />
						</span>
					</Link>
					<Link
						to="https://twitter.com/mohitmaithaniii"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="icon">
							<FaTwitter />
						</span>
					</Link>
				</div>
			</ContentWrapper>
		</footer>
	);
};

export default Footer;
