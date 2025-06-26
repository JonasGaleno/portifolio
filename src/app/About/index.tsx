'use client'

import Card from '@/components/Card';
import { Container, ConteinerCards, Description } from './styles';
import Title from '@/components/Title';
import { toolsItems } from '@/data/tools';

export default function About () {
    return (
        <Container id='sobre'>
            <Title title={'Sobre mim'}/>
            <Description
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                Sou formado em Ciência da Computação pelo Centro Universitário de Brasília e atuo há cerca de 4 anos como Analista de Sistemas e Desenvolvedor Full Stack com foco em PHP. Tenho experiência no desenvolvimento e manutenção de sistemas ERP voltados para diversos segmentos, incluindo a emissão de notas fiscais e aplicações web. Ao longo da minha carreira, venho me especializando na criação e integração de APIs RESTful e possuo sólido domínio em bancos de dados relacionais, sempre buscando soluções eficientes e escaláveis.
            </Description>
            <ConteinerCards
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                {toolsItems.map((item, key) => (
                    <Card
                        icon={item.icon}
                        title={item.title}
                        firtSubtitleDescription={item.firtSubtitleDescription}
                        key={key}
                    />
                ))}
            </ConteinerCards>
        </ Container>
    );
}
