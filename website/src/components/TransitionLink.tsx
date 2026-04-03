'use client';

import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

function TransitionLink({ href, children, className, ...props }: Props) {
    const router = useRouter();

    return (
        <Link 
            href={href}
            className={className}
            {...props}
            onClick={e => {
                e.preventDefault();
                document.body.classList.add('pageTransition');
                setTimeout(() => {
                    router.push(href);
                    setTimeout(() => {
                        document.body.classList.remove('pageTransition');
                    }, 300);
                }, 300);
            }}
        >
            { children }
        </Link>
    );
}

export default TransitionLink;