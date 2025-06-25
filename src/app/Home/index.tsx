'use client'

import { Container, Apresentation, Summary, AnimatedGif } from './styles';
import background from './../../../public/home-bg.png';
import gif from './../../../public/animacao.gif';
import Button from '@/components/Button';
import { motion } from 'framer-motion';


export default function Home () {
    return (
        <Container id='inicio' $imageurl={background.src}>
            <Apresentation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                Olá, eu sou Jonas Galeno
            </Apresentation>

            <AnimatedGif
                $gifurl={gif.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
            />
            
            <Summary
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                Um desenvolvedor web orientado as melhores práticas de programação, construindo sites, API's e realizando integrações que levam sucesso ao produto
            </Summary>
            
            <Button title='projetos' path='#projetos' />
        </ Container>
    );
}
