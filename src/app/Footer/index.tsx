'use client'

import Link from 'next/link';
import { Container, Frase, SocialLinks, SeparatorFooter, CopyRight, LinkName } from './styles';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer () {
    return (
        <Container id='rodape'>
            <Frase>Vivendo, aprendendo e melhorando um dia de cada vez.</Frase>
            <SocialLinks>
                <Link href='https://www.linkedin.com/in/jonasgaleno/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin size="32px" />
                </Link>
                <Link  href='https://github.com/jonasgaleno' target='_blank' rel='noopener noreferrer'>
                    <FaGithub size="32px" />
                </Link>
                <Link  href='https://twitter.com/jojonho01' target='_blank' rel='noopener noreferrer'>
                    <FaXTwitter size="32px" />
                </Link>
            </SocialLinks>
            <SeparatorFooter />
            <CopyRight>&copy; Copyright 2024. Feito por <LinkName href='https://www.linkedin.com/in/jonasgaleno/'>Jonas Galeno</LinkName></CopyRight>
        </ Container>
    );
}
