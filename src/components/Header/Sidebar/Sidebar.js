import React from "react";
import { HashLink } from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";
import logo from '../../../img/logo_TetaLab.jpg';


export default props => {
  return (
    <>
    
    <Menu {...props}> 
        <a className='logoTetaLab' href="/">
                          <img
                              src={logo}
                              height="36"
                              width="140.5"
                              alt="logo-TetaLab" 
                          />
        </a>
      
      <ul className='header_list mobilelink'>
      <li>
                              <a className='header-link mobilelink' href="/">Home</a>
                            </li>
                            <li><HashLink className="header-link mobilelink" to="/#domains"  >Domains</HashLink></li>                            
                            <li><HashLink className='header-link mobilelink' to="/#services" >Services</HashLink></li> 
                            <li><HashLink className='header-link mobilelink' to="/#about" >About</HashLink></li>
                            <li><Link className='header-link mobilelink' to="/portpholio">Portpholio</Link></li>
                            <li><Link className='header-link mobilelink' to="/careers">Careers</Link></li>
                            <li><Link className='header-link mobilelink' to="/blog">Blog</Link></li>
                            <li>
                                <Link to="/contactus">
                                  <button className='buttonnavbar mobilelink'>Contact us</button>
                                </Link>
                            </li>
                        </ul> 
         
    </Menu>
     
   </>
  );
};
