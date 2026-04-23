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
            const h3 = section.querySelectorAll<HTMLElement>('h3');
            const paragraphs = [...section.querySelectorAll<HTMLElement>('.animatedParagraph'), ...section.querySelectorAll<HTMLElement>('.animatedLi')];
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

            if (h2.length > 0 || h3.length > 0) {
                gsap.from([...h2, ...h3], {
                    opacity: 0,
                    filter: 'blur(2px)',
                    webkitFilter: 'blur(2px)',
                    duration: 0.7,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                    },
                    ease: 'power1.in',
                    stagger: 0.2
                });
            }

            if (paragraphs.length > 0) {
                paragraphs.forEach(p => {
                    gsap.from(p, {
                        scrollTrigger: {
                            trigger: p,
                            start: 'bottom 95%',
                            end: 'top 50%',
                            scrub: true
                        },
                        opacity: 0,
                        x: 40,
                        y: 10
                    })
                })
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

export function useTextBlockAnimations(rootRef: React.RefObject<HTMLElement | null>) {
    useGSAP(() => {
        if (typeof window === 'undefined') return;
        if (!rootRef.current) return;

        const ps:  HTMLElement[] = gsap.utils.toArray('p',  rootRef.current);
        const h1s: HTMLElement[] = gsap.utils.toArray('h1', rootRef.current);
        const h2s: HTMLElement[] = gsap.utils.toArray('h2', rootRef.current);
        const lis: HTMLElement[] = gsap.utils.toArray('li', rootRef.current);
        const elements: HTMLElement[] = [...ps, ...h1s, ...h2s, ...lis];
        const headings: HTMLElement[] = [...h1s, ...h2s];

        elements.forEach(element => {
            gsap.from(element, {
                opacity: 0,
                scrollTrigger: {
                    trigger: element,
                    scrub: true,
                    start: 'bottom bottom',
                    end: 'bottom 80%'
                },
                x: 50,
                y: 10,
                ease: 'power3.out'
            });
        });

        headings.forEach(h => {
            gsap.from(h, {
                '--div-width': 0,
                scrollTrigger: {
                    trigger: h,
                    start: 'center 80%',
                    toggleActions: 'play reverse restart reverse'
                },
                duration: 1,
                ease: 'power3.out'
            })
        })
    }, { dependencies: [rootRef] });
}