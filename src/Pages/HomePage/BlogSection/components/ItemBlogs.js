import React from "react";

function ItemBlog(props) {
   
    return (
        <>
            <div className="flex-blogitem">
                <a href='/blog'>
                    <div className="blog-item">
                        <img className="img-blog" src={props.imgvalue} alt=""/>
                        <div className="title-blog-item">{props.titlevalue}</div>
                        <div className="text-blog">{props.subtitlevalue}</div>
                    </div>
                </a>
            </div>
        </>
    );

}
export default ItemBlog;