'use client';

import styles from './CopyBtn.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const s = styles;

interface CopyBtnProps {
    toCopy: string;
    color?: string;
    copiedColor?: string;
    className?: string;
}

function CopyBtn({ toCopy, color, className, copiedColor}: CopyBtnProps) {
    const [copied, setCopied] = useState(false);

    function copy() {
        navigator.clipboard.writeText(toCopy);
        setCopied(true);
    }

    return (
        <button className={`${s.btn} ${className || ''}`} onClick={copy} style={{pointerEvents: copied ? 'none' : 'all'}}>
            <div
                style={{
                    background: color,
                    opacity: copied ? 0.1 : 1,
                    pointerEvents: copied ? 'none' : 'all'
                }}
                className={s.copyIcon}
            ></div>
            <div
                style={{
                    background: copiedColor,
                    opacity: copied ? 1 : 0,
                }}
                className={s.copiedIcon}
            ></div>
        </button>
    );
}

export default CopyBtn;