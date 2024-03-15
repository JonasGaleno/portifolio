import styled from "styled-components";


export const Apresentation = styled.div`
    font-weight: 700;
    font-size: 40pt;
    text-align: center;

    @media screen and (max-width: 767px) { // 430
        font-size: 30pt;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        font-size: 35pt;
    }
`;

export const Summary = styled.div`
    font-weight: 400;
    font-size: 15pt;
    /* width: 600px; */
    width: 70%;
    text-align: center;

    @media screen and (max-width: 767px) { // 430
        /* width: 350px; */
        width: 85%;
        margin-bottom: 20px;
    }
`;

export const Container = styled.div.attrs<{$imageurl: string;}>(props => ({
    $imageurl: props.$imageurl,
}))`
    margin-top: 100px;
    font-style: normal;
    padding-top: 150px;
    padding-bottom: 155px;
    display: flex;
    background-color: #836FFF;
    color: #000;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 60px;
    background-image: url(${(props)=>props.$imageurl});

    @media screen and (max-width: 767px) { // 430
        padding-top: 110px;
        padding-bottom: 50px;
        gap: 45px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        padding-top: 110px;
        padding-bottom: 55px;
    }
`;

export const AnimatedGif = styled.div.attrs<{$gifurl: string;}>(props => ({
    $gifurl: props.$gifurl,
}))`
    height: 287px;
    width: 498px;
    background-image: url(${(props)=>props.$gifurl});

    @media screen and (max-width: 400px) { // 430
        height: 187px;
        width: 320px;
        background-size: cover;
        margin-top: 20px;
    }

    @media screen and (min-width: 401px) and (max-width: 767px) { // 430
        height: 197px;
        width: 400px;
        background-size: cover;
        margin-top: 20px;
    }
`;
