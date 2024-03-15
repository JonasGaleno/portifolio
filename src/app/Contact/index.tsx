'use client'

import { Container, FormSection, Form, FormInputRow, FormInput, InputTextarea, FormLabel, FormMessage, FormButtonConteiner, FormButton } from './styles';
import background from './../../../public/home-bg.png';
import Title from '@/components/Title';
import { FormEvent, useState } from 'react';
import emailjs from 'emailjs-com';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";

export default function Contact () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [userID, setUserID] = useState(process.env.NEXT_PUBLIC_USER_ID_EMAILJS || '');
    const [templateID, setTemplateID] = useState(process.env.NEXT_PUBLIC_TEMPLATE_ID_EMAILJS || '');
    const [serviceID, setServiceID] = useState(process.env.NEXT_PUBLIC_SERVICE_ID_EMAILJS || '');

    const { executeRecaptcha } = useGoogleReCaptcha(); // teste

    const messageVariants = {
		hidden: { 
            y: 30, 
            opacity: 0 
        },
		animate: { 
            y: 0, 
            opacity: 1, 
            transition: { 
                delay: 0.2, 
                duration: 0.4 
            } 
        },
	};

    const validateForm = (name: string, email: string, message: string) => {
        if (!name.trim()) {
            return 'Campo Nome é obrigatório!';
        }

        // const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
        const regex = /\S+@\S+\.\S+/;

        if (!email) {
            return 'Campo Email é obrigatório!';
        } else if (!regex.test(email.toLowerCase())) {
            return 'Endereço de Email inválido!';
        }

        if (!message.trim()) {
            return 'Campo Mensagem é obrigatório!';
        }

        return null;
    }

    const submitEnquiryForm = (googleRecaptchaToken : string) => {
        async function goAsync() {
            const response = await axios({
                method: "post",
                url: "/api/contact-form-submit",
                data: {
                    name: name,
                    email: email,
                    message: message,
                    googleRecaptchaToken: googleRecaptchaToken,
                },
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
            });
    
    
            if (response?.data?.success === false) {
                setError(`Falha no captcha com pontuação: ${response?.data?.score}`);
            }
        }

        goAsync().then(() => {});
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setSuccess('');

        const resultError = validateForm(name, email, message);

        if (resultError !== null) {
            setError(resultError);

            return;
        }

        if (!executeRecaptcha) {
            setError("Falha na execução do recaptcha");

            return;
        }

        executeRecaptcha("enquiryFormSubmit").then((googleRecaptchaToken) => {
            submitEnquiryForm(googleRecaptchaToken);
        });

        if (error !== "") {
            return;
        }

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Jonas",
            message: message,
        };

        emailjs.send(serviceID, templateID, templateParams, userID).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );

        setName('');
        setEmail('');
        setMessage('');
        setError('');
        setSuccess('Email enviado com sucesso!');
    }

    return (
        <Container id='contato' $imageurl={background.src}>
            <Title title={'Contato'} />
            <FormSection>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <FormInputRow>
                        <FormLabel>Nome</FormLabel>
                        <FormInput
                            type={'text'}
                            placeholder={'Digite seu nome'}
                            value={name}
                            onChange={(e: any) => setName(e.target.value)}
                        />
                    </FormInputRow>
                    <FormInputRow>
                        <FormLabel>Email</FormLabel>
                        <FormInput
                            type={'email'}
                            placeholder={'Digite seu email'}
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                        />
                    </FormInputRow>
                    <FormInputRow>
                        <FormLabel>Mensagem</FormLabel>
                        <InputTextarea
                            placeholder={'Digite sua mensagem'}
                            value={message}
                            onChange={(e: any) => setMessage(e.target.value)}
                        />
                    </FormInputRow>
                    <FormButtonConteiner>
                        <FormButton type="submit">enviar</FormButton>
                    </FormButtonConteiner>
                </Form>
                {error && (
                    <FormMessage
                        variants={messageVariants}
                        initial="hidden"
                        animate="animate"
                        $error={true}
                    >
                        {error}
                    </FormMessage>
                )}
                {success && (
                    <FormMessage
                        variants={messageVariants}
                        initial="hidden"
                        animate="animate"
                        $error={false}
                    >
                        {success}
                    </FormMessage>
                )}
            </FormSection>
        </ Container>
    );
}
