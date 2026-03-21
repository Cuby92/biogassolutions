import { useState, useEffect, useRef } from 'react';

interface UseCounterProps {
    end: number;
    duration?: number,
    decimalPlaces?: number
};

function ease(x: number): number {
return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

export const useCounter = ({ end, decimalPlaces = 0, duration = 4000 }: UseCounterProps) => {
    const [counter, setCounter] = useState<number | string>(0);

    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        let startTime: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration! , 1);
            const eased = ease(progress);
            const current = (end * eased).toFixed(decimalPlaces);
            setCounter(current);

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            }
        }

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [duration, end, decimalPlaces]);
    
    return counter;
}
