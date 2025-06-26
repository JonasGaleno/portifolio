'use client'

import { Container, LinkSocial } from './styles';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

export default function Social () {
    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
        >
            <LinkSocial 
                href='https://www.linkedin.com/in/jonasgaleno/' 
                target='_blank' 
                rel='noopener noreferrer'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                <FaLinkedin size="32px" />
            </LinkSocial>
            <LinkSocial  
                href='https://github.com/jonasgaleno' 
                target='_blank' 
                rel='noopener noreferrer'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                <FaGithub size="32px" />
            </LinkSocial>
            <LinkSocial  
                href='https://twitter.com/jojonho01' 
                target='_blank' 
                rel='noopener noreferrer'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                <FaXTwitter size="32px" />
            </LinkSocial>
        </Container>
    );
}
