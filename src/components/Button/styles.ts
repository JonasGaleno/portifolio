import styled from "styled-components";

import Link from 'next/link';

export const StyledLink = styled(Link)`
    padding: 15px 50px;
    font-weight: 700;
    font-size: 12pt;
    text-transform: uppercase;
    border-radius: 5px;
    background-color: #eb70e9;
    color: #FFF;
    letter-spacing: 1px;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.15);
    transition: transform .3s;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: transform;

    &:hover {
        transform: translateY(-5px);
        background-color: #e882e6;
    }
`
