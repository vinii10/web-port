import React from "react";
import "./contact.css"

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact___card-title">E-mail</h3>
                        <span className="contact__card-data">viniciuskac@gmail.com</span>
                        <a href="mailto:viniciuskac@gmail.com" className="contact__button">Write Me{" "}
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;