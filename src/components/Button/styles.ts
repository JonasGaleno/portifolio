import styled from "styled-components";
import { motion } from 'framer-motion';
import Link from 'next/link';

export const StyledLink = styled(motion.div)`
    padding: 15px 50px;
    font-weight: 700;
    font-size: 12pt;
    text-transform: uppercase;
    border-radius: 5px;
    background-color: #eb70e9;
    color: #FFF;
    letter-spacing: 1px;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.15);

    &:hover {
        background-color: #e882e6;
    }
`
