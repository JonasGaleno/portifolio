import styled from "styled-components";

export const Container = styled.div`
    padding-top: 150px;
    padding-bottom: 50px;
    display: flex;
    background-color: #f7f7f7;
    color: #000;
    align-items: center;
    flex-direction: column;

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
    width: 60%;
    text-align: center;

    @media screen and (max-width: 767px) { // 430
        /* width: 350px; */
        font-size: 16pt;
        width: 82%;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        font-size: 16pt;
        width: 80%;
    }
`;
