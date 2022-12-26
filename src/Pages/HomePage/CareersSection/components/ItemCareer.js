import React from "react";
// import {Routes, Route} from 'react-router-dom';

// import CareersPage from '../../../CareerPage/CareersPage';

function ItemCareer(props) {
   
    return (
        <>
            <div className="flex-portpholio">
                <a href='/careers'>
                    <div className="careers-item">
                        <img className="img-careers" src={props.imgvalue} alt=""/>
                        <div className="text-careers">{props.titlevalue}</div>
                    </div>
                </a>
            </div>
            {/* <Routes>
                <Route path='/careers' element={<CareersPage/>} />
            </Routes> */}
        </>
    );

}
export default ItemCareer;