import React, { useState } from "react";
import Header from "./Header/Header";
import "./Layout.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "./../../app/slices/uiSlice";

import companyLogo from './Header/images/gold.png';
import "./Header/Header.css"
import Nav from "./Header/Nav/Nav";
import Footer from "./Footer/Footer"

import {
    SCenter,
    SCloseIcon,
    SCTAButton,
    SHeader,
    SHeaderFixed,
    SHeaderHeight,
    SLeft,
    SLogo,
    SLogoLink,
    SMenu,
    SMenuIcon,
    SMenuToggleButton,
    SRight,
} from "./styles";

const Layout = ({ children }) => {

    const dispatch = useDispatch();
    const { menuOpen } = useSelector((state) => state.ui);

    const menuToggleHandler = () => {
        dispatch(uiActions.menuToggle());
    };
    const menuCloseHandler = () => {
        if (menuOpen) dispatch(uiActions.menuClose());
    };

    const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
    return (
        <>
            <div className={colorChange  ? "navfixedscroll" : "navfixed"}>
                <SHeader className="JHFHFH">
                    <SLeft>
                        <SLogoLink to="/" onClick={menuCloseHandler}>
                             <img src={companyLogo} className={colorChange  ? "logonav" : "logonavscroll"} alt={companyLogo}></img> 
                        </SLogoLink>
                    </SLeft>
                    <SCenter>
                        <Nav />
                    </SCenter>
                    <SRight>
                        
                        <div className="RhfHFj">
                            
                        <a href="https://www.facebook.com/profile.php?id=100077336865102" target="_blank"  className={colorChange  ? "fa fa-facebook  social-media-scroll" : "fa fa-facebook social-icons"}></a>
                               <a href="https://t.me/jerushahomefoods" target="_blank"  className={colorChange  ? "fa fa-send  social-media-scroll" : "fa fa-send  social-icons"}></a>
                               <a href="https://instagram.com/jerushahomefoods?utm_medium=copy_link" target="_blank"  className={colorChange  ? "fa fa-instagram  social-media-scroll" : "fa fa-instagram  social-icons"}></a>
                             
                         </div>
                        <SMenuToggleButton onClick={menuToggleHandler}>
                            {!menuOpen ? <SMenuIcon /> : <SCloseIcon />}
                        </SMenuToggleButton>
                    </SRight>
                </SHeader>
            </div>
            <SMenu style={menuOpen ? { left: 0 } : {}}>
                <Nav menuToggleHandler={menuToggleHandler} />
            </SMenu>
            <div >{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
