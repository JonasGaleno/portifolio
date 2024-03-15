'use client'

import { ReactElement } from 'react';
import { Container, Separator, SubTitle, DescriptionText, FirstSection, SecondSection, Icon, Title, HeaderSection } from './styles';

interface Props {
    icon: ReactElement;
    title : string;
    mainDescription : string;
    firstSubtitle : string;
    firtSubtitleDescription : string;
    secondSubtitle : string;
    secondSubtitleDescription : string;
}

export default function Card ({
    icon,
    title,
    mainDescription,
    firstSubtitle,
    firtSubtitleDescription,
    secondSubtitle,
    secondSubtitleDescription,
    ...rest
}: Props) {
    return (
        <Container>
            <HeaderSection>
                <Icon>{icon}</Icon>
                <Title>{title}</Title>
                <DescriptionText>{mainDescription}</DescriptionText> 
            </HeaderSection>
            <Separator />
            <FirstSection>
                <SubTitle>{firstSubtitle}:</SubTitle>
                <DescriptionText>{firtSubtitleDescription}</DescriptionText>
            </FirstSection>
            <Separator />
            <SecondSection>
                <SubTitle>{secondSubtitle}:</SubTitle>
                <DescriptionText>{secondSubtitleDescription}</DescriptionText>
            </SecondSection>
        </ Container>
    );
}
