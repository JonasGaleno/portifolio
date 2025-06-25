'use client'

import { ReactElement } from 'react';
import { Container, Separator, SubTitle, DescriptionText, FirstSection, SecondSection, Icon, Title, HeaderSection } from './styles';
import { motion } from 'framer-motion';

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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="group"
        >
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
        </motion.div>
    );
}
