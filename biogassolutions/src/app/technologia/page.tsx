import Link from 'next/link';

function Technology() {
    return (
        <div className="content">
            <div id="Section1">
                <h1 className="hero-header">Jak działa nasza technologia?</h1>
                <p className="lead">Biogaz powstaje z materiałów organicznych w fermentacji beztlenowej, jest oczyszczany i kierowany do jednostki kogeneracyjnej lub układu upgradingu do biometanu. Kluczowe są odpowiednio dobrane zbiorniki stalowe (elastyczność substratowa)  i automatyka pracy.</p>
                <div className="cta"><a href="#Section2" className="cta-button">Dowiedz się więcej</a></div>
            </div>
            
            <div className="main-body">
                <div id="Section2">
                    <img src="./images/scheme.png" alt="Schemat biogazowni" />
                </div>

                <div id="Section7" className="card card-big">
                    <img src="/img/icons/elasticity.png" alt="Ikona elastyczności" className="card-icon" />
                    <h2>Substraty i elastyczność</h2>
                    <ul>
                        <li>Technologia dobierana jest do dostępności i sezonowości substratów, aby zapewnić stabilną pracę układu.</li>
                        <li>Optymalizujemy mieszankę wsadu dla wysokiego uzysku i stabilności procesu.</li>
                        <li>Zapewniamy wieloletnią elastyczność instalacji dzięki zastosowaniu buforów energetycznych, które umożliwiają dostosowanie się do zmienności substratów na rynku odpadów.</li>
                    </ul>
                </div>

                <div id="Section3" className="card card-big">
                    <img src="/img/icons/industry-tank.png" alt="Ikona zbiornika" className="card-icon" />
                    <h2>Fermentacja</h2>
                    <ol>
                        <li>Gnojowica, odpady rolnicze i przetwórstwa oraz kiszonki przetwarzane są do postaci płynnej, która kierowana zostaje do zbiorników fermentacyjnych.</li>
                        <li>W zbiornikach fermentacyjnych materia organiczna pochodząca z opadów zostaje poddana procesom rozkładu beztlenowego (anaerobowym), w wyniku czego powstaje biogaz (tj. mieszanina gazów: metanu (CH4), dwutlenku węgla (CO2), siarkowodoru (H2S), tlenu (O2) oraz pozostałe gazy odpadowe (w niewielkich stężeniach).</li>
                        <li>Wyprodukowany biogaz zostaje zmagazynowany w specjalnych szczelnych zbiornikach gazu (zlokalizowanych nad strefą płynną).</li>
                    </ol>
                </div>

                <div id="Section4" className="card card-big">
                    <img src="/img/icons/clean.png" alt="Ikona czystości" className="card-icon" />
                    <h2>Uzdatnianie biogazu</h2>
                    <ol>
                        <li>Zmagazynowany surowy biogaz zostaje na bieżąco kierowany do systemu uzdatniania biogazu.</li>
                        <li>Biogaz zostaje oczyszczony ze szkodliwych związków dla urządzeń oraz dalszej części instalacji (siarkowodór (H2S), lotne związki organiczne (LZO/ VOC)).</li>
                        <li>Po uzdatnieniu gaz zasila CHP lub jest kierowany do upgradingu w celu uzyskania biometanu.</li>
                    </ol>
                </div>

                <div id="Section5" className="card card-big">
                    <img src="/img/icons/cogeneration.png" alt="Ikona kogeneracji" className="card-icon" />
                    <h2>Kogeneracja (CHP)</h2>
                    <ul>
                        <li className="item1">Jednoczesna produkcja prądu i ciepła zwiększa efektywność wykorzystania biogazu i stabilizuje koszty energii.</li>
                        <li className="item2">Ciepło można wykorzystać w procesach technologicznych lub do ogrzewania obiektów.</li>
                    </ul>
                </div>

                <div id="Section6" className="card card-big">
                    <img src="/img/icons/forward.png" alt="Ikona ulepszenia" className="card-icon" />
                    <h2>Upgrading do biometanu</h2>
                    <ul>
                        <li>Zastosowanie systemu membranowego, PSA lub absorpcji pozwala uzyskać biometan i zintegrować go z siecią lub systemami bioCNG/bioLNG.</li>
                        <li>Konfigurację dobieramy do parametrów gazu i wymagań operatora sieci.</li>
                    </ul>
                </div>

                <div id="Section8" className="card card-big">
                    <img src="/img/icons/24-hours-service.png" alt="Ikona serwisu 24h" className="card-icon" />
                    <h2>Automatyka i monitoring</h2>
                    <ul>
                        <li>Zdalny nadzór 24/7, alarmy i szkolenia operatorów wspierają bezpieczeństwo i dyspozycyjność.</li>
                        <li>Serwis reaguje zgodnie z SLA, standardowo do 24 h.</li>
                    </ul>
                </div>

                <div className="cta"><Link href="/kontakt" className="cta-button">Uzyskaj bezpłatną wstępną wycenę</Link></div>
            </div>
        </div>
    );
}

export default Technology;