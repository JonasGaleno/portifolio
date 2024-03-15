'use client'

import { StyledLink } from './styles';

interface Props {
    title: string;
    path: string;
    target?: string;
    rel?: string;
}

export default function Button ({
    title,
    path,
    ...rest
}: Props) {
    return (
        <StyledLink href={path} {...rest}>{title}</StyledLink>
    );
}
