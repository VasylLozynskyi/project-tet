import React from "react";
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import './Styles__Sliderportpholio.css';
import ItemPortpholio from "./ItemPortpholio";
import { PortpholioMass } from "../../../ItemPages/PortpholioItems/components/ItemtoAddPortpholio";

const SliderCarousel = (props) => {

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
        {PortpholioMass.map((newportpholio) => (
           <ItemPortpholio
           key = {newportpholio.Id}
           id ={newportpholio.Id}
           titlevalue = {newportpholio.Titlevalue}
           imgvalue = {newportpholio.ImgValue} 
           type = {newportpholio.Type}
       ></ItemPortpholio> 
        ))} 
        </Carousel>
        </div>
    );
}
export default SliderCarousel;