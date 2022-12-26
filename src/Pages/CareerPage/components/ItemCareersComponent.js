import React from "react";

import './Styles_CareersComponent.css';

function ItemCareersComponent (props) {
   
    return (
        <>
                <a key={props.Id} href={'/careers/'+props.Id}>
                    <div className="careers-item">
                        <img className="img-careers" src={props.imgvalue} alt=""/>
                        <div className="text-careers">{props.titlevalue}</div>
                    </div>
                </a>
        </>
    );
}
export default ItemCareersComponent;