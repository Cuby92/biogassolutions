'use client';

import { useEffect } from 'react';

function EntryHandler() {

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


    useEffect(() => {
        delay(300).then(() => {
            document.body.classList.remove('pageTransition');
        });
    }, []);

    return null;
}

export default EntryHandler;