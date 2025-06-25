'use client'

import Card from '@/components/Card';
import { Container, ConteinerCards, Description } from './styles';
import { FaDatabase } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import Title from '@/components/Title';
import { motion } from 'framer-motion';
import { toolsItems } from '@/data/tools';


export default function About () {
    return (
        <Container id='sobre'>
            <Title title={'Sobre mim'}/>
            <Description>Sou formado em Ciência da Computação pelo Centro Universitário de Brasília e atuo há cerca de 4 anos como Analista de Sistemas e Desenvolvedor Full Stack com foco em PHP. Tenho experiência no desenvolvimento e manutenção de sistemas ERP voltados para diversos segmentos, incluindo a emissão de notas fiscais e aplicações web. Ao longo da minha carreira, venho me especializando na criação e integração de APIs RESTful e possuo sólido domínio em bancos de dados relacionais, sempre buscando soluções eficientes e escaláveis.</Description>
            <ConteinerCards>
                {toolsItems.map((item, key) => (
                    <Card
                        icon={item.icon}
                        title={item.title}
                        mainDescription={item.mainDescription}
                        firstSubtitle={item.firstSubtitle}
                        firtSubtitleDescription={item.firtSubtitleDescription}
                        secondSubtitle={item.secondSubtitle}
                        secondSubtitleDescription={item.secondSubtitleDescription}
                        key={key}
                    />
                ))}
            </ConteinerCards>
        </ Container>
    );
}
