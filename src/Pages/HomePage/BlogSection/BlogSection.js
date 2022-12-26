import React from "react";
import ButtonBlogSection from './components/Button_BlogSection';
import { BlogMass } from "../../ItemPages/BlogsItems/components/ItemtoAddBlog";
import ItemBlog from "./components/ItemBlogs";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./styles_BlogSection.css";


const BlogSection = () => {

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
    <div id="7" className="blogsection">                 
        <div className="carousel-wrapper">
                <div className="flex-header-blog">
                    <div className="title-blog">Blog</div>
                    <ButtonBlogSection />
                </div>
                <div className="text-text-blog">
                    Lorem ipsum dolor sit amet, consectetur 
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
                className="carouselblog"  >
                    {BlogMass.map((newblog) => (
                        <ItemBlog
                            Id ={newblog.Id}
                            titlevalue = {newblog.Titlevalue}
                            subtitlevalue = {newblog.Subtitlevalue}
                            imgvalue = {newblog.Imgvalue} 
                        ></ItemBlog> 
                    ))}
                </Carousel>
         </div>
    </div>
  );

}
export default BlogSection;
