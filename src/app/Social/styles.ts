import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 50%;
    padding: 5px;
    height: 150px;
    width: 50px;
    gap: 5px;
    border-radius: 2.5px;
    display: flex;
    background-color: #FFF;
    flex-direction: column;
    transform: translateY(-50%);
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;

    @media screen and (max-width: 767px) { // 430
        display: none;
    }
`;

export const LinkSocial = styled.a`
    padding: 5px;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #e3cce3;
    }
`;
