'use client';

import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';
import AnimatedCounter from '@/components/AnimatedCounter';
import bg from '@/../public/img/bg/bg2.jpg';
import { useScrollAnimations } from '@/utils/gsap/ScrollAnimations';
import { useRef } from 'react';

const s = styles;

function Realizations() {
    const rootRef = useRef<HTMLDivElement>(null);
    useScrollAnimations(rootRef);

    return (
        <>
            <div className="content" ref={rootRef}>
                <div className="bgContainer">
                    <Image
                        src={bg}
                        alt=''
                        quality={70}
                        loading="eager"
                        placeholder='blur'
                        className="pageBg"
                        data-speed="0.5"
                        width={3888}
                        height={2592}
                    />
                </div>
                
                <div id="RealizationsSection1" className={`cover ${s.cover} animationSection`}>
                    <div className="content">
                        <h1 className="hero-header">Nasze realizacje</h1>
                        <p className="lead">Od kilkunastu lat projektujemy, budujemy i modernizujemy instalacje biogazowe w całej Polsce - od koncepcji i technologii, przez projekt i dokumentację, aż po budowę, rozruch oraz późniejsze zarządzanie eksploatacją.</p>
                        <div className="cta"><a href="#nasze-doswiadczenie" className="cta-button">Dowiedz się więcej</a></div>
                    </div>
                </div>

                <div className={`mainContent ${s.mainContent}`}>
                    <div id="nasze-doswiadczenie" className={`${s.Section2} animationSection`}>
                        <h3>Nasze</h3>
                        <h2 className={s.h2}>Doświadczenie</h2>
                        <ul className={s.ul}>
                            <li className={`card ${s.card} ${s.li}`}>
                                <div className={s.iconContainer}><img src="/img/icons/checked.png" className={s.icon} /></div>
                                <p className={s.p}>Zrealizowaliśmy projekty biogazowni rolniczych i elektrociepłowni biogazowych o mocach od 499 kW do 2 MW, obejmujące technologię, projekt, budowę oraz rozruch technologiczny.</p>
                            </li>
                            <li className={`card ${s.card} ${s.li}`}>
                                <div className={s.iconContainer}><img src="/img/icons/checked.png" className={s.icon} /></div>
                                <p className={s.p}>Opracowaliśmy i wdrożyliśmy rozwiązania dla instalacji składowiskowych o mocy do 1 MW.</p>
                            </li>
                            <li className={`card ${s.card} ${s.li}`}>
                                <div className={s.iconContainer}><img src="/img/icons/checked.png" className={s.icon} /></div>
                                <p className={s.p}>W ramach prowadzonych działań powstały zarówno nowe biogazownie, jak i zrealizowane zostały modernizacje istniejących instalacji.</p>
                            </li>
                        </ul>
                    </div>

                    <div id="RealizationsSection3" className={`${s.Section3} animationSection`}>
                        <h2 className={s.h2}>Wybrane realizacje</h2>
                        <ul className={s.ul}>
                            <li className={`card ${s.card} ${s.li}`}>Budowa i modernizacja biogazowni rolniczych i instalacji kogeneracyjnych o mocach od 499 kW do 1,2 MW (technologia, projekt, budowa, rozruch technologiczny).</li>
                            <li className={`card ${s.card} ${s.li}`}>Projektowanie i budowa instalacji do wytwarzania energii elektrycznej i cieplnej z biogazu, w tym elektrociepłowni i zespołów kogeneracyjnych.</li>
                            <li className={`card ${s.card} ${s.li}`}>Realizacja instalacji OZE zasilanych biogazem składowiskowym do 1 MW, w tym zagospodarowanie terenu i infrastruktury towarzyszącej.</li>
                            <li className={`card ${s.card} ${s.li}`}>Kompleksowe modernizacje istniejących obiektów biogazowych i elektrociepłowni, obejmujące projekt, budowę i uruchomienie technologii.</li>
                        </ul>
                    </div>

                    <div id="RealizationsSection4" className={`${s.Section4} animationSection`}>
                        <h2 className={s.h2}>Efekty</h2>
                        <h3 className={s.h3}>Naszej Pracy</h3>
                        <ul className={s.stats}>
                            <li className={`card ${s.card} ${s.stat}`}>
                                <p className={s.p}>Łączna moc zrealizowanych i zmodernizowanych biogazowni:</p>
                                <div className={s.counterContainer}>
                                    <AnimatedCounter
                                        end={17.2}
                                        after={{text: 'MW', font: 'var(--raleway)'}}
                                        decimalPlaces={1}
                                        className={s.counter}
                                    />
                                </div>
                            </li>

                            <li className={`card ${s.card} ${s.stat}`}>
                                <p className={s.p}>Uzyskana średnioroczna sprawność eksploatowanych instalacji</p>
                                <div className={s.counterContainer}>
                                    <AnimatedCounter
                                        before={{text: '>'}}
                                        end={95}
                                        after={{text: '%', font: 'var(--raleway)'}}
                                        className={s.counter}
                                    />
                                </div>
                                <p className={s.p}>mocy zainstalowanej</p>
                            </li>

                            <div className="cta"><Link href="/technologia" className="cta-button">Poznaj technologię</Link></div>
                        </ul>
                    </div>

                    <div id="RealizationsSection5" className={`${s.Section5} animationSection`}>
                        <h2 className={s.h2}>Galeria Zdjęć<a href="#partner" style={{ color: 'var(--primary-color)' }}>*</a></h2>
                        <div className={s.container}>
                            <div className={s.imgContainer}><Image data-speed="0.9" alt="" src="/img/photos/1.jpg"  className={s.img} width={4080} height={3060} /></div>
                            <div className={s.imgContainer}><Image data-speed="0.95" alt="" src="/img/photos/2.jpg"  className={s.img} width={1536} height={2048} /></div>
                            <div className={s.imgContainer}><Image data-speed="0.9" alt="" src="/img/photos/3.jpg"  className={s.img} width={2048} height={1536} /></div>
                            <div className={s.imgContainer}><Image data-speed="0.95" alt="" src="/img/photos/4.png"  className={s.img} width={640} height={480} /></div>
                            <div className={s.imgContainer}><Image data-speed="0.9" alt="" src="/img/photos/5.jpg"  className={s.img} width={595} height={595} /></div>
                            <div className={s.imgContainer}><Image data-speed="0.95" alt="" src="/img/photos/6.jpg"  className={s.img} width={5312} height={2988} /></div>
                            <div className={s.imgContainer}><Image data-speed="0.9" alt="" src="/img/photos/7.jpg"  className={s.img} width={2448} height={3264} /></div>
                            <div className={s.imgContainer}><Image data-speed="0.95" alt="" src="/img/photos/8.jpg"  className={s.img} width={4000} height={3000} /></div>
                            <div className={s.imgContainer}><Image data-speed="0.9" alt="" src="/img/photos/9.jpg"  className={s.img} width={4080} height={3060} /></div>
                            <div className={s.imgContainer}><Image data-speed="0.95" alt="" src="/img/photos/10.jpg" className={s.img} width={1600} height={1200} /></div>
                            <div className={s.imgContainer}><Image data-speed="0.9" alt="" src="/img/photos/11.jpg" className={s.img} width={1200} height={1600} /></div>
                            <div className={s.imgContainer}><Image data-speed="0.95" alt="" src="/img/photos/12.jpg" className={s.img} width={4080} height={3060} /></div>
                        </div>
                        <div id="partner" className={s.Partner}>
                            <p><span style={{ color: 'var(--primary-color)' }}>*</span>Zdjęcia partnera</p>
                            <a href="https://www.stallkamp.de"><Image src="/img/stallkamp-logo.svg" alt="Stallkamp" width={188.510} height={46.490} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Realizations;