'use client';

import Image from "next/image";
import styles from './page.module.css';
import Link from "next/link";
import { useState, useEffect } from 'react';

const s = styles;
interface TimelineStyles {
    dot?: {
        color?: string;
        scale?: string | number;
    };
    icon?: {
        color?: string;
        scale?: string | number;
    }
}

function Home() {
    const [currentPoint, setCurrentPoint] = useState(1);

    function nextPoint() {
        setCurrentPoint(prev => prev === 6 ? 1 : prev++);
    }
    function prevPoint() {
        setCurrentPoint(prev => prev === 1 ? 6 : prev--);
    }

    return (
        <section className="content">
            <div className="bgContainer">
                <Image
                    src='/img/bg/bg1.jpg'
                    alt=''
                    fill={true}
                    quality={80}
                    loading="eager"
                    className="pageBg"
                />
            </div>
            
            <section className={`cover ${s.Section1}`} id="HomeSection1">
                <div className="content">
                    <h1 className="hero-header">Tańsza energia i ciepło z własnych odpadów - instalacje biogazu</h1>
                    <p className="lead">Wykorzystujemy lokalne odpady organiczne, aby bezpiecznie wytwarzać prąd i ciepło w kogeneracji - od koncepcji i pozwoleń po rozruch i serwis. Zapewniamy wsparcie w dofinansowaniu oraz zdalny monitoring 24/7 i szybką reakcję serwisu zgodnie z umową.</p>
                    <div className="cta"><Link className="cta-button" href="/kontakt">Uzyskaj bezpłatną wstępną wycenę</Link></div>
                </div>
            </section>

            <section className="mainContent">
                <section className={s.Section2} id="HomeSection2">
                    <h2>Co robimy?</h2>
                    <div className={`card ${s.column} ${s.card}`}>
                        <img className={s.icon} src="/img/icons/biogas.png" alt="Ikona biogazowni" />
                        <p className={s.p}>Mikrobiogazownie do 50 kW</p>
                    </div>
                    <div className={`card ${s.column} ${s.card}`}>
                        <img className={s.icon} src="/img/icons/power-plant.png" alt="Ikona dużej biogazowni" />
                        <p className={s.p}>Biogazownie 50-499 kW i {'>'}500 kW</p> 
                    </div>
                    <div className={`card ${s.column} ${s.card}`}    >
                        <img className={s.icon} src="/img/icons/methane.png" alt="Ikona metanu" />
                        <p className={s.p}>Biometanownie</p>  
                    </div>
                    <div className={`cta ${s.cta}`}>
                        <Link href="/oferta" className={`cta-button ${styles['cta-button']}`}>Poznaj naszą ofertę</Link>
                    </div>
                </section>

                <section className={s.Section3} id="HomeSection3">
                    <h2>Dlaczego my?</h2>
                    <div className={`gridWrapper ${styles['gridWrapper']}`}>
                        <div className={`card ${s.card}`}>
                            <img className={s.icon} src="/img/icons/workflow.png" alt="Ikona przepływu pracy" />
                            <p>Kompleksowa obsługa "od A do Z" (studium, projekt, decyzje, budowa, rozruch, serwis) i wsparcie pozyskania dotacji.</p>
                        </div>
                        <div className={`card ${s.card}`}>
                            <img className={s.icon} src="/img/icons/technology.png" alt="Ikona technologii" />
                            <p>Zaawansowane systemy procesowe - w zakresie urządzeń i elementów procesowych (w tym procesów higienizacji oraz sterylizacji), zdalnego sterowania oraz instalacji dla funkcjonalności obiektów.</p>
                        </div>
                        <div className={`card ${s.card}`}>
                            <img className={s.icon} src="/img/icons/24-hours-service.png" alt="Ikona obsługa 24/7" />
                            <p>Zdalny monitoring 24/7, szkolenia operatorów i standard reakcji serwisu do 48 h z opcją skrócenia wg umowy.</p>
                        </div>
                        <div className={`card ${s.card}`}>
                            <img className={s.icon} src="/img/icons/shield.png" alt="Ikona tarczy" />
                            <p>Bezpieczeństwo i niezawodność instalacji w zakresie całości obiektów oraz poszczególnych urządzeń i elementów.</p>
                        </div>
                    </div>
                    <div className={`cta ${s.cta}`}>
                        <Link className={`cta-button ${styles['cta-button']}`} href="/o-nas">Dowiedz się więcej</Link>
                    </div>
                </section>

                <section className={s.Section4} id="HomeSection4">
                    <h2>Proces inwestycyjny</h2>
                    <div className={s.timeline}>
                        <div className={s.line}></div>
                        <div className={s.dots}>
                            <div className={`${s.dot} ${currentPoint === 1 ? s.active : ''}`} onClick={() => setCurrentPoint(1)}>
                                <Image
                                    src="/img/icons/task-list.png"
                                    alt='Ikona'
                                    width={512}
                                    height={512}
                                    quality={100}
                                    className={`${s.icon} ${currentPoint === 1 ? s.active : ''}`}
                                    onClick={() => setCurrentPoint(1)}
                                />
                            </div>
                            <div className={`${s.dot} ${currentPoint === 2 ? s.active : ''}`} onClick={() => setCurrentPoint(2)}>
                                <Image
                                    src="/img/icons/hand.png"
                                    alt='Ikona'
                                    width={512}
                                    height={512}
                                    quality={100}
                                    className={`${s.icon} ${currentPoint === 2 ? s.active : ''}`}
                                    onClick={() => setCurrentPoint(2)}
                                />
                            </div>
                            <div className={`${s.dot} ${currentPoint === 3 ? s.active : ''}`} onClick={() => setCurrentPoint(3)}>
                                <Image
                                    src="/img/icons/assessment.png"
                                    alt='Ikona'
                                    width={512}
                                    height={512}
                                    quality={100}
                                    className={`${s.icon} ${currentPoint === 3 ? s.active : ''}`}
                                    onClick={() => setCurrentPoint(3)}
                                />
                            </div>
                            <div className={`${s.dot} ${currentPoint === 4 ? s.active : ''}`} onClick={() => setCurrentPoint(4)}>
                                <Image
                                    src="/img/icons/contract.png"
                                    alt='Ikona'
                                    width={512}
                                    height={512}
                                    quality={100}
                                    className={`${s.icon} ${currentPoint === 4 ? s.active : ''}`}
                                    onClick={() => setCurrentPoint(4)}
                                />
                            </div>
                            <div className={`${s.dot} ${currentPoint === 5 ? s.active : ''}`} onClick={() => setCurrentPoint(5)}>
                                <Image
                                    src="/img/icons/brick-wall.png"
                                    alt='Ikona'
                                    width={512}
                                    height={512}
                                    quality={100}
                                    className={`${s.icon} ${currentPoint === 5 ? s.active : ''}`}
                                    onClick={() => setCurrentPoint(5)}
                                />
                            </div>
                            <div className={`${s.dot} ${currentPoint === 6 ? s.active : ''}`} onClick={() => setCurrentPoint(6)}>
                                <Image
                                    src="/img/icons/power-button.png"
                                    alt='Ikona'
                                    width={512}
                                    height={512}
                                    quality={100}
                                    className={`${s.icon} ${currentPoint === 6 ? s.active : ''}`}
                                    onClick={() => setCurrentPoint(6)}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className={s.Section5} id="HomeSection5">
                    <h2>Finansowanie</h2>
                    <p style={{width: '100%', textAlign: 'center'}}>Przygotowujemy dokumentację i wnioski oraz wspieramy rozliczenia w programach krajowych i unijnych.</p>

                    <div className={s.grants}>
                        <Image
                            src="/img/grants/feng-logo.png"
                            alt="Fundusze Europejskie dla Nowoczesnej Gospodarki"
                            width={220}
                            height={64}
                            className={s.grantLogo}
                        />
                        <Image
                            src="/img/grants/nfosigw-logo.png"
                            alt="Narodowy Fundusz Ochrony Środowiska i Gospodarki Wodnej"
                            width={1759}
                            height={425}
                            className={s.grantLogo}
                        />
                        <Image
                            src="/img/grants/energia-dla-wsi-logo.png"
                            alt="Energia Dla Wsi"
                            width={655}
                            height={201}
                            className={s.grantLogo}
                        />
                    </div>

                    <div className={`cta ${s.cta}`}>
                        <Link className={`cta-button ${styles['cta-button']}`} href="/kontakt">Uzyskaj darmową wstępną wycenę</Link>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default Home;