import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';
import bg from '@/../public/img/bg/bg3.jpg';

const s = styles;

function Offer() {
    return (
        <>
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
                
                <section id="OfferSection1" className={`cover ${s.cover}`}>
                    <div className="content">
                        <h1 className="hero-header">Oferta Biogas Solutions</h1>
                        <p className="lead">Realizujemy inwestycje w modelu "od A do Z": od koncepcji i doboru technologii po rozruch i serwis, z dopasowaniem do dostępnych substratów. Zapewniamy wsparcie dofinansowania i przygotowania dokumentacji.</p>
                        <div className="cta"><Link className="cta-button" href="/kontakt">Umów się na bezpłatną konsultację</Link></div>
                    </div>
                </section>

                <section className={`mainContent ${s.mainContent}`}>
                    <section id="OfferSection2" className={s.Section2}>
                        <ul id="offer" className={s.Offer}>
                            <li id="mikrobiogazownie" className={s.offerItem}>
                                <h2 className={s.h2}>Mikrobiogazownie</h2>
                                <h3 className={s.h3}>Małej mocy</h3>

                                <div className={`gridWrapper ${s.gridWrapper}`}>
                                    <div className={`card ${s.miniature}`} style={{gridArea: 'miniature'}}>
                                        <div className="iconContainer"><img src="/img/icons/biogas.png" alt="Ikona mikrobiogazowni" className={s.icon} /></div>
                                    </div>

                                    <div className={`card ${s.card} ${s.forWhom}`} style={{gridArea: 'for-whom'}}>
                                        <h4 className={s.h4}>Dla kogo?</h4>
                                        <ul className={s.ul}>
                                            <li className={s.li}>Rolnicy indywidualni i gospodarstwa rodzinne (300-550 krów mlecznych, 2000-3500 trzody chlewnej , 30-55 ha kukurydzy).</li>
                                            <li className={s.li}>Gospodarstwa chcące wykorzystać własną gnojowicę / obornik / inne opady z produkcji rolniczej i zmniejszyć koszty energii.</li>
                                        </ul>
                                    </div>

                                    <div className={`card ${s.card} ${s.benefits}`} style={{gridArea: 'benefits'}}>
                                        <h4 className={s.h4}>Zalety</h4>
                                        <ul className={s.ul}>
                                            <li className={s.li}>Kompleksowa realizacja "pod klucz" - <strong>szybka realizacja instalacji i niska ingerencja w istniejącą infrastrukturę.</strong></li>
                                            <li className={s.li}><strong>Mniej formalności</strong> i szybka ścieżka (definicja ustawowa, uproszczone zgłoszenia/ przyłączenie, brak opłaty za przyłączenie; licznik dwukierunkowy po stronie OSD).</li>
                                            <li className={s.li}><strong>Skalowalność</strong> - możliwość późniejszej rozbudowy (już jako mała instalacja {'>'}50 kW) po weryfikacji wsadu i odbiorów.</li>
                                            <li className={s.li}><strong>Niezależność</strong> energetyczna gospodarstwa.</li>
                                            <li className={s.li}><strong>Zagospodarowanie gnojowicy / obornika</strong> i innych odpadów z produkcji rolniczej + wartościowy nawóz (poferment) zamiast uciążliwego zapachowo odpadu.</li>
                                            <li className={s.li}><strong>Redukcja odorów i emisji GHG</strong> (odgazowanie gnojowicy / odpadów rolniczych).</li>
                                            <li className={s.li}>Programy dotacyjne/pożyczkowe dla rolników - m.in. "Energia dla Wsi" (<strong>do 65% bezzwrotnych dotacji</strong>).</li>
                                            <li className={s.li}><strong>Ciepło z kogeneracji</strong> - ogrzewanie obiektów kubaturowych fermy, wody użytkowej (dla gospodarstw domowych), procesy suszenia (pasz/produktów) - lokalna wartość dodana.</li>
                                        </ul>
                                    </div>  

                                    <div className={`card ${s.card} ${s.power}`} style={{gridArea: 'power'}}>
                                        <span className={s.value}><span className={s.num}>{'<'}50</span>kW</span>
                                    </div>
                                </div>
                            </li>

                            <li id="biogazownie" className={s.offerItem}>
                                <h2 className={s.h2}>Biogazownie</h2>
                                <h3 className={s.h3}>Średniej i dużej mocy</h3>

                                <div className={`gridWrapper ${s.gridWrapper}`}>
                                    <div className={`card ${s.card} ${s.miniature}`} style={{gridArea: 'miniature'}}>
                                        <div className="iconContainer"><img className={s.icon} src="/img/icons/power-plant.png" alt="Ikona dużej biogazowni" /></div>
                                    </div>

                                    <div className={`card ${s.card} ${s.forWhom}`} style={{gridArea: 'for-whom'}}>
                                        <h4 className={s.h4}>Dla kogo?</h4>
                                        <ul className={s.ul}>
                                            <li className={s.li}>Spółdzielnie i grupy producenckie.</li>
                                            <li className={s.li}>Średnie i duże gospodarstwa rolne posiadające większe stada zwierząt lub większe areały upraw roślin energetycznych (np. pow. 100ha gruntów uprawnych).</li>
                                            <li className={s.li}>Dla zakładów przetwórstwa rolno-spożywczego generujących odpady organiczne nadające się do współfermentacji.</li>
                                            <li className={s.li}>Inwestorzy poszukujący stabilnego źródła przychodów z OZE.</li>
                                        </ul>
                                    </div>

                                    <div className={`card ${s.card} ${s.forWhom}`} style={{gridArea: 'benefits'}}>
                                        <h4 className={s.h4}>Zalety</h4>
                                        <ul className={s.ul}>
                                            <li className={s.li}><strong>Szybsze formalności i prostsza lokalizacja</strong> dzięki tzw. specustawie biogazowej (Ustawa z dnia 13 lipca 2023 r. o ułatwieniach w przygotowaniu i realizacji inwestycji w zakresie biogazowni rolniczych, a także ich funkcjonowaniu.)</li>
                                            <li className={s.li}><strong>Elastyczna praca źródła</strong> - możliwość przesuwania produkcji na godziny szczytu z buforowaniem biogazu, gdy sprzedaż 24/7 jest ograniczona (większa pojemność magazynu biogazu, szybki rozruch CHP)</li>
                                            <li className={s.li}><strong>Szybka budowa modułowa</strong>: start np. <strong>0,5 MW</strong> (niższy próg wejścia, mniejsza ingerencja w infrastrukturę), z <strong>projektową rezerwą pod rozbudowę do 1,0 MW</strong></li>
                                            <li className={s.li}><strong>Odporność na wahania cen substratów</strong>: możliwość mieszania wsadów (gnojowica, odpady rolno-spożywcze, kiszonki, itp.) i elastycznego sterowania obciążeniem.</li>
                                            <li className={s.li}><strong>Stabilne strumienie przychodów</strong>: energia elektryczna, ciepło, utylizacja odpadów pochodzenia rolniczego i z przemysłu rolno-spożywczego.</li>
                                            <li className={s.li}><strong>Utylizacja odpadów</strong> - możliwość wykorzystania resztek rolniczych i produktów ubocznych przemysłu rolno-spożywczego.</li>
                                            <li className={s.li}><strong>Wartość nawozowa pofermentu</strong>- pozostałość pofermentacyjna może być stosowana jako nawóz naturalny.</li>
                                            <li className={s.li}><strong>Uproszczone wpisy rejestrowe</strong> zamiast koncesji.</li>
                                            <li className={s.li}>Programy dotacyjne/pożyczkowe dla rolników - m.in. "Energia dla Wsi" (<strong>do 65% bezzwrotnych dotacji</strong>)</li>
                                            <li className={s.li}><strong>Wspieranie lokalnej gospodarki</strong> - tworzenie miejsc pracy i rozwój rolnictwa ekologicznego.</li>
                                            <li className={s.li}><strong>Redukcja odorów i GHG</strong> (ujemny ślad węglowy!)</li>
                                        </ul>
                                    </div>

                                    <div className={`card ${s.card} ${s.power}`} style={{gridArea: 'power'}}>
                                        <span className={s.value}><span className={s.num}>{'<'}500</span>kW lub <span className={s.num}>{'>'}500</span>kW</span>
                                    </div>
                                </div>
                            </li>

                            <li id="biometanownie" className={s.offerItem}>
                                <h2 className={s.h2}>Biometanownie</h2>
                                <h3 className={s.h3}>Upgrading do biometanu</h3>

                                <div className={`gridWrapper ${s.gridWrapper}`}>
                                    <div className={`card ${s.card} ${s.miniature}`} style={{gridArea: 'miniature'}}>
                                        <div className={s.iconContainer}><img src="/img/icons/methane.png" alt="Ikona metanu" className={s.icon} /></div>
                                    </div>

                                    <div className={`card ${s.card} ${s.forWhom}`} style={{gridArea: 'for-whom'}}>
                                        <h4 className={s.h4}>Dla kogo?</h4>
                                        <ul className={s.ul}>
                                            <li className={s.li}>Duże gospodarstwa, klastry energii i inwestorzy przemysłowi.</li>
                                            <li className={s.li}>Firmy i koncerny energetyczne, operatorzy sieci gazowych.</li>
                                            <li className={s.li}>Transport i logistyka (bioCNG/bioLNG jako paliwo alternatywne).</li>
                                        </ul>
                                    </div>
                                    
                                    <div className={`card ${s.card} ${s.benefits}`} style={{gridArea: 'benefits'}}>
                                        <h4 className={s.h4}>Zalety</h4>
                                        <ul className={s.ul}>
                                            <li className={s.li}><strong>Biometan</strong> uzyskany z oczyszczania biogazu to <strong>paliwo o wyższej jakości i cenie</strong> niż standardowy biogaz, zapewniające <strong>większy zysk i lepszą opłacalność inwestycji</strong>.</li>
                                            <li className={s.li}><strong>Stabilna, przewidywalna i elastyczna produkcja energii</strong> - biometan można magazynować i używać na żądanie, co daje niezależność energetyczną.</li>
                                            <li className={s.li}><strong>Modułowość</strong>: łatwe skalowanie przepustowości wraz z rosnącą podażą substratów</li>
                                            <li className={s.li}><strong>Niski CAPEX jednostkowy przy rosnącej skali</strong> - korzystna ekonomika TCO dzięki modułowym skidom i standaryzacji</li>
                                            <li className={s.li}><strong>Wtrysk do sieci gazowej</strong> (stacja wtryskowa, chromatograf, odoracja, bufor ciśnieniowy) <strong>lub</strong> ścieżka <strong>bioCNG/bioLNG</strong> (sprężanie/ skraplanie) - <strong>dywersyfikacja kanałów sprzedaży</strong>.</li>
                                            <li className={s.li}><strong>Odzysk bioCO₂</strong> (po oczyszczeniu): strumień przychodu np. dla chłodni, browarów, ogrodnictwa lub zastosowań technologicznych.</li>
                                            <li className={s.li}><strong>Kontrakty długoterminowe</strong> z odbiorcami przemysłowymi i operatorami flot (komunikacja miejska, logistyka, gospodarka odpadami).</li>
                                            <li className={s.li}><strong>Gwarancje Pochodzenia (GO)</strong> dla biometanu - dodatkowa wartość dla odbiorców z celami ESG.</li>
                                            <li className={s.li}><strong>Taksonomia UE/ESG</strong> - ułatwia dostęp do finansowania (zielone kredyty/obligacje)</li>
                                            <li className={s.li}><strong>Duża redukcja emisji CH₄</strong> (uchwycenie metanu z fermentacji), <strong>gazów cieplarnianych oraz odorów</strong>.</li>
                                            <li className={s.li}><strong>Bezpieczeństwo i higiena</strong> - przetwarzanie odpadów w kontrolowanych warunkach zmniejsza ryzyko chorób i nieprzyjemnych zapachów.</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li id="doradztwo-i-analizy" className={s.offerItem}>
                                <h2 className={s.h2}>Doradztwo i analizy</h2>

                                <div className={`gridWrapper ${s.gridWrapper}`}>
                                    <div className={`card ${s.card} ${s.miniature}`} style={{gridArea: 'miniature'}}>
                                        <div className={s.iconContainer}><img src="/img/icons/money.png" alt="Analiza" className={s.icon} /></div>
                                    </div>

                                    <div className={`card ${s.card} ${s.forWhom}`} style={{gridArea: 'for-whom'}}>
                                        <h4 className={s.h4}>Dla kogo?</h4>
                                        <ul className={s.ul}>
                                            <li className={s.li}><strong>Rolnicy, inwestorzy prywatni, spółdzielnie rolnicze</strong> planujący produkcję energii z biogazu.</li>
                                            <li className={s.li}><strong>Samorządy i przedsiębiorstwa przemysłowe</strong> planujące inwestycje w odnawialne źródła energii.</li>
                                            <li className={s.li}><strong>Zakłady gospodarki komunalnej, oczyszczalnie ścieków, składowiska odpadów i inne zakłady przemysłowe</strong>, które chcą wykorzystać odpady organiczne do produkcji energii z biogazu lub biometanu.</li>
                                        </ul>
                                    </div>

                                    <div className={`card ${s.benefits} ${s.card}`} style={{gridArea: 'benefits'}}>
                                        <h4 className={s.h4}>Co robimy?</h4>
                                        <ul className={s.ul}>
                                            <li className={s.li}><strong>Profesjonalne wsparcie w pozyskaniu dotacji i finansowania</strong> - niższy wkład własny, szybszy zwrot z inwestycji.</li>
                                            <li className={s.li}><strong>Analizy finansowe CAPEX, OPEX, LCOE, IRR, NPV</strong> - pewność rentowności projektu.</li>
                                            <li className={s.li}><strong>Przyłączenia do PSE/OSD/PSG, audyty i wnioski</strong> - odciążenie inwestora w formalnościach.</li>
                                            <li className={s.li}><strong>Studium wykonalności i dobór technologii</strong> - dopasowanie do dostępnych substratów i potrzeb gospodarstwa/zakładu.</li>
                                            <li className={s.li}><strong>Dobór i optymalizacja układów technologicznych</strong> (np. jednostek CHP, systemów uzdatniania biogazu do biometanu) - maksymalizacja efektywności produkcji energii elektrycznej i cieplnej.</li>
                                            <li className={s.li}><strong>Audyty i analizy substratowe - maksymalne wykorzystanie lokalnych zasobów w celu zapewnienia najwyższej wydajności instalacji.</strong></li>
                                            <li className={s.li}><strong>Kompleksowe projektowanie instalacji - pełny zakres działań projektowo-formalnych niezbędnych do realizacji inwestycji.</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li id="serwis-i-eksploatacja" className={s.offerItem}>
                                <h2 className={s.h2}>Serwis, eksploatacja i monitoring instalacji</h2>

                                <div className={`gridWrapper ${s.gridWrapper}`}>
                                    <div className={`card ${s.miniature} ${s.card}`} style={{gridArea: 'miniature'}}>
                                        <div className={s.iconContainer}><img src="/img/icons/testing.png" alt="Ikona analizy" className={s.icon} /></div>
                                    </div>

                                    <div className={`card ${s.card} ${s.forWhom}`} style={{gridArea: 'for-whom'}}>
                                        <h4 className={s.h4}>Dla kogo?</h4>
                                        <ul className={s.ul}>
                                            <li className={s.li}><strong>Właściciele biogazowni i biometanowni</strong> (zarówno nowych, jak i już działających).</li>
                                            <li className={s.li}><strong>Zakłady komunalne i przemysłowe</strong> posiadające instalacje biogazowe, potrzebujące wsparcia technicznego w zakresie eksploatacji i utrzymania ruchu.</li>
                                        </ul>
                                    </div>

                                    <div className={`card ${s.card} ${s.benefits}`} style={{gridArea: 'benefits'}}>
                                        <h4 className={s.h4}>Co robimy?</h4>
                                        <ul className={s.ul}>
                                            <li className={s.li}>Rozruch technologiczny - <strong>bezpieczne uruchomienie i pewność parametrów pracy</strong>.</li>
                                            <li className={s.li}><strong>Przeglądy serwisowe i eksploatacyjne</strong> - regularna kontrola urządzeń i instalacji w celu utrzymania optymalnej wydajności i wykrywania potencjalnych usterek.</li>
                                            <li className={s.li}><strong>Serwis gwarancyjny i pogwarancyjny</strong> - ciągłość działania instalacji.</li>
                                            <li className={s.li}><strong>Szkolenia operatorów i monitoring 24/7</strong> z automatycznymi powiadomieniami - <strong>pełna kontrola nad procesem</strong>.</li>
                                            <li className={s.li}><strong>Standardowa reakcja serwisu do 24 h - minimalizacja ryzyka przestojów i strat.</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            
                            <li id="analyzes-audites" className={s.offerItem}>
                                <h2 className={s.h2}>Analizy i audyty</h2>
                                <h3 className={s.h3}>techniczno-technologiczne</h3>

                                <div className={`gridWrapper ${s.gridWrapper}`}>
                                    <div className={`card ${s.card} ${s.miniature}`} style={{gridArea: 'miniature'}}>
                                        <div className={s.iconContainer}><img src="/img/icons/graduate-hat.png" alt="Ikona czapki studenta" className={s.icon} /></div>
                                    </div>

                                    <div className={`card ${s.card} ${s.forWhom}`} style={{gridArea: 'for-whom'}}>
                                        <h4 className={s.h4}>Dla kogo?</h4>
                                        <ul className={s.ul}>
                                            <li className={s.li}><strong>Właściciele instalacji biogazowych/ biometanowych</strong>, którzy chcą zoptymalizować pracę instalacji.</li>
                                            <li className={s.li}><strong>Zakłady komunalne i przemysłowe posiadające instalacje biogazowe</strong>, potrzebujące wsparcia w ocenie efektywności i bezpieczeństwa procesów.</li>
                                        </ul>
                                    </div>

                                    <div className={`card ${s.card} ${s.benefits}`} style={{gridArea: 'benefits'}}>
                                        <ul className={s.ul}>
                                            <li className={s.li}><strong>Audyt technologiczny instalacji</strong> - ocena stanu technicznego, identyfikacja potencjalnych usprawnień i ryzyk.</li>
                                            <li className={s.li}><strong>Analiza substratowa i bilans energetyczny</strong> - optymalizacja wydajności i efektywności instalacji oraz zapewnienie stabilności procesów technologicznych.</li>
                                            <li className={s.li}><strong>Raporty i rekomendacje techniczne</strong> - wskazanie działań poprawiających produkcję i bezpieczeństwo pracy, minimalizujących ryzyko usterek urządzeń oraz ułatwiających planowanie działań serwisowych.</li>
                                            <li className={s.li}><strong>Ocena bezpieczeństwa i zgodności z normami</strong> - zapewnienie zgodności instalacji z przepisami i standardami branżowymi.</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <div className="cta"><Link className="cta-button" href="/kontakt">Uzyskaj bezpłatną wstępną wycenę</Link></div>
                </section>
            </div>
        </>
    );
}

export default Offer;