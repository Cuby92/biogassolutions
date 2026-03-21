'use client';

import { useCounter } from '@/utils/counter';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    decimalPlaces?: number
    className?: string
};

function AnimatedCounter({ end, duration, decimalPlaces, className }: AnimatedCounterProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    const counter = useCounter({
        end: inView ? end : 0, 
        duration, 
        decimalPlaces
    });

    return (
        <div ref={ref} className={className || ''}>{ counter }</div>
    );
}

export default AnimatedCounter;