import Image from "next/image";
import styles from './page.module.css';
import Link from "next/link";

const s = styles;

function Home() {
    return (
        <section className="content">
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
                    <img className={s.timeline} src="/img/timeline.png" alt="Przebieg procesu inwestycyjnego - oś czasu" />
                </section>

                <section className={s.Section5} id="HomeSection5">
                    <h2>Finansowanie</h2>
                    <p>Przygotowujemy dokumentację i wnioski oraz wspieramy rozliczenia w programach krajowych i unijnych.</p>

                    <div className={s.grants}>
                        <img className={s.grantLogo} src="/img/grants/feng-logo.png"            alt="Fundusze Europejskie dla Nowoczesnej Gospodarki"/>
                        <img className={s.grantLogo} src="/img/grants/nfosigw-logo.png"         alt="Narodowy Fundusz Ochrony Środowiska i Gospodarki Wodnej" />
                        <img className={s.grantLogo} src="/img/grants/energia-dla-wsi-logo.png" alt="Energia Dla Wsi" />
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