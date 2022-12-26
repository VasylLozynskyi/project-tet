import React from "react";
import { useState } from "react";

import imgtourizm from '../../../img/Domains/world_connect1.png';
import imgentertainment from '../../../img/Domains/battle 2.png';
import imghardware from '../../../img/Domains/Group 679.png';
import imgsystems from '../../../img/Domains/Systems.png';

import './Domains.css';



const Domains = () => {
    
let [hovered, setHovered] = useState('');

    return (
                <div className="wrapper-domains" >
                    <div className="domains-container">
                        <div className="title title-domains">Domains</div>
                        <div className="text text-title-domains">
                            We have experience in a different domains
                        </div>
                        <div className="flex-domains">
                            <div 
                            onMouseEnter={() => setHovered('somedomain1')}
                            onMouseLeave={() => setHovered('')}
                            className="domain-tourism">
                                <img className="img-tourism" src={imgtourizm}  alt="img-tourism"/>
                                <p className="text-tourism">Tourism</p>
                            </div>
                            <div 
                            onMouseEnter={() => setHovered('somedomain2')}
                            onMouseLeave={() => setHovered('')}
                            className="domain-entertainment">
                                <img className="img-entertainment" src={imgentertainment} alt="img-entertainment"/>
                                <p className="text-entertainment">Entertainment</p>
                            </div>
                            <div 
                            onMouseEnter={() => setHovered('somedomain3')}
                            onMouseLeave={() => setHovered('')}
                            className="domain-hardware">
                                <img className="img-dom-hardware" src={imghardware} alt="img-dom-hardware"/>
                                <p className="text-dom-hardware">loT (Hardware)</p>
                            </div>
                            <div 
                            onMouseEnter={() => setHovered('somedomain4')}
                            onMouseLeave={() => setHovered('')}
                            className="domain-systems">
                                <img className="img-systems" src={imgsystems} alt="img-systems"/>
                            <p className="text-systems">Ordering Systems</p>
                            </div>
                        </div>
                        <div className="text-domains">
                            {hovered.toString()}
                        </div>
                    </div>
                </div>
            );
}
export default Domains;