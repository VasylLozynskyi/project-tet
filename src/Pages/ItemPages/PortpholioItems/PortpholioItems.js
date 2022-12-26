import React from 'react';
import { useParams } from 'react-router-dom';
import { PortpholioMass } from '../../ItemPages/PortpholioItems/components/ItemtoAddPortpholio';
import CardPortpholioItem from "./components/CardPortpholioItem";
import NoMachPage from '../../NoMachPage/NoMachPage';

const PortpholioItemmy = (props) =>{
    const {id} = useParams();
      
    for (let i=0; i<PortpholioMass.length; i++){

        if (id === PortpholioMass[i].Id){
            return(
                <>
                    <CardPortpholioItem 
                    key={PortpholioMass[i].Id}
                    id={PortpholioMass[i].Id}
                    titlevalue = {PortpholioMass[i].Titlevalue}
                    subtitle = {'Sep 25, 2020 · 5 min read'}
                    imgvalue = {PortpholioMass[i].ImgValue} 
                    type = {PortpholioMass[i].Type}
                    subtext = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'}
                    issue = {['Fluent spoken and written English;',
                     'Strong communications and interpersonal skills;',
                     'Self-motivated and focused on growth and success within a company;',
                     'Able to work in a fast-paced sales environment independently and as a motivated team player.',
                     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla '
                    ]}
                    solution = {['Fluent spoken and written English;',
                     'Strong communications and interpersonal skills;',
                     'Self-motivated and focused on growth and success within a company;',
                     'Able to work in a fast-paced sales environment independently and as a motivated team player.',
                     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla '
                    ]}
                    />
                </>
            );
        } 
    }  
    return  <NoMachPage />;
}
export default PortpholioItemmy;