'use client';

import Link from 'next/link';
import styles from '@/utils/errors.module.css';
import { useEffect, useState } from 'react';

const s = styles;

function GlobalError() {
    const [codeTransform, setCodeTransform] = useState('rotate(180deg) translateX(20%)');
    const [codeTransition, setCodeTransition] = useState('transform 0.75s ease-out');
    const [codeAnimated, setCodeAnimated] = useState(false);

    const [codeHover, setCodeHover] = useState(false);

    useEffect(() => {
        setCodeTransform('rotate(180deg) translateX(-40%)');

        const timer = setTimeout(() => {
            setCodeTransition('transform 0.5s ease-in-out')
            setCodeAnimated(true);
        }, 750);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (codeHover && codeAnimated) {
            setCodeTransform('rotate(180deg) translateX(-15%)');
        } else if (!codeHover) {
            setCodeTransform('rotate(180deg) translateX(-40%)');
        }
    }, [codeHover, codeAnimated]);

    return (
        <div className={s.Page}>
            <div className={s.ErrorContainer}>
                <h1 
                    className={s.ErrorCode}
                    style={{transform: codeTransform, transition: codeTransition}}
                    onMouseEnter={() => setCodeHover(true)}
                    onMouseLeave={() => setCodeHover(false)}>500</h1>
                <h1 className={s.ErrorTranslation}>Wystąpił błąd serwera</h1>
            </div>
            <div className="cta" style={{color: 'black'}}>Spróbuj ponownie później, lub daj nam znać: biuro@biogassolutions.pl</div>
        </div>
    )
}

export default GlobalError;