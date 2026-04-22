'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations(rootRef: React.RefObject<HTMLElement | null>) {
    useGSAP(() => {
        if (typeof window === 'undefined') return;
        if (!rootRef.current) return;

        const sections = gsap.utils.toArray<HTMLElement>('.animationSection', rootRef.current);

        sections.forEach(section => {
            const cards = section.querySelectorAll<HTMLElement>('.card');
            const h2 = section.querySelectorAll<HTMLElement>('h2');
            const paragraphs = section.querySelectorAll<HTMLElement>('.animatedParagraph');
            const buttons = Array.from(section.querySelectorAll<HTMLElement>('.cta-button')).filter(btn => !btn.closest('.cover'));

            const heroHeading = section.querySelectorAll<HTMLElement>('h1');
            const lead = section.querySelectorAll<HTMLElement>('.lead');
            const heroCTA = section.querySelectorAll<HTMLElement>('.cover .cta-button');

            if (cards.length > 0) {
                gsap.from(cards, {
                    y: 100,
                    scale: 0.7,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top center',
                    },
                    stagger: 0.2,
                    duration: 1,
                    ease: 'power1.out',
                });
            }

            if (h2.length > 0) {
                gsap.from(h2, {
                    opacity: 0,
                    filter: 'blur(2px)',
                    webkitFilter: 'blur(2px)',
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                    },
                    ease: 'power1.in'
                });
            }

            if (heroHeading.length > 0 && lead.length > 0 && heroCTA.length > 0) {
                gsap.from([heroHeading, lead, heroCTA], {
                    opacity: 0,
                    y: 50,
                    duration: 0.5,
                    delay: 0.5,
                    stagger: 0.3 ,
                });
            }

            if (paragraphs.length > 0) {
                paragraphs.forEach(p => {
                    gsap.from(p, {
                        duration: 1,
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: p,
                            start: 'bottom bottom'
                        },
                        opacity: 0,
                        y: 10,
                        delay: 0.5
                    })
                })
            }

            if (buttons.length > 0) {
                gsap.from(buttons, {
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: buttons[0],
                        start: 'bottom bottom'
                    },
                    opacity: 0,
                    y: 50,
                    delay: 0.5
                })
            }
        });
    }, { dependencies: [rootRef] });
}

export function useImgAnimations(containerRef: React.RefObject<HTMLElement | null>) {
    useGSAP(() => {
        if (typeof window === 'undefined') return;
        if (!containerRef.current) return;

        const imgs = containerRef.current.querySelectorAll('.animatedImg');

        gsap.from(imgs, { 
            duration: 0.5, 
            stagger: 0.3,
            opacity: 0,
            scrollTrigger: {
                trigger: imgs[0],
                start: 'bottom bottom'
            },
            y: 10
        });
    }, { dependencies: [containerRef] });
}