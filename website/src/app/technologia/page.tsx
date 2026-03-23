import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';
import bg from '@/../public/img/bg/bg3.jpg';
import scheme from '@/../public/img/scheme.png';

const s = styles;

function Technology() {
    return (
        <div className="content">
            <div className="bgContainer">
                <Image
                    src={bg}
                    alt=''
                    fill={true}
                    quality={70}
                    loading="eager"
                    placeholder="blur"
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
                        src={scheme}
                        alt="Schemat działania biogazowni" 
                        width={1228}
                        height={735}
                        quality={50}
                        placeholder='blur'
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
                            <Image
                                src="/img/icons/checked.png"
                                alt=''
                                width={512}
                                height={512}
                                className={s.icon}
                            />
                            <p className={s.p}>Optymalizujemy mieszankę wsadu dla wysokiego uzysku i stabilności procesu.</p>
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

                <div id="TechnologySection4" className={s.Section4}>
                    <h2 className={s.h2}>Fermentacja</h2>
                    <ol className={s.ol}>
                        <li className={`${s.li} card ${s.card}`}>
                            <span className={s.num}>1</span>
                            <p>Gnojowica, odpady rolnicze i przetwórstwa oraz kiszonki przetwarzane są do postaci płynnej, która kierowana zostaje do zbiorników fermentacyjnych.</p>
                        </li>
                        <li className={`${s.li} card ${s.card}`}>
                            <span className={s.num}>2</span>
                            <p>W zbiornikach fermentacyjnych materia organiczna pochodząca z opadów zostaje poddana procesom rozkładu beztlenowego (anaerobowym), w wyniku czego powstaje biogaz (tj. mieszanina gazów: metanu (CH4), dwutlenku węgla (CO2), siarkowodoru (H2S), tlenu (O2) oraz pozostałe gazy odpadowe (w niewielkich stężeniach).</p>
                        </li>
                        <li className={`${s.li} card ${s.card}`}>
                            <span className={s.num}>3</span>
                            <p>Wyprodukowany biogaz zostaje zmagazynowany w specjalnych szczelnych zbiornikach gazu (zlokalizowanych nad strefą płynną).</p>
                        </li>
                    </ol>
                </div>

                <div id="TechnologySection5" className={s.Section5}>
                    <h2 className={s.h2}>Uzdatnianie biogazu</h2>
                    <ol className={s.ol}>
                        <li className={`card ${s.card} ${s.li}`}>
                            <span className={s.num}>1</span>
                            <p className={s.p}>Zmagazynowany surowy biogaz zostaje na bieżąco kierowany do systemu uzdatniania biogazu.</p>
                        </li>
                        <li className={`card ${s.card} ${s.li}`}>
                            <span className={s.num}>2</span>
                            <p className={s.p}>Biogaz zostaje oczyszczony ze szkodliwych związków dla urządzeń oraz dalszej części instalacji (siarkowodór (H2S), lotne związki organiczne (LZO/ VOC)).</p>
                        </li>
                        <li className={`card ${s.card} ${s.li}`}>
                            <span className={s.num}>3</span>
                            <p className={s.p}>Po uzdatnieniu gaz zasila CHP lub jest kierowany do upgradingu w celu uzyskania biometanu.</p>
                        </li>
                    </ol>
                </div>

                <div id="TechnologySection6" className={s.Section6}>
                    <h2 className={s.h2}>Kogeneracja (CHP)</h2>
                    <ul className={s.ul}>
                        <li className={`${s.li} card ${s.card}`}>
                            <Image
                                src="/img/icons/thunder.png"
                                alt="Ikona błyskawicy"
                                width={512}
                                height={512}
                                quality={30}
                                className={s.icon}
                            />
                            <p>Jednoczesna produkcja prądu i ciepła zwiększa efektywność wykorzystania biogazu i stabilizuje koszty energii.</p>
                        </li>
                        <li className={`${s.li} card ${s.card}`}>
                            <Image
                                src="/img/icons/smoke.png"
                                alt="Ikona ciepła"
                                width={512}
                                height={512}
                                quality={30}
                                className={s.icon}
                            />
                            <p>Ciepło można wykorzystać w procesach technologicznych lub do ogrzewania obiektów.</p>
                        </li>
                    </ul>
                </div>

                <div id="TechnologySection7" className={s.Section7}>
                    <h2 className={s.h2}>Upgrading do biometanu</h2>
                    <ul className={s.ul}>
                        <li className={`${s.li} card ${s.card}`}>Zastosowanie systemu membranowego, PSA lub absorpcji pozwala uzyskać biometan i zintegrować go z siecią lub systemami bioCNG/bioLNG.</li>
                        <li className={`${s.li} card ${s.card}`}>Konfigurację dobieramy do parametrów gazu i wymagań operatora sieci.</li>
                    </ul>
                </div>

                <div id="TechnologySection8" className={s.Section8}>
                    <h2 className={s.h2}>Automatyka i monitoring</h2>
                    <ul className={s.ul}>
                        <li className={`${s.li} card ${s.card}`}>Zdalny nadzór 24/7, alarmy i szkolenia operatorów wspierają bezpieczeństwo i dyspozycyjność.</li>
                        <li className={`${s.li} card ${s.card}`}>Serwis reaguje zgodnie z SLA, standardowo do 24 h.</li>
                        <div className="cta"><Link href="/kontakt" className="cta-button">Uzyskaj bezpłatną wstępną wycenę</Link></div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Technology;