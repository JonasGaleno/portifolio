import styled from "styled-components";

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

export const Description = styled.div`
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

export const ConteinerCards = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 60px;

    @media screen and (max-width: 767px) { // 430
        flex-direction: column;
    }
`;
