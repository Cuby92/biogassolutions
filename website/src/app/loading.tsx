import styles from '@/utils/loading.module.css';

const s = styles;

function Loading() {
    return (
        <div className={s.bg}>
            <h4 className={s.text}>Ładowanie...</h4>
        </div>
    );
}

export default Loading;