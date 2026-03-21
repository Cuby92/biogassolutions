import styles from './Header.module.css';

type LengthUnit = 'rem' | 'px'

export interface Bar {
    angle: string | number,
    length: {
        value: number,
        unit: LengthUnit,
    },
    offsetY: {
        value: number,
        unit: LengthUnit
    }
};

export function completeValue(value: number, unit?: LengthUnit): string {
    return value.toString() + unit;
}

export const s = styles;

export function getBarStyles(bar: Bar) {
    const angle = bar.angle.toString() + 'deg';
    const length = bar.length.value.toString() + bar.length.unit;
    const offsetY = bar.offsetY.value.toString() + bar.offsetY.unit;
    return {
        transform: `translateY(${offsetY}) rotate(${angle})`,
        width: length
    };
}