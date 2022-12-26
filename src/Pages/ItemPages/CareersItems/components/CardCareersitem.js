import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import SectionOtherVacancies from './SectionOtherVacancies';

import ReactPhoneInput from "react-phone-input-2";

import imgplus from '../../../../img/add.png';
import 'react-phone-input-2/lib/style.css'

import './CardCareersitem.css';

const CardCareersitem = (props) => {
 
  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }

      function handleSubmit(e){
        e.preventDefault();
        emailjs.sendForm('service_97qly6u', 'template_gsk5fnb', e.target, 'TjaaJNzZGQ6O3cIga').then(res => {
                console.log(res);
            }).catch(err => console.log(err));
    }
    return (
        <>
        <div className='wrapper-cardcareersitem'>
            <div className='container-cardcareersitem'>
                <div className='title-careers-item'>{props.titlecareer}</div>
                <div className='flex-content-careers-item'>
                    <div className='container-skills'>
                        <div className='subtitleskills'>Required skills:</div>
                        <ul className='ul-careersitem'>
                            <li>Fluent spoken and written English;</li>
                            <li>Strong communications and interpersonal skills;</li>
                            <li>Self-motivated and focused on growth and success within a company;</li>
                            <li>Able to work in a fast-paced sales environment independently and as a motivated team player.</li>
                        </ul>
                        <div className='subtitleskills'>Will be a plus:</div>
                        <ul className='ul-careersitem'>
                            <li>Knowledge and understanding of the market and the specific sales in IT;</li>
                            <li>Sales experience on UpWork and other platforms.</li>
                        </ul>
                        <div className='subtitleskills'>We offer:</div>
                        <ul className='ul-careersitem'>
                            <li>Well paid Part time/ Full time job;</li>
                            <li>Career growth in the company;</li>
                            <li>Improvement of English through extensive communication;</li>
                            <li>We teach how to work and provide with all needed info.</li>
                        </ul>
                        <div className='subtitleskills'>Responsibilities:</div>
                        <ul className='ul-careersitem'>
                            <li>Search and proposals preparation for potential customers on Upwork/other freelance marketplaces;</li>
                            <li>Communicate in Skype with potential customers to promote products, provide service support, and establish proper channels of information and communication, and increase sales;</li>
                        </ul>
                    </div>
                    <div className='container-apply'>
                        <div className='titleapply'>Apply now</div>
                        <form className='flexformapply' onSubmit={handleSubmit}>
                                <input className='setname-apply' 
                                    placeholder="Name" 
                                    tabIndex="1" 
                                    type="text" 
                                    name="name">
                                </input>
                                <input className='setname-apply' 
                                    placeholder="Surname" 
                                    tabIndex="2" 
                                    type="text" 
                                    name="surname">
                                </input>
                                <input className='setname-apply' 
                                    placeholder="Email*" 
                                    tabIndex="3" 
                                    type="text" 
                                    name="email">
                                </input>
                                <ReactPhoneInput
                                  tabIndex="4" 
                                  name='phonenumber'
                                  value="+380"
                                  defaultCountry="us"
                                  containerStyle={{ marginTop: "15px" }}
                                  searchClass="search-class"
                                  earchStyle={{ margin: "0", width: "97%", height: "30px" }}
                                  enableSearchField
                                  disableSearchIcon
                                />
                                <label className="filesection">Resume/CV                               
                                    <input className='setname-apply'
                                    type="file" 
                                    onChange={handleChange} 
                                    name={file}
                                    style={{
                                      display: 'none'
                                    }}
                                    />
                                    <span class="file-custom">
                                      <img src={imgplus} alt='#' />
                                    </span>
                                </label>
                            
                                    <label className='cheboxsection' for="checkbox">I have read and accept the Terms of Use and Privacy and Cookies Policy
                                      <input className='checkbox-array'   
                                      type='checkbox'  
                                      id="checkbox" 
                                      name='checkbox'  
                                      />
                                      <span class="checkmark"></span>
                                    </label>
                                <input 
                                    className="send-message-apply" 
                                    tabIndex="5" 
                                    // mailto="mailto:no-reply@example.com" 
                                    type="submit"
                                    value="Apply"
                                >
                                </input>
                        </form>
                    </div>
                </div>
            </div>

            <SectionOtherVacancies check={props.id} />
        </div>
        </>

    );
}
export default CardCareersitem;