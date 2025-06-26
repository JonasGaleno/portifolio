import { FaCode, FaDatabase, FaTools } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";

export const toolsItems = [
    {
        icon: <FaCode size={28} color='#FFF'/>,
        title: "Linguagens",
        firtSubtitleDescription: 'PHP, Python, JavaScript, NodeJS, Typescript',
    },
    {
        icon: <IoTerminal size={28} color='#FFF'/>,
        title: "Frameworks",
        firtSubtitleDescription: 'Laravel, ReactJS, NextJs, Doctrine, React Native, Docker, PHPUnit',
    },
    {
        icon: <FaTools size={28} color='#FFF'/>,
        title: "Ferramentas",
        firtSubtitleDescription: 'Scriptcase, Figma, Visual Studio Code, Azure, Jira, Git, GitKraken, PHPStorm, DevOps',
    },
    {
        icon: <FaDatabase size={28} color='#FFF'/>,
        title: "Bancos de Dados",
        firtSubtitleDescription: 'MySQL, PostgreSQL, Redis, MongoDB',
    },
];
