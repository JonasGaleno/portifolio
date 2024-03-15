'use client'

import { Container, ProjectImageContainer, ProjectImage, ProjectInfo, ProjectDescription, ProjectTitle, ButtonContainer } from './styles';
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
        <Container>
            <ProjectImageContainer $imageurl={conatinerImage}>
                <ProjectImage src={projectImage} alt={altImage} />
            </ProjectImageContainer>
            <ProjectInfo>
                <ProjectTitle>{projectTitle}</ProjectTitle>
                <ProjectDescription>{projectDescription}</ProjectDescription>
                <ButtonContainer>
                    <Button title={buttonTitle} path={projectPath} target='_blank' rel='noopener noreferrer' />
                </ButtonContainer>
            </ProjectInfo>
        </ Container>
    );
}
