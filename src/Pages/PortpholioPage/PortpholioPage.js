import React from "react";
import { useState } from "react";

import ArrayPortpholioAll from "./components/ArrayPortpholio";

import './styles_PortpholioPage.css';

const PortpholioPage = () => {
    window.scrollTo(0, 0);
    const [selected, setSelect] = useState("All");
    
    return (
        <>
        
            <div className="portpholiopage-wrapper">
                <div className="portpholiopage-content">
                    <div className="title-portpholioPage">Portpholio</div>
                    <div className="sub-title-portpholio">our latest projects in the past 2 years</div>
                    <div className="flex-buttons-of-types">
                    
                    <button className="all-types buttonportpholio"
                        onClick={() => setSelect("All")}
                        >All</button>
                    <button className="orderingsystems-types buttonportpholio"
                        onClick={() => setSelect("Ordering")}
                        >Ordering Systems</button>
                    <button className="tourism-types buttonportpholio" 
                        onClick={() => setSelect("Tourism")}
                        >Tourism</button>
                    <button className="entertainment-types buttonportpholio"
                        onClick={() => setSelect("Entertainment")}
                        >Entertainment</button>
                    <button className="ioT-types buttonportpholio"
                        onClick={() => setSelect("ioT")}
                        >ioT</button>
                    </div>
                    <div className="flex-array-portpholiopage">
                        <ArrayPortpholioAll
                        typess ={selected}  />
                    </div>
                </div>
            </div>
        </>

    );

}
export default PortpholioPage;