import styled from "styled-components";

export const Container = styled.div`
    height: 300px;
    display: flex;
    background-color: #000;
    color: #fff;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Frase = styled.div`
    font-size: 14pt;
    font-weight: 700;
    width: 200px;
    text-align: center;
`;

export const SocialLinks = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const SeparatorFooter = styled.hr`
    height: 1px;
    background-color: #737373;
    border: none;
    width: 80%;
    margin: 30px 0px;
`;

export const CopyRight = styled.div`
    margin-top: 20px;
    font-size: 9pt;
`;

export const LinkName = styled.a`
    font-size: 9pt;
    text-decoration: underline;
`;
