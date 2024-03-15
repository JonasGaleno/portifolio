import styled from "styled-components";
import { motion } from 'framer-motion';

export const FormSection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
	padding: 30px 20px 20px 20px;
	background-color: #FFF;
    border-radius: 10px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;

    @media screen and (max-width: 767px) { // 430
        width: 90%;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 80%;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
`;

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 30px;
`;

export const FormInput = styled.input`
	padding-left: 10px;
	outline: none;
	border-radius: 10px;
	height: 40px;
	border: none;
	font-size: 12pt;
    background-color: #ededed;
`;

export const InputTextarea = styled.textarea`
    height: 200px;
	padding-left: 10px;
    padding-top: 10px;
	outline: none;
	border-radius: 10px;
	border: none;
	font-size: 12pt;
    background-color: #ededed;
`;

export const FormLabel = styled.label`
	font-size: 13.5pt;
	margin-bottom: 10px;
	color: #6e6e6e;
`;

export const FormButtonConteiner = styled.div`
    display: flex;
	justify-content: center;
`;

export const FormButton = styled.button`
    width: 200px;
	padding: 15px 50px;
    border: none;
    font-weight: 700;
    font-size: 12pt;
    text-transform: uppercase;
    border-radius: 5px;
    background-color: #eb70e9;
    color: #FFF;
    letter-spacing: 1px;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.15);
    transition: transform .3s;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: transform;

    &:hover {
        transform: translateY(-5px);
        background-color: #e882e6;
    }
`;

export const FormMessage = styled(motion.div).attrs<{$error: boolean;}>(props => ({
    $error: props.$error,
}))`
	color: ${(props) => (props.$error ? 'red' : 'green')};
	padding: 5px;
	text-align: center;
	margin-top: 1rem;
`;

export const Container = styled.div.attrs<{$imageurl: string;}>(props => ({
    $imageurl: props.$imageurl,
}))`
    padding-top: 150px;
    padding-bottom: 110px;
    display: flex;
    background-image: url(${(props)=>props.$imageurl});
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
