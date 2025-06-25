'use client'

import { StyledLink } from './styles';
import Link from 'next/link';

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
        <StyledLink
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
        >
            <Link href={path} {...rest}>{title}</Link>
        </StyledLink>
    );
}
