import React from 'react';
import ReactPlayer from 'react-player';
import SectionOtherarticies from './SectionOtherarticies';

import './styles_CardBlogitem.css';
import SubShare from './SubShare/SubShare';

const CardBlogitem = (props) => {
    
    return (
        <>
            <div className='wrapper-blogitem'>
                <div className='container-blogitem'>
                    <div className='section-title-blogitem'>
                        <div className='title-blogitem'>{props.titleblog}</div>
                        <div className='subtitle-blogitem'>{props.subtitle}</div>
                    </div>
                    <div className='video-blogitem' >
                        <ReactPlayer controls={true} width={'100%'} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    </div>
                    <div className='section-content-blogitem'>
                        <div className='text-blogitem'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                        anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud.
                        </div>
                        <div className='text-subtitle-blogitem'>Lorem ipsum</div>
                        <div className='subtext-blogitem'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud. 
                        </div>
                        <div className='subcontainer-blogitem'>
                            <div className='checkline-li-subtext-blogitem'></div>
                            <div className='li-subtext-blogitem'> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud.
                            </div>
                        </div>
                        <div className='subtext2-blogitem'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud. 
                        </div>
                        <div className='content-share'>
                            <SubShare /> 
                           
                        </div>           
                    </div> 
                    <SectionOtherarticies check={props.id} />
                </div>
            </div> 
        </>
    );

}
export default CardBlogitem;