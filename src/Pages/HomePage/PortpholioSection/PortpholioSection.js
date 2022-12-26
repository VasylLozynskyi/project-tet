import React from "react";
import SliderCarousel from "./components/SliderCarousel";
import ButtonPortpholioSection from "./components/Button_Portpholio_Section";

import './styles_PortpholioSection.css';

const PortpholioSection = () =>{
  return (
    <>
      <div id="5" className="container-portpholiosection">
        <div className="content-potpholiosection">
            <div className="flex-portpholio-header">
              <div className="title-portpholio">Portfolio</div>
              <ButtonPortpholioSection />
            </div>
            <div className="sub-title-portpholio">our latest projects in the past 2 years</div>
            <div className="items-container">
              <SliderCarousel />
            </div>
        </div>
      </div>
    </>
  );
}
export default PortpholioSection;