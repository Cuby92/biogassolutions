'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Bar, completeValue, s, getBarStyles } from './functions';
import TransitionLink from '@/components/TransitionLink';

function Header() {
    const pathname = usePathname();

    const [hamburgerState, setHamburgerState] = useState(false);
    const [topBar, setTopBar]       = useState<Bar>({
        angle: 0,
        length: {
            value: 2.5,
            unit: 'rem',
        },
        offsetY: {
            value: 0,
            unit: 'rem'
        }
    });
    const [middleBar, setMiddleBar] = useState<Bar>({
        angle: 0,
        length: {
            value: 2.5,
            unit: 'rem'
        },
        offsetY: {
            value: 0,
            unit: 'rem'
        }
    });
    const [bottomBar, setBottomBar] = useState<Bar>({
        angle: 0,
        length: {
            value: 2.5,
            unit: 'rem'
        },
        offsetY: {
            value: 0,
            unit: 'rem'
        }
    });

    function toggleHamburger() {
        setHamburgerState((prev => !prev));
        if (!hamburgerState) {
            setTopBar({
                angle: 45,
                length: {
                    value: 2.5 * Math.sqrt(2),
                    unit: 'rem'
                },
                offsetY: {
                    value: -0.21,
                    unit: 'rem'
                }
            });
            setMiddleBar({
                angle: 0,
                length: {
                    value: 0,
                    unit: 'rem'
                },
                offsetY: {
                    value: 0,
                    unit: 'rem'
                }
            });
            setBottomBar({
                angle: -45,
                length: {
                    value: 2.5 * Math.sqrt(2),
                    unit: 'rem'
                },
                offsetY: {
                    value: 0.21,
                    unit: 'rem'
                }
            });
        } else {
            setTopBar({
                angle: 0,
                length: {
                    value: 2.5,
                    unit: 'rem'
                },
                offsetY: {
                    value: 0,
                    unit: 'rem'
                }

            });
            setMiddleBar({
                angle: 0,
                length: {
                    value: 2.5,
                    unit: 'rem'
                },
                offsetY: {
                    value: 0,
                    unit: 'rem'
                }
            });
            setBottomBar({
                angle: 0,
                length: {
                    value: 2.5,
                    unit: 'rem'
                },
                offsetY: {
                    value: 0,
                    unit: 'rem'
                }
            });
        }
    }

    function handlePageChange() {
        toggleHamburger();
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
                <Link style={{clipPath: hamburgerState ? 'circle(80% at 13% 52%)' : 'circle(150% at 13% 52%)'}} className={s.linkContainer} href="/"><img className={s.logo} src="/img/brand/logo.svg" alt="Biogas Solutions" /></Link>

                <nav className={s.DesktopNavMenu}>
                    <ul className={s.ul}>
                        <li><TransitionLink className={`${s.a} ${pathname === '/o-nas' ? s.active : ''}`} href="/o-nas">O Nas</TransitionLink></li>
                        <li><TransitionLink className={`${s.a} ${pathname === '/oferta' ? s.active : ''}`} href="/oferta">Oferta</TransitionLink></li>
                        <li><TransitionLink className={`${s.a} ${pathname === '/realizacje' ? s.active : ''}`} href="/realizacje">Realizacje</TransitionLink></li>
                        <li><TransitionLink className={`${s.a} ${pathname === '/technologia' ? s.active : ''}`} href="/technologia">Technologia</TransitionLink></li>
                        <li><TransitionLink className={`${s.a} ${pathname === '/faq' ? s.active : ''}`} href="/faq">FAQ</TransitionLink></li>
                        <li><TransitionLink className={`${s.a} ${pathname === '/kontakt' ? s.active : ''}`} href="/kontakt">Kontakt</TransitionLink></li>
                    </ul>
                </nav>

                <button 
                    className={s.hitBox} 
                    onClick={toggleHamburger}
                    style={{display: hamburgerState ? 'block' : 'none'}}></button>

                <button className={s.SidebarToggle} onClick={toggleHamburger}>
                    <div className={s.bar} style={getBarStyles(topBar)}></div>
                    <div className={s.bar} style={getBarStyles(middleBar)}></div>
                    <div className={s.bar} style={getBarStyles(bottomBar)}></div>
                </button>
            </header>

            <nav className={s.SidebarMenu} style={{right: hamburgerState ? 0 : '-251px'}}>
                <ul className={s.ul}>
                    <li className={s.li}><Link onClick={handlePageChange} className={`${s.a} ${pathname === '/' || pathname === 'index' ? s.active : ''}`} href="/">Strona Główna</Link></li>
                    <li className={s.li}><Link onClick={handlePageChange} className={`${s.a} ${pathname === '/o-nas' ? s.active : ''}`} href="/o-nas">O Nas</Link></li>    
                    <li className={s.li}><Link onClick={handlePageChange} className={`${s.a} ${pathname === '/oferta' ? s.active : ''}`} href="/oferta">Oferta</Link></li>
                    <li className={s.li}><Link onClick={handlePageChange} className={`${s.a} ${pathname === '/realizacje' ? s.active : ''}`} href="/realizacje">Realizacje</Link></li>
                    <li className={s.li}><Link onClick={handlePageChange} className={`${s.a} ${pathname === '/technologia' ? s.active : ''}`} href="/technologia">Technologia</Link></li>
                    <li className={s.li}><Link onClick={handlePageChange} className={`${s.a} ${pathname === '/faq' ? s.active : ''}`} href="/faq">FAQ</Link></li>
                    <li className={s.li}><Link onClick={handlePageChange} className={`${s.a} ${pathname === '/kontakt' ? s.active : ''}`} href="/kontakt">Kontakt</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;