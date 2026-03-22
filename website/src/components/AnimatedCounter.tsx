'use client';

import { useCounter } from '@/utils/counter';
import { useInView } from 'react-intersection-observer';

interface Text {
    text: string;
    font?: string;
    fontWeight?: number;
    color?: string;
};

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    decimalPlaces?: number;
    className?: string;
    before?: Text;
    after?: Text;
};

function AnimatedCounter({ end, duration, decimalPlaces, className, before, after }: AnimatedCounterProps) {
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
        <div ref={ref} className={className || ''}>

            {before && <span style={{fontFamily: before.font || 'var(--poppins)', fontWeight: before.fontWeight || 100, color: before.color || 'inherit'}}>
                { before.text }
            </span>}

            { counter }

            {after && <span style={{fontFamily: after.font || 'var(--poppins', fontWeight: after.fontWeight || 100, color: after.color || 'inherit'}}>
                { after.text }
            </span>}
            
        </div>
    );
}

export default AnimatedCounter;