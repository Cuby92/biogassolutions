'use client';

import Link from "next/link";
import styles from './Header.module.css';
import { useState, useEffect } from 'react';

const s = styles;

function Header() {
    const [hamburgerState, setHamburgerState] = useState(false);
    function toggleHamburger() {
        setHamburgerState(!hamburgerState);
    }

    function handleResize() {
        if (window.innerWidth >= 950) {
            setHamburgerState(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    return (
        <>
            <header id="#header" className={styles.Header} style={{width: hamburgerState ? 'calc(100vw - 250px)' : '100vw'}}>
                <Link style={{clipPath: hamburgerState ? 'circle(30% at 13% 52%)' : 'circle(150% at 13% 52%)'}} className={s.linkContainer} href="/"><img className={s.logo} src="/img/brand/logo.svg" alt="Biogas Solutions" /></Link>

                <nav className={s.DesktopNavMenu}>
                    <ul className={s.ul}>
                        <li><Link className={s.a} href="/o-nas">O Nas</Link></li>
                        <li><Link className={s.a} href="/oferta">Oferta</Link></li>
                        <li><Link className={s.a} href="/realizacje">Realizacje</Link></li>
                        <li><Link className={s.a} href="/technologia">Technologia</Link></li>
                        <li><Link className={s.a} href="/faq">FAQ</Link></li>
                        <li><Link className={s.a} href="/kontakt">Kontakt</Link></li>
                    </ul>
                </nav>

                <button className={s.SidebarToggle} onClick={toggleHamburger}>
                    <div className={s.bar}></div>
                    <div className={s.bar}></div>
                    <div className={s.bar}></div>
                </button>
            </header>

            <nav className={s.SidebarMenu} style={{right: hamburgerState ? 0 : '-251px'}}>
                <ul className={s.ul}>
                    <li className={s.li}><Link className={s.a} href="/o-nas">O Nas</Link></li>    
                    <li className={s.li}><Link className={s.a} href="/oferta">Oferta</Link></li>
                    <li className={s.li}><Link className={s.a} href="/realizacje">Realizacje</Link></li>
                    <li className={s.li}><Link className={s.a} href="/technologia">Technologia</Link></li>
                    <li className={s.li}><Link className={s.a} href="/faq">FAQ</Link></li>
                    <li className={s.li}><Link className={s.a} href="/kontakt">Kontakt</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;