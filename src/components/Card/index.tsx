'use client'

import { ReactElement } from 'react';
import { Container, Separator, SubTitle, DescriptionText, FirstSection, SecondSection, Icon, Title, HeaderSection } from './styles';

interface Props {
    icon: ReactElement;
    title : string;
    firtSubtitleDescription : string;
}

export default function Card ({
    icon,
    title,
    firtSubtitleDescription,
    ...rest
}: Props) {
    return (
        <Container
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
        >
            <HeaderSection>
                <Icon>{icon}</Icon>
                <Title>{title}</Title>
            </HeaderSection>
            <Separator />
            <FirstSection>
                <DescriptionText>{firtSubtitleDescription}</DescriptionText>
            </FirstSection>
        </ Container>
    );
}
