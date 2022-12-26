import React from "react";
import Carousel from 'react-multi-carousel';
import ItemPortpholiocontent from "../../../PortpholioPage/components/ItemPortpholiocontent";
import {PortpholioMass} from '../../../ItemPages/PortpholioItems/components/ItemtoAddPortpholio';

import './styles_sectionotherprojects.css'

const SectionOtherProjects = (props) => {
    

    function RemoveportpholioitemFromMass() {

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

        let otherprojects = [];
        for (let i=0; i<PortpholioMass.length; i++){
            if( PortpholioMass[i].Id !== props.check){
                otherprojects.push(PortpholioMass[i]);
            }
        } 

        return (
            <>
            <div className='my-own-custom-container'>
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
        {otherprojects.map((newpotherprojects) => (
           <ItemPortpholiocontent
           id ={newpotherprojects.Id}
           titlevalue = {newpotherprojects.Titlevalue}
           imgvalue = {newpotherprojects.ImgValue} 
           type = {newpotherprojects.Type}
       ></ItemPortpholiocontent> 
        ))} 
        </Carousel>
        </div>
            </>
        );
    }
    return (
        <>
            <div className="container-otherprojects">
                <div className="Title-otherprojects">Other Projects</div>
                <div className="items-container-otherprojects">
                    <RemoveportpholioitemFromMass/>
                </div>
            </div>
        </>
    );
}
export default SectionOtherProjects;