import React, { Fragment, useState } from "react";
import {
    SArrowContainer,
    SArrowIcon,
    SNav,
    SNavLabel,
    SNavLabelContainer,
    SNavLink,
    SNavLinkContainer,
} from "./styles";
import "./Nav.css";
import { SDropdown, STreeChild, STreeItem } from "./Dropdown/styles";
const TreeItem = ({ onSelectCallback, label, children, link }) => {
    const [isOpen, setIsOpen] = useState(false);

    
    return (
        <STreeItem>
            {link && (
                <SNavLink className="droptext" to={link} onClick={onSelectCallback}>
                    <div className="HSFDSDI">{label}</div>
                    
                </SNavLink>
            )}
            {!link && (
                <SNavLabelContainer onClick={() => setIsOpen((p) => !p)}>
                    <SNavLabel isOpen={isOpen}>{label}</SNavLabel>
                    <SArrowContainer isOpen={isOpen}>
                        <SArrowIcon />
                    </SArrowContainer>
                </SNavLabelContainer>
            )}
            {children && isOpen && <STreeChild>{children}</STreeChild>}
        </STreeItem>
    );
};

const Nav = ({ navLinks, menuToggleHandler }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const openDropdownHandler = (label) => {
        if (label === openDropdown) return setOpenDropdown(null);
        setOpenDropdown(label);
    };

    const manageDropdownHandler = (label,tree) => {
        if (window.innerWidth > 960 && tree) {
            if (label === openDropdown) return setOpenDropdown(null);
            setOpenDropdown(label);
        }
       
    };
    const onSelectCallback = () => {
        if (menuToggleHandler) menuToggleHandler();
        setOpenDropdown(null);
    };

    const onSelectCallbackLink = (link) => {
        
        if (menuToggleHandler) menuToggleHandler();
        setOpenDropdown(null);
    };

    const closeDropdownHandler = (tree) => {
        if (window.innerWidth > 960) {
        if (tree !== null ) return setOpenDropdown(null);
        }
    };
    const [colorChangeText, setColorchangeText] = useState(false);
    const changeNavbarColorText = () =>{
       if(window.scrollY >= 80){
         setColorchangeText(true);
       }
       else{
         setColorchangeText(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColorText);
    
    const createTree = (branch) => (
        <TreeItem  onSelectCallback={onSelectCallback} label={branch.label} link={branch.link}>
            {branch?.branches?.map((branch, index) => (
                <Fragment key={index}>{createTree(branch)}hgdhf</Fragment>
                
            ))}
            
        </TreeItem>
    );
    return (
        <SNav>
            
            <div className={colorChangeText ? "home-link menu-black" : "home-link-notsc menu"} >
            <a href="https://jerushahomefoods.com" className={colorChangeText ? "home-link-text menu-black" : "home-link-notsc-text menu"}>HOME</a>
            
            </div>
            
            
           {navLinks.map(({ label, link, tree,leaf }, index) => {
                const isOpen = openDropdown === label;
                
                return (
                    
                    <SNavLinkContainer key={index} onMouseLeave={() =>closeDropdownHandler(tree)} onMouseEnter={() => manageDropdownHandler(label,tree)}>
                       
                        {link && leaf && <div to={link} onClick={() =>onSelectCallback()}>{label}</div>}
                        
    {link && !leaf && <SNavLink className={colorChangeText ? " menu-black" : "menu"} to={link} onClick={() =>onSelectCallbackLink(link)}><div className={colorChangeText ? "menui menu-black" : "menui menu"} ><p className={colorChangeText ? " menu-black" : "menu"}>{label}</p></div></SNavLink>}
                        {!link && (
                            <SNavLabelContainer  onClick={() => openDropdownHandler(label)}>
                                <SNavLabel className={colorChangeText ? "menu-black" : "menu"}   onFocus={() => openDropdownHandler(label)} isOpen={isOpen}>{label}</SNavLabel>
                                <SArrowContainer isOpen={isOpen}>
                                    <SArrowIcon />
                                </SArrowContainer>
                            </SNavLabelContainer>
                        )}
                        {isOpen && colorChangeText && <div className= "Dhgvh" >
                                        {tree.map((branch, index) => (
                                            <Fragment key={index}>{createTree(branch)}</Fragment>
                                        ))}
                                    </div>
                        }
                                    {isOpen && !colorChangeText && <div className= "HJFjf" >
                                        {tree.map((branch, index) => (
                                            <Fragment key={index}>{createTree(branch)}</Fragment>
                                        ))}
                                    </div>}

                    </SNavLinkContainer>
                );
            })}
        </SNav>
    );
};

Nav.defaultProps = {
    navLinks: [
       
        {
            
            label: "WHO WE ARE?",
            link: null,
            tree: [
                {
                    label: "About Us",
                    link: "/about-us",
                    branches: null,
                    leaf:true,
                },
                {
                    label: "Our Vision & Principles",
                    link: "/vision",
                    branches: null,
                    leaf:true,
                },
                {
                    label: "Video Testimonials",
                    link: "/video_testimonials",
                    branches: null,
                    leaf:true,
                },
            ],
        },
        {
            label: "SERVICES",
            link: null,
            tree: [
                {
                    label: "Nutrition Food Delivery",
                    link: "/nutrition_food_delivery",
                    branches: null,
                    leaf:true,
                },
                {
                    label: "Catering Service",
                    link: "/catering",
                    branches: null,
                    leaf:true,
                },
            ],
        },
        {
            label: "PRODUCTS",
            link: null,
            tree: [
                {
                    label: "Meals Box",
                    link: "/meals_box",
                    branches: null,
                    leaf:true,
                },
                {
                    label: "Dinner Box",
                    link: "/dinner_box",
                    branches: null,
                    leaf:true,
                },
                {
                    label: "Break Box",
                    link: "/break_box",
                    branches: null,
                    leaf:true,
                },
            ],
        },
        {
            label: "CONTACT US",
            link: "/contact",
            tree: null,
            leaf:false,
        },
    ],
};

export default Nav;