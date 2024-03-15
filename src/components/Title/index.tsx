'use client'

import { Container, TitleHeading, Separator } from './styles';

interface PropsTitle {
    title: String;
}

export default function Title ({
    title,
    ...rest
}: PropsTitle) {
    return (
        <Container>
            <TitleHeading>{title}</TitleHeading>
            <Separator />
        </ Container>
    );
}
