import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 5px 5px 5px;
    font-weight: 400;
    font-size: 12pt;
    height: 450px;
    width: 300px;
    border: 1px solid;
    border-color: #dedede;
    border-radius: 15px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    display: flex;
    background-color: #fffafa;
    color: #000;
    flex-direction: column;
`;

export const HeaderSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const FirstSection = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`;

export const SecondSection = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background-color: #eb70e9;
`;

export const Separator = styled.hr`
    height: 1px;
    background-color: #dedede;
    border: none;
    margin: 20px 0px;
`;

export const Title = styled.span`
    font-size: 15pt;
    font-weight: 700;
`;

export const SubTitle = styled.span`
    font-size: 13.5pt;
    color: #eb70e9;
`;

export const DescriptionText = styled.span`
    color: #000;
`;
