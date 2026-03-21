'use client';

import { useCounter } from '@/utils/counter';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    decimalPlaces?: number
};

function AnimatedCounter({ end, duration, decimalPlaces }: AnimatedCounterProps) {
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
        <div>{ counter }</div>
    );
}

export default AnimatedCounter;