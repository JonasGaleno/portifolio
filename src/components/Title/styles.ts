import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleHeading = styled.div`
    font-weight: 700;
    font-size: 40pt;

    @media screen and (max-width: 767px) { // 430
        font-size: 30pt;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        font-size: 35pt;
    }
`;

export const Separator = styled.div`
    display: flex;
    width: 45px;
    height: 5px;
    border-radius: 20px;
    background-color: #eb70e9;
    margin-top: 10px;
    margin-bottom: 50px;
`;
