'use client'

import { Container, Apresentation, Summary, AnimatedGif } from './styles';
import background from './../../../public/home-bg.png';
import gif from './../../../public/animacao.gif';
import Button from '@/components/Button';

export default function Home () {
    return (
        <Container id='inicio' $imageurl={background.src}>
            <Apresentation>Olá, eu sou Jonas Galeno</Apresentation>
            <AnimatedGif $gifurl={gif.src} />
            <Summary>Um desenvolvedor web orientado as melhores práticas de programação, construindo sites, API's e realizando integrações que levam sucesso ao produto</Summary>
            <Button title='projetos' path='#projetos' />
        </ Container>
    );
}
