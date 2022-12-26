import React, { useEffect, useState } from "react";

import TitleSection from './TitleSection/TitleSection';
import PortpholioSection from './PortpholioSection/PortpholioSection';
import ContactForm from './ContactUsSection/ContactusSection';
import Domains from './DomainsSection/Domains';
import ServicesSection from './ServicesSection/ServicesSection';
import AboutSection from './AboutSection/AboutSection';
import CareersSection from './CareersSection/CareersSection';
import BlogSection from './BlogSection/BlogSection';
import {useLocation} from 'react-router-dom';
import './styles_HomePage.css';


const HomePage = () => {
    const [backToTopButton, setbackToTopButton] = useState(true);
    let [colorUpButton, setcolorUpButton]= useState("black");
    

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY < 5120) {
                setcolorUpButton("black");
            } else {
                setcolorUpButton("white");
            }
        })
    }, []);
   
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 110) {
                setbackToTopButton(true);   
            } else {
                setbackToTopButton(false); 
            }
        })
    }, []);
   const ScrollUp = () => {
    window.scrollTo(0, 0);
    };
  
let temp ={};
if (useLocation().pathname === "/") {
   temp = 
    {
        paddingTop: '40px',
     }
 } 
    return (
        <>
            <div className='home'>
                    
            <div className='flex-home-page'>
                            {backToTopButton && (
                                <button className="reterer" 
                                    style={{
                                    position: "fixed",
                                    color: colorUpButton,
                                    top: "90%",
                                    right: "5%", 
                                    zIndex: "400",
                                    fontSize: "50px",  
                                    }}  onClick={ScrollUp}>∧
                            </button>)}
                        
                
                <div id ="home">
                    <TitleSection />
                </div >
                <div id='domains' style={temp}>
                    <Domains />
                </div>
                <div id='services' style={temp}>
                    <ServicesSection />
                </div>
                <div id='about' style={temp}>
                    <AboutSection />    
                </div>  
                <PortpholioSection />
                <CareersSection />
                <BlogSection />
                <ContactForm />  
            </div>
        </div> 
        </>
    );
    }
    export default HomePage;