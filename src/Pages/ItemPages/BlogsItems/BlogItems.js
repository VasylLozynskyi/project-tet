import React from "react";
import { useParams } from 'react-router-dom';

import NoMachPage from "../../NoMachPage/NoMachPage";
import CardBlogitem from "./components/CardBlogitem";
import { BlogMass } from "./components/ItemtoAddBlog";

const BlogItems = (props) => {
    const {id} = useParams();

    for (let i=0; i<BlogMass.length; i++){
        if (id === BlogMass[i].Id){
           
        return (
        <>
            <CardBlogitem 
                key = {BlogMass[i].Id}
                id = {BlogMass[i].Id}
                subtitle = {BlogMass[i].Subtitlevalue}
                titleblog = {BlogMass[i].Titlevalue}
            />
        </>
        );
        }
    }
        return <NoMachPage />;

}
export default BlogItems;