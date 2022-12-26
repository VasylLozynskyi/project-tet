import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header";


import HomePage from "../Pages/HomePage/HomePage";
import ContuctUsPage from "../Pages/ContactUsPage/ContactUsPage";
import PortpholioRouter from "../Pages/PortpholioPage/components/PortpholioRouter";
import BlogPage from "../Pages/BlogPage/BlogPage";
import CareersPage from "../Pages/CareerPage/CareersPage";
import PortpholioItemmy from "../Pages/ItemPages/PortpholioItems/PortpholioItems";
import CareersItems from '../Pages/ItemPages/CareersItems/CareersItems';
import BlogItems from '../Pages/ItemPages/BlogsItems/BlogItems';
import Footer from './Footer/Footer';




const SiteRouter = () =>{
   
        return (
            <>
            <Header/>
            <Routes>
            <Route path="/" element={<HomePage/>}  />
            <Route path="/portpholio" element={<PortpholioRouter/>}  />
            <Route path="/careers" element={<CareersPage/>}  />
            <Route path="/blog" element={<BlogPage/>}  />
            <Route path="/contactus" element={<ContuctUsPage/>}  />
            <Route path={'/portpholio/:id'} element={<PortpholioItemmy />}/>
            <Route path={'/careers/:id/*'} element={<CareersItems />}/>
            <Route path={'/blog/:id'} element={<BlogItems />}/>
            <Route path="*" element={<HomePage/>}  />
            </Routes>
            <Footer />
            </>
        );
}
export default SiteRouter;