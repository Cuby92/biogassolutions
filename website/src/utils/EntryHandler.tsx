'use client';

import { useEffect } from 'react';

function EntryHandler() {

    useEffect(() => {
        setTimeout(() => {
            document.body.classList.remove('pageTransition');
        }, 300);
    }, []);

    return null;
}

export default EntryHandler;