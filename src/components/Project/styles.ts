import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media screen and (max-width: 767px) { // 430
        flex-direction: column;
        gap: 50px;
    }
`;

export const ProjectInfo = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 35%;
    gap: 25px;

    @media screen and (max-width: 767px) { // 430
        width: 80%;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 0px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        margin-top: 70px;
        width: 40%;
    }
`;

export const ProjectDescription = styled.div`
    font-size: 12pt;
    line-height: 1.7;

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
`;

export const ButtonContainer = styled.div`
    display: flex;
	justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ProjectImage = styled.img`
    width: 400px;
    /* width: 80%; */
    height: 235px;
    /* height: 56.5%; */
    margin-top: 100px;
    margin-left: 50px;

    @media screen and (max-width: 400px) { // 430
        width: 279px;
        height: 160px;
        /* width: 80%; */
        /* height: 56%; */
        margin-top: 72px;
        margin-left: 36px;
    }

    @media screen and (min-width: 401px) and (max-width: 767px) {
        width: 321px;
        height: 185px;
        /* width: 80%; */
        /* height: 56%; */
        margin-top: 81px;
        margin-left: 40px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 321px;
        height: 185px;
        margin-top: 81px;
        margin-left: 40px;
    }
`;

export const ProjectImageContainer = styled.div.attrs<{$imageurl: string;}>(props => ({
    $imageurl: props.$imageurl,
}))`
    width: 500px;
    /* width: 36%; */
    height: 410px;
    background-image: url(${(props)=>props.$imageurl});
    background-size: cover;
    display: flex;

    @media screen and (max-width: 400px) { // 430
        width: 350px;
        height: 290px;
    }

    @media screen and (min-width: 401px) and (max-width: 767px) {
        width: 400px;
        height: 327px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 400px;
        height: 350px;
    }
`;
