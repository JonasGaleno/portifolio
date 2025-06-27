import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    margin-top: 64px;
    align-items: start;

    @media screen and (max-width: 767px) { // 430
        flex-direction: column;
        gap: 28px;
        align-items: center;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        align-items: center;
    }
`;

export const ProjectInfo = styled(motion.div)`
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 35%;
    border: 1px solid;
    border-color: #dedede;
    border-radius: 10px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    background-color: #FFFFFF;

    @media screen and (max-width: 767px) { // 430
        width: 80%;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 40%;
    }
`;

export const ProjectDescription = styled.div`
    font-size: 12pt;
    line-height: 1.7;
    max-width: 1290px;

    @media screen and (max-width: 767px) { // 430
        font-size: 14pt;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        font-size: 14pt;
        line-height: 1.5;
    }
`;

export const ProjectTitle = styled.div`  
    font-size: 15pt;
    font-weight: 700;
    text-align:center;
    width: 100%;
`;

export const ButtonContainer = styled.div`
    display: flex;
	justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ProjectImage = styled.img`
    width: 400px;
    height: 232px;
    margin-top: 10px;
    z-index: 2;
    object-fit: cover;

    @media screen and (max-width: 400px) { // 430
        width: 280px;
        height: 162px;
        margin-top: 41px;
    }

    @media screen and (min-width: 401px) and (max-width: 767px) {
        width: 321px;
        height: 185px;
        margin-top: 10px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 321px;
        height: 185px;
        margin-top: 20px;
    }
`;

export const ProjectImageContainer = styled(motion.div).attrs<{$imageurl: string;}>(props => ({
    $imageurl: props.$imageurl,
}))`
    width: 500px;
    height: 320px;
    background-image: url(${(props)=>props.$imageurl});
    background-size: cover;
    background-position: center center;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: start;
    position: relative;

    @media screen and (max-width: 400px) { // 430
        width: 350px;
        height: 290px;
    }

    @media screen and (min-width: 401px) and (max-width: 767px) {
        width: 400px;
        height: 260px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 400px;
        height: 280px;
    }
`;

export const Separator = styled.hr`
    width: 100%;
    height: 1px;
    background-color: #dedede;
    border: none;
    margin: 15px 0px;
`;
