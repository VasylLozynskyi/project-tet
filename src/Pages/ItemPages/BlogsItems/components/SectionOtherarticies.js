import React from "react";
import Carousel from 'react-multi-carousel';
import ItemBlogComponent from "../../../BlogPage/components/ItemBlogComponent";
import {BlogMass} from '../../../ItemPages/BlogsItems/components/ItemtoAddBlog';

import './styles_SectionOtherarticies.css'


const SectionOtherarticies = (props) => {
    

    function RemovearticiesitemFromMass() {

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

        let otherarticies = [];
        for (let i=0; i<BlogMass.length; i++){
            if( BlogMass[i].Id !== props.check){
                otherarticies.push(BlogMass[i]);
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
                        className="flexx-blogg-item"
                    > 
                        {otherarticies.map((newotherarticies) => ( 
                        <ItemBlogComponent
                            key={newotherarticies.Id}
                            Id ={newotherarticies.Id}
                            titlevalue = {newotherarticies.Titlevalue}
                            subtitlevalue = {newotherarticies.Subtitlevalue}
                            imgvalue = {newotherarticies.Imgvalue} 
                        ></ItemBlogComponent> 
                        ))} 
                    </Carousel>  
            </>
        );
    }
    return (
        <>
            <div className="container-otherarticies">
                <div className="Title-otherarticies">Other articies</div>
                <div className="items-container-otherarticies">
                    <RemovearticiesitemFromMass/>
                </div>
            </div>
        </>
    );
}
export default SectionOtherarticies;