import Link from 'next/link';
import styles from './not-found.module.css';

const s = styles;

function NotFound() {
    return (
        <div className={s.Page}>
            <div className={s.ErrorContainer}>
                <h1 className={s.ErrorCode}>404</h1>
                <h1 className={s.ErrorTranslation}>Nie znaleziono strony</h1>
            </div>
            <div className="cta"><Link className="cta-button" href="/">Przejdź na Stronę główną</Link></div>
        </div>
    )
}

export default NotFound;