import Link from 'next/link';

function Realizations() {
    return (
        <>
            <div className="content">
                <div className="cover">
                    <div id="Section1">
                        <h1 className="hero-header">Nasze realizacje</h1>
                        <p className="lead">Od kilkunastu lat projektujemy, budujemy i modernizujemy instalacje biogazowe w całej Polsce — od koncepcji i technologii, przez projekt i dokumentację, aż po budowę, rozruch oraz późniejsze zarządzanie eksploatacją.</p>
                        <div className="cta"><a href="#Section2" className="cta-button">Dowiedz się więcej</a></div>
                    </div>
                </div>

                <div id="main-body">
                    <div id="Section2" className="card card-big">
                        <h2>Nasze doświadczenie</h2>
                        <ul>
                            <li>Zrealizowaliśmy projekty biogazowni rolniczych i elektrociepłowni biogazowych o mocach od 499 kW do 2 MW, obejmujące technologię, projekt, budowę oraz rozruch technologiczny.</li>
                            <li>Opracowaliśmy i wdrożyliśmy rozwiązania dla instalacji składowiskowych o mocy do 1 MW.</li>
                            <li>W ramach prowadzonych działań powstały zarówno nowe biogazownie, jak i zrealizowane zostały modernizacje istniejących instalacji.</li>
                        </ul>
                    </div>

                    <div id="Section3">
                        <div className="card card-big">
                            <h2>Wybrane realizacje</h2>
                            <ul>
                                <li>Budowa i modernizacja biogazowni rolniczych i instalacji kogeneracyjnych o mocach od 499 kW do 1,2 MW (technologia, projekt, budowa, rozruch technologiczny).</li>
                                <li>Projektowanie i budowa instalacji do wytwarzania energii elektrycznej i cieplnej z biogazu, w tym elektrociepłowni i zespołów kogeneracyjnych.</li>
                                <li>Realizacja instalacji OZE zasilanych biogazem składowiskowym do 1 MW, w tym zagospodarowanie terenu i infrastruktury towarzyszącej.</li>
                                <li>Kompleksowe modernizacje istniejących obiektów biogazowych i elektrociepłowni, obejmujące projekt, budowę i uruchomienie technologii.</li>
                            </ul>
                        </div>
                    </div>

                    <div id="Section4">
                        <h2>Efekty naszej pracy</h2>
                        <ul className="stats">
                            <li className="card stat">
                                <h3>Łączna moc zrealizowanych i zmodernizowanych biogazowni:</h3>
                                <p><span className="counter-unit"><span className="counter" data-speed="90" data-target="17.2">0</span> MW</span></p>
                            </li>

                            <li className="card stat" style={{display: 'none'}}>
                                <h3>Zarządzanie działalnością operacyjną</h3>
                                <p><span className="counter counter-unit" data-speed="200" data-target="8">0</span>biogazowni o mocy</p>
                                <p className="counter-unit"><span className="couter-unit"></span><span className="counter" data-speed="140" data-target="8.6">0</span> MW</p>
                            </li>

                            <li className="card stat">
                                <h3>Uzyskana średnioroczna sprawność eksploatowanych instalacji</h3>
                                <p><span className="counter-unit">{'>'}<span className="counter" data-speed="85" data-target="95">0</span>%</span></p>
                                <p>mocy zainstalowanej</p>
                            </li>
                        </ul>
                    </div>

                    <div id="Section5" style={{display: 'none'}}>
                        <h2>Etapy budowy biogazowni</h2>
                        <div className="image landscape-only"><img src="/img/build-stages/stages.png" alt="Trzy etapy realizacji biogazowni: Etap I Planowanie (weryfikacja prawna, warunki zabudowy, analizy, projekt i pozwolenia); Etap II Budowanie (budowa, dostawy i montaż, instalacje pomocnicze); Etap III Uruchomienie (rozruch, odbiory i legalizacja, szkolenia, monitoring i serwis 24/7)." /></div>
                        <div className="portrait-only">
                            <div className="image"><img src="/img/build-stages/stage1.png" alt="Etap I Planowanie (weryfikacja prawna, warunki zabudowy, analizy, projekt i pozwolenia)"/></div>
                            <div className="image"><img src="/img/build-stages/stage2.png" alt="Etap II Budowanie (budowa, dostawy i montaż, instalacje pomocnicze)"/></div>
                            <div className="image"><img src="/img/build-stages/stage3.png" alt="Etap III Uruchomienie (rozruch, odbiory i legalizacja, szkolenia, monitoring i serwis 24/7)"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Realizations;