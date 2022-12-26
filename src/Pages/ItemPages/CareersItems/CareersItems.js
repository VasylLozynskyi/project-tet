import React from "react";
import { useParams } from 'react-router-dom';

import CardCareersitem from "./components/CardCareersitem";
import { CareersMass } from "./components/ItemtoAddCareer";
import NoMachPage from "../../NoMachPage/NoMachPage";

const CareersItems = (props) => {
    const {id} = useParams();

    for (let i=0; i<CareersMass.length; i++){
        if (id === CareersMass[i].Id){
        return (
        <>
            <CardCareersitem 
                key={CareersMass[i].Id}
                id={CareersMass[i].Id}
                titlecareer = {CareersMass[i].Titlevalue}
            />
        </>
        );
        }  
    }
    return <NoMachPage />;
}
export default CareersItems;