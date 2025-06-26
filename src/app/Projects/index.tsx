'use client'

import Title from '@/components/Title';
import { Container, Description } from './styles';
import Project from '@/components/Project';
import { projectsItems } from '@/data/projects';

export default function Projects () {
    return (
        <Container id='projetos'>
            <Title title={'Projetos'}/>
            <Description
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                Aqui você encontrará alguns dos meus projetos pessoais, temos uma referencia com a imagem de cada um e ao lado uma breve descrição da ideia e produto. Por fim, temos o link de acesso direto ao produto caso tenha interesse em acessar.
            </Description>

            {projectsItems.map((item, key) => (
                <Project
                    conatinerImage={item.conatinerImage}
                    projectImage={item.projectImage}
                    altImage={item.altImage}
                    projectTitle={item.projectTitle}
                    projectDescription={item.projectDescription}
                    buttonTitle={item.buttonTitle}
                    projectPath={item.projectPath}
                    key={key}
                />
            ))}
        </ Container>
    );
}
