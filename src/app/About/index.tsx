'use client'

import Card from '@/components/Card';
import { Container, ConteinerCards, Description } from './styles';
import { FaDatabase } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import Title from '@/components/Title';


export default function About () {
    return (
        <Container id='sobre'>
            <Title title={'Sobre mim'}/>
            <Description>Eu sou um desenvolvedor web construindo e realizando manutenções em sistemas há 2 anos e meio. Minha especialidade é a construção e integração de API's, portanto o back-end utilizando prioritariamente PHP é meu ponto forte, gosto muito de manipular dados e mexer com regras de negócio. Trabalhei em empresas que utilizam ERP's de gestão em diversas verticais do mercado e também com emissão de notas fiscais</Description>
            <ConteinerCards>
                <Card
                    icon={<FaDatabase size={28} color='#FFF'/>}
                    title={'Desenvolvedor Back-end'}
                    mainDescription={'Eu gosto de criar APIs e aplicar as melhores práticas na estruturação de dados'}
                    firstSubtitle={'Linguagens que domino'}
                    firtSubtitleDescription={'PHP, MySQL, PostgreSQL, Python, NodeJs'}
                    secondSubtitle={'Ferramentas'}
                    secondSubtitleDescription={'Composer, Laravel, Slim Framework, Doctrine, API Rest, API Soap, Linux Scriptcase, PgAdmin, XAMPP'}
                />
                <Card
                    icon={<IoTerminal size={28} color='#FFF'/>}
                    title={'Desenvolvedor Front-end'}
                    mainDescription={'Aprendo cada vez mais com as novas tecnologias e me empolgo em suas ferramentas de estilização'}
                    firstSubtitle={'Linguagens que domino'}
                    firtSubtitleDescription={'CSS, SCSS, HTML, TypeScript, Javascript'}
                    secondSubtitle={'Ferramentas'}
                    secondSubtitleDescription={'Bootstrap, ReactJs, React Native, NextJs, Figma'}
                />
            </ConteinerCards>
        </ Container>
    );
}
