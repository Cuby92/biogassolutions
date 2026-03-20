import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

const s = styles;

function Technology() {
    return (
        <div className="content">
            <div className="bgContainer">
                <Image
                    src="/img/bg/bg3.jpg"
                    alt=''
                    fill={true}
                    quality={80}
                    loading="eager"
                    className="pageBg"
                />
            </div>
            
            <div id="TechnologySection1" className={`cover ${s.cover}`}>
                <div className="content">
                    <h1 className="hero-header">Jak działa nasza technologia?</h1>
                    <p className="lead">Biogaz powstaje z materiałów organicznych w fermentacji beztlenowej, jest oczyszczany i kierowany do jednostki kogeneracyjnej lub układu upgradingu do biometanu. Kluczowe są odpowiednio dobrane zbiorniki stalowe (elastyczność substratowa)  i automatyka pracy.</p>
                    <div className="cta"><a href="#TechnologySection2" className="cta-button">Dowiedz się więcej</a></div>
                </div>
            </div>
            
            <div className={`mainContent ${s.mainContent}`}>
                <div id="TechnologySection2" className={s.Section2}>
                    <Image 
                        src="/img/scheme.png" 
                        alt="Schemat działania biogazowni" 
                        width={1228}
                        height={735}
                        quality={50}
                        className={s.Scheme}
                    />
                </div>

                <div id="TechnologySection3" className={s.Section3}>
                    <h2 className={s.h2}>Substraty i elastyczność</h2>
                    <ul className={s.ul}>
                        <li className={`${s.li} ${s.card} card`}>
                            <Image
                                src="/img/icons/checked.png"
                                alt=''
                                width={512}
                                height={512}
                                className={s.icon}
                            />
                            <p className={s.p}>Technologia dobierana jest do dostępności i sezonowości substratów, aby zapewnić stabilną pracę układu.</p>
                        </li>
                        <li className={`${s.li} ${s.card} card`}>
                            <p className={s.p}>Optymalizujemy mieszankę wsadu dla wysokiego uzysku i stabilności procesu.</p>
                            <Image
                                src="/img/icons/checked.png"
                                alt=''
                                width={512}
                                height={512}
                                className={s.icon}
                            />
                        </li>
                        <li className={`${s.li} ${s.card} card`}>
                            <Image
                                src="/img/icons/checked.png"
                                alt=''
                                width={512}
                                height={512}
                                className={s.icon}
                            />
                            <p className={s.p}>Zapewniamy wieloletnią elastyczność instalacji dzięki zastosowaniu buforów energetycznych, które umożliwiają dostosowanie się do zmienności substratów na rynku odpadów.</p>
                        </li>
                    </ul>
                </div>

                <div id="TechnologySection3" className={`card ${s.card} ${s.Section3}`}>
                    <h2 className={s.h2}>Fermentacja</h2>
                    <ol className={s.ol}>
                        <li className={s.li}>Gnojowica, odpady rolnicze i przetwórstwa oraz kiszonki przetwarzane są do postaci płynnej, która kierowana zostaje do zbiorników fermentacyjnych.</li>
                        <li className={s.li}>W zbiornikach fermentacyjnych materia organiczna pochodząca z opadów zostaje poddana procesom rozkładu beztlenowego (anaerobowym), w wyniku czego powstaje biogaz (tj. mieszanina gazów: metanu (CH4), dwutlenku węgla (CO2), siarkowodoru (H2S), tlenu (O2) oraz pozostałe gazy odpadowe (w niewielkich stężeniach).</li>
                        <li className={s.li}>Wyprodukowany biogaz zostaje zmagazynowany w specjalnych szczelnych zbiornikach gazu (zlokalizowanych nad strefą płynną).</li>
                    </ol>
                </div>

                <div id="Section4" className={`card ${s.card} ${s.Section4}`}>
                    <h2 className={s.h2}>Uzdatnianie biogazu</h2>
                    <ol className={s.ol}>
                        <li className={s.li}>Zmagazynowany surowy biogaz zostaje na bieżąco kierowany do systemu uzdatniania biogazu.</li>
                        <li className={s.li}>Biogaz zostaje oczyszczony ze szkodliwych związków dla urządzeń oraz dalszej części instalacji (siarkowodór (H2S), lotne związki organiczne (LZO/ VOC)).</li>
                        <li className={s.li}>Po uzdatnieniu gaz zasila CHP lub jest kierowany do upgradingu w celu uzyskania biometanu.</li>
                    </ol>
                </div>

                <div id="Section5" className={`card ${s.card} ${s.Section5}`}>
                    <h2 className={s.h2}>Kogeneracja (CHP)</h2>
                    <ul className={s.ul}>
                        <li className={s.li}>Jednoczesna produkcja prądu i ciepła zwiększa efektywność wykorzystania biogazu i stabilizuje koszty energii.</li>
                        <li className={s.li}>Ciepło można wykorzystać w procesach technologicznych lub do ogrzewania obiektów.</li>
                    </ul>
                </div>

                <div id="Section6" className={`card ${s.card} ${s.Section6}`}>
                    <h2 className={s.h2}>Upgrading do biometanu</h2>
                    <ul className={s.ul}>
                        <li className={s.li}>Zastosowanie systemu membranowego, PSA lub absorpcji pozwala uzyskać biometan i zintegrować go z siecią lub systemami bioCNG/bioLNG.</li>
                        <li className={s.li}>Konfigurację dobieramy do parametrów gazu i wymagań operatora sieci.</li>
                    </ul>
                </div>

                <div id="Section7" className={`card ${s.card} ${s.Section7}`}>
                    <h2 className={s.h2}>Automatyka i monitoring</h2>
                    <ul className={s.ul}>
                        <li className={s.li}>Zdalny nadzór 24/7, alarmy i szkolenia operatorów wspierają bezpieczeństwo i dyspozycyjność.</li>
                        <li className={s.li}>Serwis reaguje zgodnie z SLA, standardowo do 24 h.</li>
                    </ul>
                </div>

                <div className="cta"><Link href="/kontakt" className="cta-button">Uzyskaj bezpłatną wstępną wycenę</Link></div>
            </div>
        </div>
    );
}

export default Technology;