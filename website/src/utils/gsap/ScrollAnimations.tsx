'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function ScrollAnimationsWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            { children }
        </>
    );
}

export default ScrollAnimationsWrapper;