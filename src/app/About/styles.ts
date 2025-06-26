import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled.div`
    padding-top: 150px;
    padding-bottom: 50px;
    display: flex;
    background-color: #fffafa;
    color: #000;
    flex-direction: column;
    text-align: center;
    align-items: center;
    scroll-behavior: smooth;

    @media screen and (max-width: 767px) { // 430
        padding-top: 110px;
        padding-bottom: 50px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        padding-top: 110px;
        padding-bottom: 50px;
    }
`;

export const Description = styled(motion.div)`
    font-size: 14pt;
    /* width: 800px; */
    width: 70%;

    @media screen and (max-width: 767px) { // 430
        /* width: 350px; */
        width: 82%;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 85%;
    }
`;

export const ConteinerCards = styled(motion.div)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 60px;
    justify-content: center;
    width: 40%;

    @media screen and (max-width: 950px) {
        width: 100%;
    }

    @media screen and (min-width: 950px) and (max-width: 1180px) {
        width: 80%;
    }

    @media screen and (min-width: 1180px) and (max-width: 1565px) {
        width: 60%;
    }
`;
