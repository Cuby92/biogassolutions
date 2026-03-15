import Link from 'next/link';
import styles from './page.module.css';

const s = styles;

function About() {
    return (
        <>
            <div className="content">
                <div id="AboutSection1" className={`cover ${s.section1}`}>
                    <div className="content">
                        <h1 className="hero-header">Kim jesteśmy?</h1>
                        <p className="lead">Specjalizujemy się w projektowaniu, budowie i uruchamianiu instalacji biogazu i biometanu dla sektora rolnictwa i przemysłu - od małych biogazowni rolniczych o mocy kilkudziesięciu kW po duże instalacje przemysłowe o mocy kilku MW. Celem jest efektywne wykorzystanie odpadów organicznych do produkcji energii i paliw odnawialnych w bezpiecznych i automatycznych instalacjach przetwarzania odpadów.</p>
                        <div className="cta"><a className="cta-button" href="#Section3">Skontaktuj się z nami</a></div>
                    </div>
                </div>

                <div className="main-content">
                    <div id="AboutSection2" className={s.section2}>
                        <h2>Jak pracujemy?</h2>
                        <div className={`card ${s.card}`}>
                            <img className={s.icon} src="/img/icons/hand.png" alt="Ikona finansowania" />
                            <p>Wspieramy pozyskanie dofinansowania, przygotowując dokumentację i rozliczenia.</p>
                        </div>
                        <div className={`card ${s.card}`}>
                            <img className={s.icon} src="/img/icons/workflow.png" alt="Ikona przepływu pracy" />
                            <p>Kompleksowo prowadzimy inwestycję: studium wykonalności, projekt, decyzje, budowa, rozruch i wsparcie eksploatacyjne.</p>
                        </div>
                        <div className={`cta ${s.cta}`}><Link className={`cta-button ${styles['cta-button']}`} href="/kontakt">Uzyskaj bezpłatną wstępną wycenę</Link></div>
                    </div>

                    <div id="AboutSection3" className={s.section3}>
                        <h2>Technologia i dobór</h2>

                        <div className={`card ${s.card}`}>
                            <img className={s.icon} src="/img/icons/settings.png" alt="Ikona kół zębatych" />
                            <p>Konfiguracje dobieramy do dostępnych substratów, sezonowości i profilu zapotrzebowania na energię.</p>
                        </div>

                        <div className={`card ${s.card}`}>
                            <img className={s.icon} src="/img/icons/elasticity.png" alt="Ikona elastyczności" />
                            <p>Zapewniamy elastyczność instalacji dzięki zastosowaniu buforów technologicznych, co pozwala dostosować się do zmienności rynku substratów i utrzymać wysoką niezawodność na lata.</p>
                        </div>

                        <div className={`card ${s.card}`}>
                            <img className={s.icon} src="/img/icons/industry-tank.png" alt="Ikona zbiornika" />
                            <p>Stawiamy na materiały najwyższej jakości.</p>
                        </div>
                        <div className={`cta ${s.cta}`}><Link className="cta-button" href="/technologia">Poznaj technologię</Link></div>
                    </div>

                    <div id="AboutSection4" className={s.section4}>
                        <h2>Gdzie działamy?</h2>

                        <div className={`card ${s.card}`}>
                            <img className={s.icon} src="/img/icons/planet-earth.png" alt="Ikona Ziemi" />
                            <p>Działamy w całej Polsce oraz w krajach europejskich; oferujemy konsultacje na miejscu.</p>
                        </div>

                        <div className={`card ${s.card}`}>
                            <img className={s.icon} src="/img/icons/graduate-hat.png" alt="Ikona czapki absolwenta" />
                            <p>Zapewniamy szkolenia, zdalny monitoring 24/7 i serwis zgodnie z zapisami umowy serwisowej (SLA).</p>
                        </div>

                        <div className={`cta ${s.cta}`}><Link className={`cta-button ${styles['cta-button']}`} href="/kontakt">Umów się na bezpłatną konsultację</Link></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;