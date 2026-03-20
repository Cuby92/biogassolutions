'use client';

import Link from "next/link";
import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const s = styles;

function Header() {
    const pathname = usePathname();

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
    }, []);

    const [headerHidden, setHeaderHidden] = useState(false);

    useEffect(() => {
        let lastScroll = 0;

        function handleScroll() {
            let currentScroll = window.scrollY;

            if (currentScroll > lastScroll && currentScroll > 100) {
                setHeaderHidden(true);
            } else {
                setHeaderHidden(false);
            }

            lastScroll = currentScroll;
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <header id="#header" className={`${s.Header} ${headerHidden ? s.headerHidden : ''}`} style={{width: hamburgerState ? 'calc(100vw - 250px)' : '100vw'}}>
                <Link style={{clipPath: hamburgerState ? 'circle(30% at 13% 52%)' : 'circle(150% at 13% 52%)'}} className={s.linkContainer} href="/"><img className={s.logo} src="/img/brand/logo.svg" alt="Biogas Solutions" /></Link>

                <nav className={s.DesktopNavMenu}>
                    <ul className={s.ul}>
                        <li><Link className={`${s.a} ${pathname === '/o-nas' ? s.active : ''}`} href="/o-nas">O Nas</Link></li>
                        <li><Link className={`${s.a} ${pathname === '/oferta' ? s.active : ''}`} href="/oferta">Oferta</Link></li>
                        <li><Link className={`${s.a} ${pathname === '/realizacje' ? s.active : ''}`} href="/realizacje">Realizacje</Link></li>
                        <li><Link className={`${s.a} ${pathname === '/technologia' ? s.active : ''}`} href="/technologia">Technologia</Link></li>
                        <li><Link className={`${s.a} ${pathname === '/faq' ? s.active : ''}`} href="/faq">FAQ</Link></li>
                        <li><Link className={`${s.a} ${pathname === '/kontakt' ? s.active : ''}`} href="/kontakt">Kontakt</Link></li>
                    </ul>
                </nav>

                <button 
                    className={s.hitBox} 
                    onClick={toggleHamburger}
                    style={{display: hamburgerState ? 'block' : 'none'}}></button>

                <button className={s.SidebarToggle} onClick={toggleHamburger}>
                    <div className={s.bar}></div>
                    <div className={s.bar}></div>
                    <div className={s.bar}></div>
                </button>
            </header>

            <nav className={s.SidebarMenu} style={{right: hamburgerState ? 0 : '-251px'}}>
                <ul className={s.ul}>
                    <li className={s.li}><Link className={`${s.a} ${pathname === '/' || pathname === 'index' ? s.active : ''}`} href="/">Strona Główna</Link></li>
                    <li className={s.li}><Link className={`${s.a} ${pathname === '/o-nas' ? s.active : ''}`} href="/o-nas">O Nas</Link></li>    
                    <li className={s.li}><Link className={`${s.a} ${pathname === '/oferta' ? s.active : ''}`} href="/oferta">Oferta</Link></li>
                    <li className={s.li}><Link className={`${s.a} ${pathname === '/realizacje' ? s.active : ''}`} href="/realizacje">Realizacje</Link></li>
                    <li className={s.li}><Link className={`${s.a} ${pathname === '/technologia' ? s.active : ''}`} href="/technologia">Technologia</Link></li>
                    <li className={s.li}><Link className={`${s.a} ${pathname === '/faq' ? s.active : ''}`} href="/faq">FAQ</Link></li>
                    <li className={s.li}><Link className={`${s.a} ${pathname === '/kontakt' ? s.active : ''}`} href="/kontakt">Kontakt</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;