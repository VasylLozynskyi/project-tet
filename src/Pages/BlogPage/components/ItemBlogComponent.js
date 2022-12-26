import React from "react";
import './styles_ItemBlogComponent.css';

function ItemBlogComponent (props) {
   
    return (
        <>
                <a key={props.Id} href={'/blog/'+props.Id}>
                    <div className="blogg-item">
                        <img className="img-blog" src={props.imgvalue} alt="img-blog-1"/>
                        <div className="title-blogg-item">{props.titlevalue}</div>
                        <div className="text-blogg">{props.subtitlevalue}</div>
                    </div>
                </a>
        </>
    );
}
export default ItemBlogComponent;