'use client'

import { Container, Apresentation, Summary, AnimatedGif } from './styles';
import background from './../../../public/home-bg.png';
import gif from './../../../public/animacao.gif';
import Button from '@/components/Button';

export default function Home () {
    return (
        <Container id='inicio' $imageurl={background.src}>
            <Apresentation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                Olá, eu sou Jonas Galeno
            </Apresentation>

            <AnimatedGif
                $gifurl={gif.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
            />
            
            <Summary
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                Desenvolvedor Full Stack focado em boas práticas, criando sites, sistemas, APIs e integrações que impulsionam o sucesso dos produtos.
            </Summary>
            
            <Button title='projetos' path='#projetos' />
        </ Container>
    );
}
