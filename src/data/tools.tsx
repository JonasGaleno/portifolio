import { FaDatabase } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";

export const toolsItems = [
    {
        icon: <FaDatabase size={28} color='#FFF'/>,
        title: "Back-end",
        mainDescription: "Eu gosto de criar APIs e aplicar as melhores práticas na estruturação de dados",
        firstSubtitle: 'Linguagens que domino',
        firtSubtitleDescription: 'PHP, MySQL, PostgreSQL, Python, NodeJs',
        secondSubtitle: 'Ferramentas',
        secondSubtitleDescription: 'Composer, Laravel, Slim Framework, Doctrine, API Rest, API Soap, Linux Scriptcase, PgAdmin, XAMPP',
    },
    {
        icon: <IoTerminal size={28} color='#FFF'/>,
        title: "Front-end",
        mainDescription: "Aprendo cada vez mais com as novas tecnologias e me empolgo em suas ferramentas de estilização",
        firstSubtitle: 'Linguagens que domino',
        firtSubtitleDescription: 'CSS, SCSS, HTML, TypeScript, Javascript',
        secondSubtitle: 'Ferramentas',
        secondSubtitleDescription: 'Bootstrap, ReactJs, React Native, NextJs, Figma',
    },
];
