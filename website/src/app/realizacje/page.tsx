'use client';

import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';
import AnimatedCounter from '@/components/AnimatedCounter';
import bg from '@/../public/img/bg/bg2.jpg';

const s = styles;

function Realizations() {
    return (
        <>
            <div className="content">
                <div className="bgContainer">
                    <Image
                        src={bg}
                        alt=''
                        fill={true}
                        quality={70}
                        loading="eager"
                        placeholder='blur'
                        className="pageBg"
                    />
                </div>
                
                <div id="RealizationsSection1" className={`cover ${s.cover}`}>
                    <div className="content">
                        <h1 className="hero-header">Nasze realizacje</h1>
                        <p className="lead">Od kilkunastu lat projektujemy, budujemy i modernizujemy instalacje biogazowe w całej Polsce - od koncepcji i technologii, przez projekt i dokumentację, aż po budowę, rozruch oraz późniejsze zarządzanie eksploatacją.</p>
                        <div className="cta"><a href="#Section2" className="cta-button">Dowiedz się więcej</a></div>
                    </div>
                </div>

                <div className={`mainContent ${s.mainContent}`}>
                    <div id="RealizationsSection2" className={s.Section2}>
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

                    <div id="RealizationsSection3" className={s.Section3}>
                        <h2 className={s.h2}>Wybrane realizacje</h2>
                        <ul className={s.ul}>
                            <li className={`card ${s.card} ${s.li}`}>Budowa i modernizacja biogazowni rolniczych i instalacji kogeneracyjnych o mocach od 499 kW do 1,2 MW (technologia, projekt, budowa, rozruch technologiczny).</li>
                            <li className={`card ${s.card} ${s.li}`}>Projektowanie i budowa instalacji do wytwarzania energii elektrycznej i cieplnej z biogazu, w tym elektrociepłowni i zespołów kogeneracyjnych.</li>
                            <li className={`card ${s.card} ${s.li}`}>Realizacja instalacji OZE zasilanych biogazem składowiskowym do 1 MW, w tym zagospodarowanie terenu i infrastruktury towarzyszącej.</li>
                            <li className={`card ${s.card} ${s.li}`}>Kompleksowe modernizacje istniejących obiektów biogazowych i elektrociepłowni, obejmujące projekt, budowę i uruchomienie technologii.</li>
                        </ul>
                    </div>

                    <div id="RealizationsSection4" className={s.Section4}>
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
                        </ul>
                    </div>

                    <div id="RealizationsSection5" className={s.Section5} style={{display: 'none'}}>
                        <h2 className={s.h2}>Etapy budowy biogazowni</h2>
                        <div className="img landscape-only"><img src="/img/build-stages/stages.png" alt="Trzy etapy realizacji biogazowni: Etap I Planowanie (weryfikacja prawna, warunki zabudowy, analizy, projekt i pozwolenia); Etap II Budowanie (budowa, dostawy i montaż, instalacje pomocnicze); Etap III Uruchomienie (rozruch, odbiory i legalizacja, szkolenia, monitoring i serwis 24/7)." /></div>
                        <div className="portrait-only">
                            <div className="img"><img src="/img/build-stages/stage1.png" alt="Etap I Planowanie (weryfikacja prawna, warunki zabudowy, analizy, projekt i pozwolenia)"/></div>
                            <div className="img"><img src="/img/build-stages/stage2.png" alt="Etap II Budowanie (budowa, dostawy i montaż, instalacje pomocnicze)"/></div>
                            <div className="img"><img src="/img/build-stages/stage3.png" alt="Etap III Uruchomienie (rozruch, odbiory i legalizacja, szkolenia, monitoring i serwis 24/7)"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Realizations;