import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Vini N.</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#Projects" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/iamvinnycius/" className="footer__social-icon" target="_blank">
                    <i class="uil uil-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/vinicius-nascimento-b1367311a/" className="footer__social-icon" target="_blank">
                    <i class="uil uil-linkedin"></i>
                    </a>

                    <a href="https://github.com/vinii10" className="footer__social-icon" target="_blank">
                    <i class="uil uil-github"></i>
                    </a>
                        </div>
                
                <span className="footer__copy">
                    &#169; V.N|All rights reserved
                </span>
                    </div>
        </footer>
    )
}

export default Footer;