import React from "react";
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './styles-footer.css';

const Navbar = () => {

    return (
        <>
                        <ul className='header_listf'>
                        <li>
                              <a className='header-linkf' href="/">Home</a>
                            </li>
                            <li><HashLink className="header-linkf" to="/domains #2"  >Domains</HashLink></li>                            
                            <li><HashLink className='header-linkf' to="/services #3" >Services</HashLink></li> 
                            <li><HashLink className='header-linkf' to="/about #4" >About</HashLink></li>
                            <li><Link className='header-linkf' to="/portpholio">Portpholio</Link></li>
                            <li><Link className='header-linkf' to="/careers">Careers</Link></li>
                            <li><Link className='header-linkf' to="/blog">Blog</Link></li>
                            <li>
                                <Link className='header-linkf' to="/contactus" >
                                   Contact us
                                </Link>
                            </li>                    
                        </ul>      
        </>
    );
}
export default Navbar;