import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="content">
                <div className="title">
                    <span>Contact Me</span>
                </div>
                <form className="cf" >
                    <div className="half left cf">
                        <input type={"text"} id="input-name" name="name" placeholder="Name" required/>
                        <input type={"email"} id="input-email" name="_replyto" placeholder="Email address" required/>
                        <input type={"text"} id="input-subject" name="subject" placeholder="Subject"/>
                    </div>

                    <div className="half right cf">
                        <textarea name="message" type={"text"} id="input-message" placeholder="message" required></textarea>
                    </div>
                    <input type={"submit"} value="Submit" id="input-submit"  />

                </form>


            </div>

        </section>
    )
}

export default Contact;