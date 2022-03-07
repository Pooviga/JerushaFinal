import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../app/slices/uiSlice";
import companyLogo from './images/gold.png';
import "./Header.css"
import Nav from "./Nav/Nav";

import {
    SCenter,
    SCloseIcon,
    SCTAButton,
    SHeader,
    SHeaderFixed,
    SLeft,
    SLogoLink,
    SMenu,
    SMenuIcon,
    SMenuToggleButton,
    SRight,
} from "./styles";

const Header = () => {
    const dispatch = useDispatch();
    const { menuOpen } = useSelector((state) => state.ui);

    const menuToggleHandler = () => {
        dispatch(uiActions.menuToggle());
    };
    const menuCloseHandler = () => {
        if (menuOpen) dispatch(uiActions.menuClose());
    };

    return (
        <>
            <SHeaderFixed>
                <SHeader>
                    <SLeft>
                        <SLogoLink to="/" onClick={menuCloseHandler}>
                            <img src={companyLogo} className="logonav" alt={companyLogo}></img>
                        </SLogoLink>
                    </SLeft>
                    <SCenter>
                        <Nav />
                    </SCenter>
                    <SRight>
                        <SCTAButton></SCTAButton>
                        <SMenuToggleButton onClick={menuToggleHandler}>
                            {!menuOpen ? <SMenuIcon /> : <SCloseIcon />}
                        </SMenuToggleButton>
                    </SRight>
                </SHeader>
            </SHeaderFixed>
            <SMenu style={menuOpen ? { left: 0 } : {}}>
                <Nav menuToggleHandler={menuToggleHandler} />
            </SMenu>
        </>
    );
};

export default Header;
