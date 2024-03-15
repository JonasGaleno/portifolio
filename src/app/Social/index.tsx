'use client'

import { Container, LinkSocial } from './styles';

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

export default function Social () {
    return (
        <Container>
            <LinkSocial href='https://www.linkedin.com/in/jonasgaleno/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin size="32px" />
            </LinkSocial>
            <LinkSocial  href='https://github.com/jonasgaleno' target='_blank' rel='noopener noreferrer'>
                <FaGithub size="32px" />
            </LinkSocial>
            <LinkSocial  href='https://twitter.com/jojonho01' target='_blank' rel='noopener noreferrer'>
                <FaXTwitter size="32px" />
            </LinkSocial>
        </Container>
    );
}
