import icon from '@/app/icon.png';
import Image from 'next/image';
import styles from '@/utils/loading.module.css';

const s = styles;

function Loading() {
    return (
        <div className={s.bg}>
            <div className={s.spinner}></div>
            <div className={s.spinnerBg}></div>

            <Image 
                src={icon} 
                alt="Ładowanie..." 
                width={100} 
                height={100} 
                quality={90} 
                placeholder="blur" 
                className={s.icon} 
            />
        </div>
    );
}

export default Loading;