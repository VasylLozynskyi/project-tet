import React from "react";
import imgImg from '../../../../img/portfolio/itemimg.png';
import imgissue from '../../../../img/portfolio/issue.png';
import imgsolution from '../../../../img/portfolio/solution.png';
import imgbig from '../../../../img/portfolio/imgbig.png';
import ImgBeFFF1 from '../../../../img/portfolio/FFF1.png';
import Rectangle from "./Rectangle";
import SectionOtherProjects from "./SectionOtherProjects";

import './CardPortpholioitem.css';


const CardPortpholioItem = (props) => {
    return (
        <>
            <div className="wrapper-cardportpholioitem">
                <div className="container-cardportpholioitem" >
                    <div className="title-portpholioitem">{props.titlevalue}</div>
                    <div className="subtitle-portpholioitem">{props.subtitle}</div>
                    <img className="img-befff1" src={ImgBeFFF1} alt='#' />
                    <div className="subtext-portpholioitem">{props.subtext}</div>
                    <div className="container-backgroundimgimg">
                        <img className="imgimg" src={imgImg} alt='img to item' />
                    </div>
                    <div className="titleissue">Issue</div>
                    <ul className="issue-content">
                        {props.issue.map( (newissue) => (
                            <li key={Math.random()}>{newissue}</li>
                        )) }
                    </ul>
                    <div className="container-backgroundimgissue">   
                        <img className="imgissue" src={imgissue} alt='img issue' />
                    </div>  
                    <div className="flex-content-solution">
                        <div className="container-imgsolution">
                            <img className="imgsolution" src={imgsolution} alt='img solution' />
                        </div>
                        <div className="flexcontainer-textsolution">
                            <div className="titlesolution">Solution</div>
                            <ul className="solution-content">
                                {props.solution.map( (newsolution) => (
                                    <li key={Math.random()}>{newsolution}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-backgroundimgbig">
                    <img className="imgbig" src={imgbig}  alt='img big of all' />
                </div>
                <Rectangle />
                <SectionOtherProjects check={props.id} />
            </div>
        </>
    );
}
export default CardPortpholioItem;