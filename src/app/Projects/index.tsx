'use client'

import Title from '@/components/Title';
import { Container, Description } from './styles';
import Project from '@/components/Project';
import monitor from './../../../public/monitor-design.png';
import organoLol from './../../../public/organo-lol.png';
import listController from './../../../public/list-controller.png';

export default function Projects () {
    return (
        <Container id='projetos'>
            <Title title={'Projetos'}/>
            <Description>Aqui você encontrará alguns dos meus projetos pessoais, temos uma referencia com a imagem de cada um e ao lado uma breve descrição da ideia e produto. Por fim, temos o link de acesso direto ao produto caso tenha interesse em acessar.</Description>
            <Project
                conatinerImage={monitor.src}
                projectImage={organoLol.src}
                altImage='organo-lol'
                projectTitle='Organo LOL'
                projectDescription='Organo LOL é um organograma de league of legens (um jogo) a qual podemos criar e incluir personagens dentro das respectivas funções do jogo. Projeto criado com a finalidade de estudar e aprimorar o uso da biblioteca ReactJS.'
                buttonTitle='Acessar'
                projectPath='https://organo-lol-ten.vercel.app/'
            />
            <Project
                conatinerImage={monitor.src}
                projectImage={listController.src}
                altImage='list-controller'
                projectTitle='ListController'
                projectDescription='ListController é um projeto com mais foco no back end e nas funcionalidades. A aplicação web serve para gerenciar listas ou itens de categorias diversas, em resumo cadastramos algumas categorias e dentro delas montamos itens relacionados. Além disso, temos o controle de login, então as listas e categorias são separadas por usuários.'
                buttonTitle='Acessar'
                projectPath='https://github.com/JonasGaleno/ListController'
            />
        </ Container>
    );
}
