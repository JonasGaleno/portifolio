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
        <Container
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
            <TitleHeading>
                {title}
            </TitleHeading>
            <Separator />
        </ Container>
    );
}
