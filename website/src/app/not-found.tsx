'use client';

import Link from 'next/link';
import styles from './not-found.module.css';
import { useEffect, useState } from 'react';

const s = styles;

function NotFound() {
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
                    onMouseLeave={() => setCodeHover(false)}>404</h1>
                <h1 className={s.ErrorTranslation}>Nie znaleziono strony</h1>
            </div>
            <div className="cta"><Link className="cta-button" href="/">Przejdź na Stronę główną</Link></div>
        </div>
    )
}

export default NotFound;