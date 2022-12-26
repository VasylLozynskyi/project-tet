import React from "react";
import emailjs from '@emailjs/browser';
import './Styles_contactussection.css';


const ContactForm = () => {

    function handleSubmit(e){
        e.preventDefault();
        emailjs.sendForm('service_97qly6u', 'template_gsk5fnb', e.target, 'TjaaJNzZGQ6O3cIga').then(res => {
                console.log(res);
            }).catch(err => console.log(err));
    }
  return (
    <div id="8" className="contacts">
            <form  className="form-contactus" onSubmit={handleSubmit}>
                    <div className="title-contacts">
                        Contact us
                    </div>
                    <div className="text-contacts">Talk to us for more assistance...</div>
                    <div className="content-contacts">
                        <div className="flex-form-contacts">
                            <div>
                                <input className="full-name-contacts" 
                                    placeholder="Full Name" tabIndex="1" type="text" name="name"></input>
                            </div>
                            <div>
                                <input className="content-form-contacts" 
                                    placeholder="Email" tabIndex="2" type="text" name="email"></input>
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex-message-for-contacts">
                        <textarea className="message-form-contacts"
                            placeholder="Message" tabIndex="3" type="text" name="message">
                        </textarea>
                    </div>
                    <br/>
                    <div className="button-container-sendm">
                        <input 
                            className="send-message" 
                            tabIndex="4" 
                            // mailto="mailto:no-reply@example.com" 
                            type="submit"
                            value="Send Message"
                        >
                        </input>
                    </div>
            </form>
    </div>
  )
};

export default ContactForm;