'use client'

import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';
import bg from '@/../public/img/bg/bg3.jpg';
import { useScrollAnimations } from '@/utils/gsap/ScrollAnimations';
import { useRef } from 'react'

const s = styles;

function FAQ() {
    const rootRef = useRef<HTMLDivElement>(null);
    useScrollAnimations(rootRef);

    return (
        <div className="content" ref={rootRef}>
            <div className="bgContainer">
                <Image 
                    src={bg}
                    alt=''
                    quality={70}
                    loading="eager"
                    placeholder="blur"
                    className="pageBg"
                    data-speed="0.5"
                    width={5472}
                    height={3842}
                />
            </div>
            
            <div id="FaqSection1" className={`cover ${s.cover} animationSection`}>
                <div className="content">
                    <h1 className="hero-header">Najczęściej zadawane pytania</h1>
                    <p className="lead">Zebraliśmy odpowiedzi, które porządkują zagadnienia techniczne, formalne i eksploatacyjne, aby przyspieszyć decyzję inwestycyjną. Sekcja obejmuje kwestie mocy, procesu, serwisu, wsadu i finansowania.</p>
                    <Link href="/kontakt" className="cta-button">Skontaktuj się z nami</Link>
                </div>
            </div>

            <div className={`mainContent ${s.mainContent} animationSection`}>
                <h2 className={s.h2}>FAQ</h2>
                <h3 className={s.h3}>Najczęściej Zadawane Pytania</h3>
                <div id="FaqSection2" className={s.Section2}>
                    <div className={`card ${s.card}`}>
                        <details className={s.dropdown}>
                            <summary className={s.question}>Dla kogo są instalacje i jaki jest zakres mocy [50 kWe-{'>'}500 kWe+]?</summary>
                            <p className={s.answer}>- Oferujemy mikro do 50 kWe, średnie 50-499 kWe oraz większe moce, a także projekty z upgradingiem do biometanu tam, gdzie jest to technicznie i ekonomicznie uzasadnione. </p>
                        </details>
                    </div>

                    <div className={`card ${s.card}`}>
                        <details className={s.dropdown}>
                            <summary className={s.question}>Jakie są typowe substraty i jak je dobrać?</summary>
                            <p className={s.answer}>- Najczęściej gnojowica, odpady rolnicze i przetwórstwa oraz kiszonki; technologia dobierana jest do dostępności i sezonowości wsadu.</p>
                        </details>
                    </div>

                    <div className={`card ${s.card}`}>
                        <details className={s.dropdown}>
                            <summary className={s.question}>Czy 50 kWe można skalować modułowo?</summary>
                            <p className={s.answer}>- Technicznie tak, ale zwykle bardziej opłacalne jest przejście do wyższej klasy mocy; jednostka może pracować w elastycznym zakresie.</p>
                        </details>
                    </div>

                    <div className={`card ${s.card}`}>
                        <details className={s.dropdown}>
                            <summary className={s.question}>Co oznacza realizacja "pod klucz"?</summary>
                            <p className={s.answer}>- Kompletny zakres - przyłącza, fundamenty, instalacje technologiczne, automatyka, rozruch technologiczny, odbiory i przekazanie do eksploatacji.</p>
                        </details>
                    </div>

                    <div className={`card ${s.card}`}>
                        <details className={s.dropdown}>
                            <summary>Jaki jest typowy harmonogram i czas realizacji?</summary>
                            <p>- Decyzja 3-6 miesięcy w zależności od formalności, realizacja 4-6 miesięcy od zamówień i gotowości terenu.</p>
                        </details>
                    </div>

                    <div className={`card ${s.card}`}>
                        <details className={s.dropdown}>
                            <summary className={s.question}>Jak działa serwis i monitoring?</summary>
                            <p className={s.answer}>- Zdalny nadzór 24/7, szkolenia operatorów i standardowa reakcja do 48 h z możliwością skrócenia zgodnie z umową.</p>
                        </details>
                    </div>

                    <div className={`card ${s.card}`}>
                        <details className={s.dropdown}>
                            <summary className={s.question}>Czy pomagacie w finansowaniu i dokumentach?</summary>
                            <p className={s.answer}>- Tak - dobór programu (np. NFOŚiGW, FENG, Energia dla Wsi), przygotowanie wniosków i rozliczeń, wraz z załącznikami technicznymi.</p>
                        </details>
                    </div>

                    <div className={`card ${s.card}`}>
                        <details className={s.dropdown}>
                            <summary className={s.question}>Z czego składa się "technologia" w praktyce?</summary>
                            <p className={s.answer}>- Fermentacja beztlenowa, uzdatnianie biogazu, kogeneracja (CHP) lub upgrading do biometanu, automatyka i zbiorniki stalowe umożliwiające przyszłościową rozbudowę. (<a href="/technologia.html">Więcej informacji</a>)</p>
                        </details>
                    </div>
                    <h4 style={{marginBottom: '-60px', marginTop: '32px'}}>Więcej pytań?</h4>
                    <div className="cta"><Link href="/kontakt" className="cta-button">Umów się na bezpłatną konsultację</Link></div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;