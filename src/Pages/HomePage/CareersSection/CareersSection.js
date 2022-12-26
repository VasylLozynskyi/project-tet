import React from "react";
import Carousel from 'react-multi-carousel';
import ButtonCareersSection from './components/Button_Carrers_Section';
import { CareersMass } from "../../ItemPages/CareersItems/components/ItemtoAddCareer";
import ItemCareer from "./components/ItemCareer";

import "./styles_careerssection.css";
import 'react-multi-carousel/lib/styles.css';

const CareersSection = () => {


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1240 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1239, min: 666 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 665, min: 307 },
      items: 1,
      minwidth: "307px",
      slidesToSlide: 1 // optional, default to 1.
    }
};  


  return (
    <div id="6" className="careerssection">                 
        <div className="carousel-wrapper">
                <div className="flex-header-careers">
                    <div className="title-careers">Careers</div>
                    <ButtonCareersSection />
                </div>
                <div className="text-careers">
                    We are constantly looking for talented and ambitious people
                </div>
                <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        autoPlay
        // ={deviceType !== "mobile" ? true : false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        arrows={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
          className="carouselcareers" >
                    {CareersMass.map((newcareers) => (
                        <ItemCareer
                            key = {newcareers.Id}
                            Id ={newcareers.Id}
                            titlevalue = {newcareers.Titlevalue}
                            imgvalue = {newcareers.Imgvalue} 
                        ></ItemCareer> 
                    ))}
                </Carousel>
         </div>
    </div>
  );
}
export default CareersSection;
