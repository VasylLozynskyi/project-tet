import React from "react";

import ItemPortpholiocontent from "./ItemPortpholiocontent";
import { PortpholioMass } from "../../ItemPages/PortpholioItems/components/ItemtoAddPortpholio";


const ArrayPortpholioAll = (props) => {
    

    if (props.typess === 'All'){
        let newArrayPortpholioMass=[];
        for (let i=0; i < PortpholioMass.length ; i++){
        newArrayPortpholioMass.push(PortpholioMass[i]);
        }

    return (
        <>
        {newArrayPortpholioMass.map((newportpholio) => (
           <ItemPortpholiocontent
           id ={newportpholio.Id}
           titlevalue = {newportpholio.Titlevalue}
           imgvalue = {newportpholio.ImgValue} 
           type = {newportpholio.Type}
       ></ItemPortpholiocontent> 
        ))}
            
    </>
    );
    } else if (props.typess === 'Ordering'){
        let newArrayPortpholioMass=[];
        for (let i=0; i < PortpholioMass.length ; i++){
            if (PortpholioMass[i].Type ==='Ordering Systems'){
        newArrayPortpholioMass.push(PortpholioMass[i]);
    }
        }
        return (
            <>
                {newArrayPortpholioMass.map((newportpholio) => (
           <ItemPortpholiocontent
           id ={newportpholio.Id}
           titlevalue = {newportpholio.Titlevalue}
           imgvalue = {newportpholio.ImgValue} 
           type = {newportpholio.Type}
       ></ItemPortpholiocontent> 
        ))}
            </>
        );
    } else if (props.typess === 'Tourism') {
        let newArrayPortpholioMass=[];
        for (let i=0; i < PortpholioMass.length ; i++){
            if (PortpholioMass[i].Type ==='Tourism'){
        newArrayPortpholioMass.push(PortpholioMass[i]);
    }
        }
        return (
            <>
                {newArrayPortpholioMass.map((newportpholio) => (
           <ItemPortpholiocontent
           id ={newportpholio.Id}
           titlevalue = {newportpholio.Titlevalue}
           imgvalue = {newportpholio.ImgValue} 
           type = {newportpholio.Type}
       ></ItemPortpholiocontent> 
        ))}
            </>
        );
    } else if (props.typess === 'Entertainment') {
        let newArrayPortpholioMass=[];
        for (let i=0; i < PortpholioMass.length ; i++){
            if (PortpholioMass[i].Type ==='Entertainment'){
        newArrayPortpholioMass.push(PortpholioMass[i]);
    }
        }
        return (
            <>
                {newArrayPortpholioMass.map((newportpholio) => (
           <ItemPortpholiocontent
           id ={newportpholio.Id}
           titlevalue = {newportpholio.Titlevalue}
           imgvalue = {newportpholio.ImgValue} 
           type = {newportpholio.Type}
       ></ItemPortpholiocontent> 
        ))}
            </>
        );
    }else if (props.typess === 'ioT') {
        let newArrayPortpholioMass=[];
        for (let i=0; i < PortpholioMass.length ; i++){
            if (PortpholioMass[i].Type ==='ioT'){
        newArrayPortpholioMass.push(PortpholioMass[i]);
    }
        }
        return (
            <>
            {newArrayPortpholioMass.map((newportpholio) => (
           <ItemPortpholiocontent
           id ={newportpholio.Id}
           titlevalue = {newportpholio.Titlevalue}
           imgvalue = {newportpholio.ImgValue} 
           type = {newportpholio.Type}
       ></ItemPortpholiocontent> 
        ))}
            </>
        );
    }
}
export default ArrayPortpholioAll;