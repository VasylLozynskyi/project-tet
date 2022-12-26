import React from "react";
import {isMobile} from 'react-device-detect';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import SideBar from "./Sidebar/Sidebar";
import logo from '../../img/logo_TetaLab.jpg';

import './styles_Header.css';


const Header = () => {

  const renderMenu =() =>{
      
  if (isMobile) { 
    return ( 
      <>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div className='logoTetaLab isMobile' >
                  <a href="/">
                        <img
                            src={logo}
                            height="36"
                            width="140.5"
                            alt="logo-TetaLab" 
                        />
                  </a>
        </div>   
      </>
    )
    } else{ 
      return (
        <div className='wrapper'>
        <header className='header'>
            <div className='container'>
                <div className='headerbody'>
                    <a className='logoTetaLab' href="/">
                        <img
                            src={logo}
                            height="36"
                            width="140.5"
                            alt="logo-TetaLab" 
                        />
                    </a>
                    <div className='header_menu'>
                        <ul className='header_list'>
                            <li>
                              <a className='header-link' href="/">Home</a>
                            </li>
                            <li><HashLink className="header-link" to="/#domains"  >Domains</HashLink></li>                            
                            <li><HashLink className='header-link' to="/#services" >Services</HashLink></li> 
                            <li><HashLink className='header-link' to="/#about" >About</HashLink></li>
                            <li><Link className='header-link' to="/portpholio">Portpholio</Link></li>
                            <li><Link className='header-link' to="/careers">Careers</Link></li>
                            <li><Link className='header-link' to="/blog">Blog</Link></li>
                            <li>
                                <Link to="/contactus">
                                  <button className='buttonnavbar'>Contact us</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        
      
    </div>
      )
      
    }
    
  }
    return (
        <>
         {renderMenu()}
         
        </>

    );
}
   
export default Header;