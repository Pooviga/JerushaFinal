import styled from "styled-components";

import { v, b } from "../../../../../styles/variables";

export const SDropdown = styled.div`
    border: 1px solid grey;
    box-shadow: 0px 3px 3px 3px grey ;
    
    white-space: nowrap;

    @media ${b.md} {
        min-width: 300%;
        position: absolute;
    }
`;

export const STreeItem = styled.div`
    
    color:black;
    width:100%;
    padding-right:10px;
`;

export const STreeChild = styled.div`
    margin-top: ${v.smSpacing};
    color:black;
    background: rgba(255, 255, 255, 0.2);
`;
