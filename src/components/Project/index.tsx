'use client'

import { Container, ProjectImageContainer, ProjectImage, ProjectInfo, ProjectDescription, ProjectTitle, ButtonContainer, Separator } from './styles';
import Button from '@/components/Button';

interface Props {
    conatinerImage: string;
    projectImage: string;
    altImage: string;
    projectTitle: string;
    projectDescription: string;
    buttonTitle: string;
    projectPath: string;
}

export default function Project ({
    conatinerImage,
    projectImage,
    altImage,
    projectTitle,
    projectDescription,
    buttonTitle,
    projectPath,
    ...rest
}: Props) {
    return (
        <Container
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
            <ProjectImageContainer 
                $imageurl={conatinerImage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
            >
                <ProjectImage src={projectImage} alt={altImage} />
            </ProjectImageContainer>
            <ProjectInfo
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
            >
                <ProjectTitle>{projectTitle}</ProjectTitle>
                <Separator />
                <ProjectDescription>{projectDescription}</ProjectDescription>
                <Separator />
                <ButtonContainer>
                    <Button title={buttonTitle} path={projectPath} target='_blank' rel='noopener noreferrer' />
                </ButtonContainer>
            </ProjectInfo>
        </ Container>
    );
}
