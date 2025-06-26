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
    const variants = {
        active: { opacity: 1, transition: { duration: 0.5, delay: 0.7 } },
        hovering: { scale: 1.03 },
        tapping: { scale: 0.98 }
    };

    return (
        <Link href={path} {...rest}>
            <StyledLink
                initial={{ opacity: 0 }}
                variants={variants}
                animate={"active"}
                whileHover={"hovering"}
                whileTap={"tapping"}
            >
                {title}
            </StyledLink>
        </Link>
    );
}
