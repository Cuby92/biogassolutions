'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function useCardScrollAnimation(rootRef: React.RefObject<HTMLElement | null>) {
    useGSAP(() => {
        if (typeof window === 'undefined') return;
        if (!rootRef.current) return;

        const sections = gsap.utils.toArray<HTMLElement>('.animationSection', rootRef.current);
        sections.forEach(section => {
            const cards = section.querySelectorAll<HTMLElement>('.card');
            gsap.set(cards, { opacity: 0, y: 100, scale: 0.8 });
            gsap.to(cards, {
                y: 0,
                scale: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top center',
                },
                stagger: 0.3,
                duration: 1,
                ease: 'power1.out',
            });
        });
    }, { dependencies: [rootRef] });
}