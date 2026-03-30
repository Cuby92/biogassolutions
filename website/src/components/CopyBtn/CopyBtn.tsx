'use client';

import styles from './CopyBtn.module.css';
import { useState, useEffect } from 'react';

const s = styles;

interface CopyBtnProps {
    toCopy: string;
    color?: string;
    copiedColor?: string;
    className?: string;
    inactive?: string;
    onClick?: () => void;
    label: string;
}

function CopyBtn({ toCopy, color, className, copiedColor, inactive, onClick, label }: CopyBtnProps) {
    const [copied, setCopied] = useState(false);

    function copy() {
        navigator.clipboard.writeText(toCopy);
        setCopied(true);
    }

    useEffect(() => {
        if (inactive === label) {
            setCopied(true);
            setTimeout(() => { setCopied(false); }, 30000);
        } else {
            setCopied(false);
        }
    }, [inactive]);

    return (
        <button className={`${s.btn} ${className || ''}`} onClick={onClick} style={{pointerEvents: copied ? 'none' : 'all'}}>
            <div
                style={{
                    backgroundColor: color || 'black',
                    opacity: copied ? 0.1 : 1,
                }}
                className={s.copyIcon}
            ></div>
            <div
                style={{
                    backgroundColor: copiedColor || 'var(--primary-color)',
                    opacity: copied ? 1 : 0,
                }}
                className={s.copiedIcon}
            ></div>
        </button>
    );
}

export default CopyBtn;