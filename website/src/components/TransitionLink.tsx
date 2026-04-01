'use client';

import Link, { LinkProps } from 'next/link';

interface Props extends LinkProps {
    children: React.ReactNode;
}

function TransitionLink({ href, children, ...props }: Props) {
    return (
        <Link href={href} {...props}>
            { children }
        </Link>
    );
}

export default TransitionLink;