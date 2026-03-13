import Link from 'next/link';

function Offer() {
    return (
        <>
            <div className="content">
                <div id="Section1">
                    <h1 className="hero-header">Oferta Biogas Solutions</h1>
                    <p className="lead">Realizujemy inwestycje w modelu "od A do Z": od koncepcji i doboru technologii po rozruch i serwis, z dopasowaniem do dostępnych substratów. Zapewniamy wsparcie dofinansowania i przygotowania dokumentacji.</p>
                    <div className="cta"><Link className="cta-button" href="/kontakt">Umów się na bezpłatną konsultację</Link></div>
                </div>

                <div className="main-body">
                    <div id="Section2">
                        <ul id="offer">
                            <li className="card" id="micro-plants">
                                <div className="row">
                                    <div className="card-header">
                                        <div className="icon-container"><img src="/img/icons/biogas.png" alt="Ikona mikrobiogazowni" className="icon" /></div>
                                        <h3>Mikrobiogazownie do 50kW</h3>
                                    </div>

                                    <div className="vertical-divider"></div>

                                    <div className="for-whom">
                                        <h4>Dla kogo?</h4>
                                        <ul>
                                            <li>Rolnicy indywidualni i gospodarstwa rodzinne (300-550 krów mlecznych, 2000-3500 trzody chlewnej , 30-55 ha kukurydzy).</li>
                                            <li>Gospodarstwa chcące wykorzystać własną gnojowicę / obornik / inne opady z produkcji rolniczej i zmniejszyć koszty energii.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="benefits">
                                    <h4>Zalety</h4>
                                    <ul>
                                        <li>Kompleksowa realizacja "pod klucz" - <strong>szybka realizacja instalacji i niska ingerencja w istniejącą infrastrukturę.</strong></li>
                                        <li><strong>Mniej formalności</strong> i szybka ścieżka (definicja ustawowa, uproszczone zgłoszenia/ przyłączenie, brak opłaty za przyłączenie; licznik dwukierunkowy po stronie OSD).</li>
                                        <li><strong>Skalowalność</strong> - możliwość późniejszej rozbudowy (już jako mała instalacja {'>'}50 kW) po weryfikacji wsadu i odbiorów.</li>
                                        <li><strong>Niezależność</strong> energetyczna gospodarstwa.</li>
                                        <li><strong>Zagospodarowanie gnojowicy / obornika</strong> i innych odpadów z produkcji rolniczej + wartościowy nawóz (poferment) zamiast uciążliwego zapachowo odpadu.</li>
                                        <li><strong>Redukcja odorów i emisji GHG</strong> (odgazowanie gnojowicy / odpadów rolniczych).</li>
                                        <li>Programy dotacyjne/pożyczkowe dla rolników - m.in. "Energia dla Wsi" (<strong>do 65% bezzwrotnych dotacji</strong>).</li>
                                        <li><strong>Ciepło z kogeneracji</strong> - ogrzewanie obiektów kubaturowych fermy, wody użytkowej (dla gospodarstw domowych), procesy suszenia (pasz/produktów) - lokalna wartość dodana.</li>
                                    </ul>
                                </div>  
                            </li>

                            <li className="card" id="plants">
                                <div className="row">
                                    <div className="card-header">
                                        <div className="icon-container"><img src="/img/icons/power-plant.png" alt="Ikona dużej biogazowni" className="icon" /></div>
                                        <h3>Biogazownie średniej i dużej mocy (50-499 kW i {'>'}500 kW)</h3>
                                    </div>

                                    <div className="vertical-divider"></div>

                                    <div className="for-whom">
                                        <h4>Dla kogo?</h4>
                                        <ul>
                                            <li>Spółdzielnie i grupy producenckie.</li>
                                            <li>Średnie i duże gospodarstwa rolne posiadające większe stada zwierząt lub większe areały upraw roślin energetycznych (np. pow. 100ha gruntów uprawnych).</li>
                                            <li>Dla zakładów przetwórstwa rolno-spożywczego generujących odpady organiczne nadające się do współfermentacji.</li>
                                            <li>Inwestorzy poszukujący stabilnego źródła przychodów z OZE.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="benefits">
                                    <h4>Zalety</h4>
                                    <ul>
                                        <li><strong>Szybsze formalności i prostsza lokalizacja</strong> dzięki tzw. specustawie biogazowej (Ustawa z dnia 13 lipca 2023 r. o ułatwieniach w przygotowaniu i realizacji inwestycji w zakresie biogazowni rolniczych, a także ich funkcjonowaniu.)</li>
                                        <li><strong>Elastyczna praca źródła</strong> - możliwość przesuwania produkcji na godziny szczytu z buforowaniem biogazu, gdy sprzedaż 24/7 jest ograniczona (większa pojemność magazynu biogazu, szybki rozruch CHP)</li>
                                        <li><strong>Szybka budowa modułowa</strong>: start np. <strong>0,5 MW</strong> (niższy próg wejścia, mniejsza ingerencja w infrastrukturę), z <strong>projektową rezerwą pod rozbudowę do 1,0 MW</strong></li>
                                        <li><strong>Odporność na wahania cen substratów</strong>: możliwość mieszania wsadów (gnojowica, odpady rolno-spożywcze, kiszonki, itp.) i elastycznego sterowania obciążeniem.</li>
                                        <li><strong>Stabilne strumienie przychodów</strong>: energia elektryczna, ciepło, utylizacja odpadów pochodzenia rolniczego i z przemysłu rolno-spożywczego.</li>
                                        <li><strong>Utylizacja odpadów</strong> - możliwość wykorzystania resztek rolniczych i produktów ubocznych przemysłu rolno-spożywczego.</li>
                                        <li><strong>Wartość nawozowa pofermentu</strong>- pozostałość pofermentacyjna może być stosowana jako nawóz naturalny.</li>
                                        <li><strong>Uproszczone wpisy rejestrowe</strong> zamiast koncesji.</li>
                                        <li>Programy dotacyjne/pożyczkowe dla rolników - m.in. "Energia dla Wsi" (<strong>do 65% bezzwrotnych dotacji</strong>)</li>
                                        <li><strong>Wspieranie lokalnej gospodarki</strong> - tworzenie miejsc pracy i rozwój rolnictwa ekologicznego.</li>
                                        <li><strong>Redukcja odorów i GHG</strong> (ujemny ślad węglowy!)</li>
                                    </ul>
                                </div>
                            </li>

                            <li className="card" id="methane">
                                <div className="row">
                                    <div className="card-header">
                                        <div className="icon-container"><img src="/img/icons/methane.png" alt="Ikona metanu" className="icon" /></div>
                                        <h3>Biometanownie (upgrading do biometanu)</h3>
                                    </div>

                                    <div className="vertical-divider"></div>

                                    <div className="for-whom">
                                        <h4>Dla kogo?</h4>
                                        <ul>
                                            <li>Duże gospodarstwa, klastry energii i inwestorzy przemysłowi.</li>
                                            <li>Firmy i koncerny energetyczne, operatorzy sieci gazowych.</li>
                                            <li>Transport i logistyka (bioCNG/bioLNG jako paliwo alternatywne).</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="benefits">
                                    <h4>Zalety</h4>
                                    <ul>
                                        <li><strong>Biometan</strong> uzyskany z oczyszczania biogazu to <strong>paliwo o wyższej jakości i cenie</strong> niż standardowy biogaz, zapewniające <strong>większy zysk i lepszą opłacalność inwestycji</strong>.</li>
                                        <li><strong>Stabilna, przewidywalna i elastyczna produkcja energii</strong> - biometan można magazynować i używać na żądanie, co daje niezależność energetyczną.</li>
                                        <li><strong>Modułowość</strong>: łatwe skalowanie przepustowości wraz z rosnącą podażą substratów</li>
                                        <li><strong>Niski CAPEX jednostkowy przy rosnącej skali</strong> - korzystna ekonomika TCO dzięki modułowym skidom i standaryzacji</li>
                                        <li><strong>Wtrysk do sieci gazowej</strong> (stacja wtryskowa, chromatograf, odoracja, bufor ciśnieniowy) <strong>lub</strong> ścieżka <strong>bioCNG/bioLNG</strong> (sprężanie/ skraplanie) - <strong>dywersyfikacja kanałów sprzedaży</strong>.</li>
                                        <li><strong>Odzysk bioCO₂</strong> (po oczyszczeniu): strumień przychodu np. dla chłodni, browarów, ogrodnictwa lub zastosowań technologicznych.</li>
                                        <li><strong>Kontrakty długoterminowe</strong> z odbiorcami przemysłowymi i operatorami flot (komunikacja miejska, logistyka, gospodarka odpadami).</li>
                                        <li><strong>Gwarancje Pochodzenia (GO)</strong> dla biometanu - dodatkowa wartość dla odbiorców z celami ESG.</li>
                                        <li><strong>Taksonomia UE/ESG</strong> - ułatwia dostęp do finansowania (zielone kredyty/obligacje)</li>
                                        <li><strong>Duża redukcja emisji CH₄</strong> (uchwycenie metanu z fermentacji), <strong>gazów cieplarnianych oraz odorów</strong>.</li>
                                        <li><strong>Bezpieczeństwo i higiena</strong> - przetwarzanie odpadów w kontrolowanych warunkach zmniejsza ryzyko chorób i nieprzyjemnych zapachów.</li>
                                    </ul>
                                </div>
                            </li>

                            <li className="card" id="consulting-analyzes">
                                <div className="row">
                                    <div className="card-header">
                                        <div className="icon-container"><img src="/img/icons/bars.png" alt="Ikona wykresu" className="icon" /></div>
                                        <h3>Doradztwo i analizy</h3>
                                    </div>

                                    <div className="vertical-divider"></div>

                                    <div className="for-whom">
                                        <h4>Dla kogo?</h4>
                                        <ul>
                                            <li><strong>Rolnicy, inwestorzy prywatni, spółdzielnie rolnicze</strong> planujący produkcję energii z biogazu.</li>
                                            <li><strong>Samorządy i przedsiębiorstwa przemysłowe</strong> planujące inwestycje w odnawialne źródła energii.</li>
                                            <li><strong>Zakłady gospodarki komunalnej, oczyszczalnie ścieków, składowiska odpadów i inne zakłady przemysłowe</strong>, które chcą wykorzystać odpady organiczne do produkcji energii z biogazu lub biometanu.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="benefits">
                                    <h4>Co robimy?</h4>
                                    <ul>
                                        <li><strong>Profesjonalne wsparcie w pozyskaniu dotacji i finansowania</strong> - niższy wkład własny, szybszy zwrot z inwestycji.</li>
                                        <li><strong>Analizy finansowe CAPEX, OPEX, LCOE, IRR, NPV</strong> - pewność rentowności projektu.</li>
                                        <li><strong>Przyłączenia do PSE/OSD/PSG, audyty i wnioski</strong> - odciążenie inwestora w formalnościach.</li>
                                        <li><strong>Studium wykonalności i dobór technologii</strong> - dopasowanie do dostępnych substratów i potrzeb gospodarstwa/zakładu.</li>
                                        <li><strong>Dobór i optymalizacja układów technologicznych</strong> (np. jednostek CHP, systemów uzdatniania biogazu do biometanu) - maksymalizacja efektywności produkcji energii elektrycznej i cieplnej.</li>
                                        <li><strong>Audyty i analizy substratowe - maksymalne wykorzystanie lokalnych zasobów w celu zapewnienia najwyższej wydajności instalacji.</strong></li>
                                        <li><strong>Kompleksowe projektowanie instalacji - pełny zakres działań projektowo-formalnych niezbędnych do realizacji inwestycji.</strong></li>
                                    </ul>
                                </div>
                            </li>

                            <li className="card" id="exploitation">
                                <div className="row">
                                    <div className="card-header">
                                        <div className="icon-container"><img src="/img/icons/testing.png" alt="Ikona analizy" className="icon" /></div>
                                        <h3>Serwis, eksploatacja i monitoring instalacji</h3>
                                    </div>

                                    <div className="vertical-divider"></div>

                                    <div className="for-whom">
                                        <h4>Dla kogo?</h4>
                                        <ul>
                                            <li><strong>Właściciele biogazowni i biometanowni</strong> (zarówno nowych, jak i już działających).</li>
                                            <li><strong>Zakłady komunalne i przemysłowe</strong> posiadające instalacje biogazowe, potrzebujące wsparcia technicznego w zakresie eksploatacji i utrzymania ruchu.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="benefits">
                                    <h4>Co robimy?</h4>
                                    <ul>
                                        <li>Rozruch technologiczny - <strong>bezpieczne uruchomienie i pewność parametrów pracy</strong>.</li>
                                        <li><strong>Przeglądy serwisowe i eksploatacyjne</strong> - regularna kontrola urządzeń i instalacji w celu utrzymania optymalnej wydajności i wykrywania potencjalnych usterek.</li>
                                        <li><strong>Serwis gwarancyjny i pogwarancyjny</strong> - ciągłość działania instalacji.</li>
                                        <li><strong>Szkolenia operatorów i monitoring 24/7</strong> z automatycznymi powiadomieniami - <strong>pełna kontrola nad procesem</strong>.</li>
                                        <li><strong>Standardowa reakcja serwisu do 24 h - minimalizacja ryzyka przestojów i strat.</strong></li>
                                    </ul>
                                </div>
                            </li>
                            
                            <li className="card" id="analyzes-audites">
                                <div className="row">
                                    <div className="card-header">
                                        <div className="icon-container"><img src="/img/icons/graduate-hat.png" alt="Ikona czapki studenta" className="icon" /></div>
                                        <h3>Analizy i audyty techniczno-technologiczne</h3>
                                    </div>

                                    <div className="vertical-divider"></div>

                                    <div className="for-whom">
                                        <h4>Dla kogo?</h4>
                                        <ul>
                                            <li><strong>Właściciele instalacji biogazowych/ biometanowych</strong>, którzy chcą zoptymalizować pracę instalacji.</li>
                                            <li><strong>Zakłady komunalne i przemysłowe posiadające instalacje biogazowe</strong>, potrzebujące wsparcia w ocenie efektywności i bezpieczeństwa procesów.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="benefits">
                                    <ul>
                                        <li><strong>Audyt technologiczny instalacji</strong> - ocena stanu technicznego, identyfikacja potencjalnych usprawnień i ryzyk.</li>
                                        <li><strong>Analiza substratowa i bilans energetyczny</strong> - optymalizacja wydajności i efektywności instalacji oraz zapewnienie stabilności procesów technologicznych.</li>
                                        <li><strong>Raporty i rekomendacje techniczne</strong> - wskazanie działań poprawiających produkcję i bezpieczeństwo pracy, minimalizujących ryzyko usterek urządzeń oraz ułatwiających planowanie działań serwisowych.</li>
                                        <li><strong>Ocena bezpieczeństwa i zgodności z normami</strong> - zapewnienie zgodności instalacji z przepisami i standardami branżowymi.</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="cta"><Link className="cta-button" href="/kontakt">Uzyskaj bezpłatną wstępną wycenę</Link></div>
                </div>
            </div>
        </>
    );
}

export default Offer;