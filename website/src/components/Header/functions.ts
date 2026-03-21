import styles from './Header.module.css';

type LengthUnit = 'rem' | 'px'

export interface Bar {
    angle: string | number,
    length: {
        value: number,
        unit: LengthUnit,
    }
};

export function completeValue(value: number, unit?: LengthUnit): string {
    return value.toString() + unit;
}

export const s = styles;