import monitor from './../../public/monitor-design.png';
import organoLol from './../../public/organo-lol.png';
import listController from './../../public/list-controller.png';

export const projectsItems = [
    {
        conatinerImage: monitor.src,
        projectImage: organoLol.src,
        altImage: 'organo-lol',
        projectTitle: 'Organo LOL',
        projectDescription: 'Organo LOL é um organograma de league of legens (um jogo) a qual podemos criar e incluir personagens dentro das respectivas funções. Estudo da ferramenta Front-end ReactJS.',
        buttonTitle: 'Acessar',
        projectPath: 'https://organo-lol-ten.vercel.app/',
    },
    {
        conatinerImage: monitor.src,
        projectImage: listController.src,
        altImage: 'list-controller',
        projectTitle: 'ListController',
        projectDescription: 'ListController é um projeto com mais foco na estrutura Back-end. Seu objetivo é gerenciar listas de itens por categorias, em resumo temos o controle de login e o gerenciamento de listas por usuários.',
        buttonTitle: 'Acessar',
        projectPath: 'https://github.com/JonasGaleno/ListController',
    },
];
