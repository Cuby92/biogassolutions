'use client';

import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

interface Props extends LinkProps {
    children: React.ReactNode;
    href: string;
}

function TransitionLink({ href, children, ...props }: Props) {
    const router = useRouter();

    return (
        <Link 
            href={href}
            {...props}
            onClick={e => {
                e.preventDefault();
                router.push(href);
            }}
        >
            { children }
        </Link>
    );
}

export default TransitionLink;