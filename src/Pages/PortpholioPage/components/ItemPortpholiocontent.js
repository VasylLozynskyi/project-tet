import React from "react";

import './Styles_itemcontent.css';

function ItemPortpholiocontent(props) {

    return (
        <div className="flex-portpholioPage">
                <a href={'/portpholio/' + props.id}>
                    <div className="item-portpholio">
                        <img src={props.imgvalue} alt=""/>
                        <div className="title-item-portpholio">{props.titlevalue}</div>
                    </div>
                </a>
        </div>
    );

}
export default ItemPortpholiocontent;