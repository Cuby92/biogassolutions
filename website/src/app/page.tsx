'use client';

import Image from "next/image";
import styles from './page.module.css';
import Link from "next/link";
import { useState, useEffect } from 'react';
import fengLogo from '@/../public/img/grants/feng-logo.png';
import nfosigwLogo from '@/../public/img/grants/nfosigw-logo.png';
import edwLogo from '@/../public/img/grants/energia-dla-wsi-logo.png';

const s = styles;
type Point = 1 | 2 | 3 | 4 | 5 | 6;

function Home() {
    const [currentPoint, setCurrentPoint] = useState(1);

    function nextPoint() {
        setCurrentPoint(prev => prev === 6 ? 6 : prev + 1);
    }
    function prevPoint() {
        setCurrentPoint(prev => prev === 1 ? 1 : prev - 1);
    }

    function checkActive(point: Point, returnDifference: boolean = false): boolean | number {
        if (point === currentPoint) {
            return returnDifference ? 0 : true;
        } else {
            return returnDifference ? point - currentPoint : false;
        }
    }

    function addClass(point: Point, carousel: boolean = false): string {
        const diff = checkActive(point, true);
        switch (diff) {
            case -1:
                return carousel ? s.left : '';
            case 0:
                return s.active;
            case 1:
                return carousel ? s.right : '';
            default:
                return '';
        }
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
                </section>

                <section className={s.Section3} id="HomeSection3">
                    <h2>Dlaczego my?</h2>
                    <div className={`gridWrapper ${styles['gridWrapper']}`}>
                        <div className={`card ${s.card}`}>
                            <img className={s.icon} src="/img/icons/workflow.png" alt="Ikona przepływu pracy" />
                            <p className={s.p}>Kompleksowa obsługa "od A do Z" (studium, projekt, decyzje, budowa, rozruch, serwis) i wsparcie pozyskania dotacji.</p>
                        </div>
                        <div className={`card ${s.card}`}>
                            <img className={s.icon} src="/img/icons/technology.png" alt="Ikona technologii" />
                            <p className={s.p}>Zaawansowane systemy procesowe - w zakresie urządzeń i elementów procesowych (w tym procesów higienizacji oraz sterylizacji), zdalnego sterowania oraz instalacji dla funkcjonalności obiektów.</p>
                        </div>
                        <div className={`card ${s.card}`}>
                            <img className={s.icon} src="/img/icons/24-hours-service.png" alt="Ikona obsługa 24/7" />
                            <p className={s.p}>Zdalny monitoring 24/7, szkolenia operatorów i standard reakcji serwisu do 48 h z opcją skrócenia wg umowy.</p>
                        </div>
                        <div className={`card ${s.card}`}>
                            <img className={s.icon} src="/img/icons/shield.png" alt="Ikona tarczy" />
                            <p className={s.p}>Bezpieczeństwo i niezawodność instalacji w zakresie całości obiektów oraz poszczególnych urządzeń i elementów.</p>
                        </div>
                    </div>
                </section>

                <section className={s.Section4} id="HomeSection4">
                    <h2>Proces inwestycyjny</h2>
                    <div className={s.timeline}>
                        <div className={s.line}></div>
                        <div className={s.dots}>
                            <div className={`${s.dot} ${addClass(1)}`} onClick={() => setCurrentPoint(1)}>
                                <Image
                                    src="/img/icons/task-list.png"
                                    alt='Ikona listy zadań'
                                    width={512}
                                    height={512}
                                    quality={100}
                                    className={`${s.icon} ${addClass(1)}`}
                                    onClick={() => setCurrentPoint(1)}
                                />
                            </div>
                            <div className={`${s.dot} ${addClass(2)}`} onClick={() => setCurrentPoint(2)}>
                                <Image
                                    src="/img/icons/hand.png"
                                    alt='Wniosek o dofinansowanie'
                                    width={512}
                                    height={512}
                                    quality={100}
                                    className={`${s.icon} ${addClass(2)}`}
                                    onClick={() => setCurrentPoint(2)}
                                />
                            </div>
                            <div className={`${s.dot} ${addClass(3)}`} onClick={() => setCurrentPoint(3)}>
                                <Image
                                    src="/img/icons/assessment.png"
                                    alt='Ocena wniosku'
                                    width={512}
                                    height={512}
                                    quality={100}
                                    className={`${s.icon} ${addClass(3)}`}
                                    onClick={() => setCurrentPoint(3)}
                                />
                            </div>
                            <div className={`${s.dot} ${addClass(4)}`} onClick={() => setCurrentPoint(4)}>
                                <Image
                                    src="/img/icons/contract.png"
                                    alt='Podpisanie umowy'
                                    width={512}
                                    height={512}
                                    quality={100}
                                    className={`${s.icon} ${addClass(4)}`}
                                    onClick={() => setCurrentPoint(4)}
                                />
                            </div>
                            <div className={`${s.dot} ${addClass(5)}`} onClick={() => setCurrentPoint(5)}>
                                <Image
                                    src="/img/icons/brick-wall.png"
                                    alt='Budowa'
                                    width={512}
                                    height={512}
                                    quality={100}
                                    className={`${s.icon} ${addClass(5)}`}
                                    onClick={() => setCurrentPoint(5)}
                                />
                            </div>
                            <div className={`${s.dot} ${addClass(6)}`} onClick={() => setCurrentPoint(6)}>
                                <Image
                                    src="/img/icons/power-button.png"
                                    alt='Uruchomienie'
                                    width={512}
                                    height={512}
                                    quality={100}
                                    className={`${s.icon} ${addClass(6)}`}
                                    onClick={() => setCurrentPoint(6)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={s.Descriptions}>
                        <div className={`card ${s.card} ${addClass(1, true)}`}>
                            <h3 className={s.h3}>Przygotowanie Projektu</h3>
                            <h4 className={s.h4}>1</h4>
                            <p className={s.p}>Analiza wykonalności, tworzenie dokumentacji formalnej i technicznej, uzyskiwanie warunków zabudowy i przyłączeniowych.</p>
                        </div>

                        <div className={`card ${s.card} ${addClass(2, true)}`}>
                            <h3 className={s.h3}>Złożenie Wniosku o Dofinansowanie</h3>
                            <h4 className={s.h4}>2</h4>
                            <p className={s.p}>Terminowe złożenie wniosku o dofinansowanie jest kluczowe, zwłaszcza dla programów wsparcia.</p>                          
                        </div>                        
                        
                        <div className={`card ${s.card} ${addClass(3, true)}`}>
                            <h3 className={s.h3}>Ocena Wniosku</h3>
                            <h4 className={s.h4}>3</h4>
                            <p className={s.p}>Ocena formalna (kompletność) i merytoryczna (zasadność) projektu.</p>
                        </div>
                            
                        <div className={`card ${s.card} ${addClass(4, true)}`}>
                            <h3 className={s.h3}>Podpisanie Umowy i Wypłata Zaliczki</h3>
                            <h4 className={s.h4}>4</h4>
                            <p className={s.p}>Podpisanie umowy o dofinansowanie, z możliwością wypłaty zaliczki do 95% kosztów, co poprawia płynność finansową.</p>
                        </div>

                        <div className={`card ${s.card} ${addClass(5, true)}`}>
                            <h3 className={s.h3}>Realizacja Budowy</h3>
                            <h4 className={s.h4}>5</h4>
                            <p className={s.p}>Faktyczne prace budowlane, instalacja technologii. Terminowość i jakość wykonania są kluczowe.</p>
                        </div>

                        <div className={`card ${s.card} ${addClass(6, true)}`}>
                            <h3 className={s.h3}>Uruchomienie i Rozliczenie Projektu</h3>
                            <h4 className={s.h4}>6</h4>
                            <p className={s.p}>Faza uruchomienia, testowania i odbiorów, a następnie złożenie końcowej dokumentacji i wypłata pozostałych środków.</p>                            
                        </div>   

                        <button className={`${s.prevBtn} ${addClass(6)}`} onClick={prevPoint} style={{opacity: checkActive(1) ? 0.3 : 1, cursor: checkActive(1) ? 'not-allowed' : 'pointer'}}></button>
                        <button className={`${s.nextBtn} ${addClass(1)}`} onClick={nextPoint} style={{opacity: checkActive(6) ? 0.3 : 1, cursor: checkActive(6) ? 'not-allowed' : 'pointer'}}></button>
                    </div>
                </section>

                <section className={s.Section5} id="HomeSection5">
                    <h2>Finansowanie</h2>
                    <p className={s.p}>Przygotowujemy dokumentację i wnioski oraz wspieramy rozliczenia w programach krajowych i unijnych.</p>

                    <div className={s.grants}>
                        <Image
                            src={fengLogo}
                            alt="Fundusze Europejskie dla Nowoczesnej Gospodarki"
                            width={220}
                            height={64}
                            placeholder="blur"
                            quality={50}
                            className={s.grantLogo}
                        />
                        <Image
                            src={nfosigwLogo}
                            alt="Narodowy Fundusz Ochrony Środowiska i Gospodarki Wodnej"
                            width={1759}
                            height={425}
                            placeholder="blur"
                            quality={50}
                            className={s.grantLogo}
                        />
                        <Image
                            src={edwLogo}
                            alt="Energia Dla Wsi"
                            width={655}
                            height={201}
                            quality={50}
                            placeholder="blur"
                            className={s.grantLogo}
                        />
                    </div>

                    <div className={`cta ${s.cta}`}>
                        <Link className={`cta-button ${styles['cta-button']}`} href="/o-nas">Dowiedz się więcej o nas</Link>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default Home;