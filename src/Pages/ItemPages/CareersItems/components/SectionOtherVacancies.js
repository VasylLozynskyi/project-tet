import React from "react";
import Carousel from 'react-multi-carousel';
import ItemCareersComponent from "../../../CareerPage/components/ItemCareersComponent";
import {CareersMass} from '../../../ItemPages/CareersItems/components/ItemtoAddCareer';

import './styles_SectionOtherVacancies.css'


const SectionOtherVacancies = (props) => {
    

    function RemovecareersitemFromMass() {

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

        let othercareers = [];
        for (let i=0; i<CareersMass.length; i++){
            if( CareersMass[i].Id !== props.check){
                othercareers.push(CareersMass[i]);
            }
        } 

        return (
            <>
            
                <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        arrows={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        > 
        {othercareers.map((newothercareers) => (
           <ItemCareersComponent
           key={newothercareers.Id}
           Id ={newothercareers.Id}
           titlevalue = {newothercareers.Titlevalue}
           imgvalue = {newothercareers.Imgvalue} 
       ></ItemCareersComponent> 
        ))} 
        </Carousel>
       
            </>
        );
    }
    return (
        <>
            <div className="container-othervacancies">
                <div className="Title-othervacancies">Other Vacancies</div>
                <div className="items-container-othervacancies">
                    <RemovecareersitemFromMass/>
                </div>
            </div>
        </>
    );
}
export default SectionOtherVacancies;