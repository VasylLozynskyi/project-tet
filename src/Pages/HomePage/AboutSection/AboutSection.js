import React from "react";
import imgearthabout from '../../../img/earth-about.png';

import './styles_AboutSection.css';

const AboutSection = () => {
    return (
        
        <div className="wrapper-about">
            <div className="about-container">
                    <div className="absolute-about-text">
                        <div className="title-about">About</div>
                        <div className="text-title-about"> a little about our company</div>
                        <div className="subtitle-about">Path of success</div>
                        <div className="text-subtitle-about">
                            <p className="text-subtitle-about-p">
                                Tetalab was founded in Lviv at a heart of Western Ukraine. We are a team of talented developers, managers, and designers. We believe that we can grow as a team by working together and making our customers happy. We are looking for new challenges and possibilities. That is why your projects and ideas may be a good fit for our team.
                            </p>
                            <br/>
                            <p className="text-subtitle-about-p">
                                We have customers from a different countries:
                            </p>
                            <br/>
                            <p className="text-subtitle-about-p">
                                — Belgium, Brazil, France, Germany, India, Norway, UK, Ukraine, USA, Vietnam, Zambia
                            </p>
                        </div>
                        
                        <div className="img-backgroun-about">
                            <img className="img-earth" src={imgearthabout} alt='imgearthabout' />
                        </div>
                    </div>
                    
            </div>
        </div>
    );
}
export default AboutSection;