import React, { Fragment, useState } from "react";
import { SArrowContainer, SArrowIcon, SNavLabel, SNavLabelContainer, SNavLink } from "../styles";
import {  STreeChild, STreeItem } from "./styles";
import "../Nav.css";

const TreeItem = ({ onSelectCallback, label, children, link }) => {
    const [isOpen, setIsOpen] = useState(false);

    
    return (
        <STreeItem>
            {link && (
                <SNavLink className="droptext" to={link} onClick={onSelectCallback}>
                    {label}
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

const Dropdown = ({ tree, onSelectCallback }) => {
    const createTree = (branch) => (
        <TreeItem onSelectCallback={onSelectCallback} label={branch.label} link={branch.link}>
            {branch?.branches?.map((branch, index) => (
                <Fragment key={index}>{createTree(branch)}</Fragment>
            ))}
        </TreeItem>
    );

    console.log(tree);
    const [padChange, setPadchangeText] = useState(false);
    const changeNavbarColorText = () =>{
       if(window.scrollY >= 80){
           console.log('dropdown');
         setPadchangeText(true);
       }
       else{
         setPadchangeText(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColorText);

    return (
        <div className={padChange ? "toppadscroll" : "toppad"} >
            {tree.map((branch, index) => (
                <Fragment key={index}>{createTree(branch)}</Fragment>
            ))}
        </div>
    );
};

export default Dropdown;
