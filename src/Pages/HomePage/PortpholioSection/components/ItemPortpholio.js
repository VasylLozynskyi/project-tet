import React from "react";

function ItemPortpholio(props) {
   
    return (
        <div className="flex-portpholio">
                <a href='/portpholio'>
                    <div className="portpholio-item">
                        <img src={props.imgvalue} alt=""/>
                        <div className="title-item-portpholio">{props.titlevalue}</div>
                    </div>
                </a>
        </div>
    );

}
export default ItemPortpholio;