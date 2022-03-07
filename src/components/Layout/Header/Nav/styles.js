import { Link } from "react-router-dom";
import styled from "styled-components";

import { v, b } from "../../../../styles/variables";

import { IoMdArrowDropdown } from "react-icons/io";

export const SNav = styled.nav`
    width: auto;
    padding: ${v.mdSpacing};
    background: white;
    border-radius: ${v.borderRadius};
    margin-left:22%;
   
    @media ${b.md} {
        background: none;
        padding: 0;
        height: 100%;
        display: flex;
    }
    @media only screen and (max-width: 768px) 
    {
        margin-left:0%;
    }
`;

export const SNavLinkContainer = styled.div`
    user-select: none;
    position: relative;
    width: intrinsic;         
    width: -moz-max-content;    
    width: -webkit-max-content;
    width: max-content;
    margin-left:20px;
    :not(:last-of-type) {
        margin-bottom: ${v.mdSpacing};
    }
    ::after{
        content: '';
        position: absolute;
        width: 0px;
        height: 5px;
        left: 50%;
        bottom:0;
        background-color: #FF0000;
        transition: all ease-in-out .2s;
    }
    :hover::after{
        width: 100%;
        left: 0;
    }

    @media ${b.md} {
        display: flex;
        align-items: center;
        :not(:last-of-type) {
            margin-bottom: 0;
            margin-right: ${v.mdSpacing};
        }
    }
    @media only screen and (max-width: 768px) 
    {
        width:100%;
        margin-left:0%;

        :hover::after{
            width:0%;
        }
    }
    
`;

export const SNavLink = styled(Link)`
    text-decoration: none;
   
    @media only screen and (max-width: 768px) 
    {
        width:100%;
    }
`;

export const SArrowContainer = styled.div`
    svg {
        color: ${({ isOpen, theme }) => (!isOpen ? "red" : theme.primary)};
        transform: ${({ isOpen }) => (!isOpen ? "rotate(-90deg)" : "none")};
    }
`;
export const SArrowIcon = styled(IoMdArrowDropdown)`
    display: none;
    margin-left: 4px;
    @media only screen and (max-width: 768px) 
     {
        display: block;
    }
`;

export const SNavLabelContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
   
    
`;

export const SNavLabel = styled.span`
    width: intrinsic;         
    width: -moz-max-content;    
    width: -webkit-max-content;
    width: max-content;
    margin-right:20px
    cursor: pointer;
    
`;
