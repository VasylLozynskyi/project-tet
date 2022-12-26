import React from "react";

import mailimg from '../../img/email.png';
import inimg from '../../img/in_header.png';
import upimg from '../../img/up_header.png';
import beimg from '../../img/Behance.png';
import facebookimg from '../../img//f_header.png';

import './styles_Social.css';

const SocialIcons = () =>{
    return (
            <>
                <div className='social-icons'>
                        <ul className="flex-sectionicons">
                            <li><a className='icons' href="/mail" target="_blank">
                                    <img src={mailimg} alt='*' />
                                </a>
                            </li>
                            <li><a className='icons' href="https://www.linkedin.com/company/tetalab/" target="_blank" rel="noopener noreferrer">
                                    <img src={inimg} alt='*'/>
                                </a>
                            </li>
                            <li><a className='icons' href="/" target="_blank" rel="noopener noreferrer">
                                    <img src={upimg} alt='*' />
                                </a>
                            </li>
                            <li><a className='icons' href="/" target="_blank" rel="noopener noreferrer">
                                    <img src={beimg} alt='*' />
                                </a>
                            </li>
                            <li><a className='icons' href="https://www.facebook.com/TetaLab-108468204017631/" target="_blank" rel="noopener noreferrer">
                                    <img src={facebookimg} alt='*' />
                                </a>
                            </li>
                        </ul>
                </div>
            </>
    );
}

export default SocialIcons;