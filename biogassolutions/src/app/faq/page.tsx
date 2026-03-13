import Link from 'next/link';

function FAQ() {
    return (
        <div className="content">
            <div id="Section1">
                <h1 className="hero-header">Najczęściej zadawane pytania</h1>
                <p className="lead">Zebraliśmy odpowiedzi, które porządkują zagadnienia techniczne, formalne i eksploatacyjne, aby przyspieszyć decyzję inwestycyjną. Sekcja obejmuje kwestie mocy, procesu, serwisu, wsadu i finansowania.</p>
                <Link href="/kontakt" className="cta-button">Umów się na bezpłatną konsultację</Link>
            </div>

            <div className="main-body">
                <div id="Section2">
                    <div className="card">
                        <details>
                            <summary>Dla kogo są instalacje i jaki jest zakres mocy [50 kWe-{'>'}500 kWe+]?</summary>
                            <p>- Oferujemy mikro do 50 kWe, średnie 50-499 kWe oraz większe moce, a także projekty z upgradingiem do biometanu tam, gdzie jest to technicznie i ekonomicznie uzasadnione. </p>
                        </details>
                    </div>

                    <div className="card">
                        <details>
                            <summary>Jakie są typowe substraty i jak je dobrać?</summary>
                            <p>- Najczęściej gnojowica, odpady rolnicze i przetwórstwa oraz kiszonki; technologia dobierana jest do dostępności i sezonowości wsadu.</p>
                        </details>
                    </div>

                    <div className="card">
                        <details>
                            <summary>Czy 50 kWe można skalować modułowo?</summary>
                            <p>- Technicznie tak, ale zwykle bardziej opłacalne jest przejście do wyższej klasy mocy; jednostka może pracować w elastycznym zakresie.</p>
                        </details>
                    </div>

                    <div className="card">
                        <details>
                            <summary>Co oznacza realizacja "pod klucz"?</summary>
                            <p>- Kompletny zakres — przyłącza, fundamenty, instalacje technologiczne, automatyka, rozruch technologiczny, odbiory i przekazanie do eksploatacji.</p>
                        </details>
                    </div>

                    <div className="card">
                        <details>
                            <summary>Jaki jest typowy harmonogram i czas realizacji?</summary>
                            <p>- Decyzja 3-6 miesięcy w zależności od formalności, realizacja 4-6 miesięcy od zamówień i gotowości terenu.</p>
                        </details>
                    </div>

                    <div className="card">
                        <details>
                            <summary>Jak działa serwis i monitoring?</summary>
                            <p>- Zdalny nadzór 24/7, szkolenia operatorów i standardowa reakcja do 48 h z możliwością skrócenia zgodnie z umową.</p>
                        </details>
                    </div>

                    <div className="card">
                        <details>
                            <summary>Czy pomagacie w finansowaniu i dokumentach?</summary>
                            <p>- Tak — dobór programu (np. NFOŚiGW, FENG, Energia dla Wsi), przygotowanie wniosków i rozliczeń, wraz z załącznikami technicznymi.</p>
                        </details>
                    </div>

                    <div className="card">
                        <details>
                            <summary>Z czego składa się "technologia" w praktyce?</summary>
                            <p>- Fermentacja beztlenowa, uzdatnianie biogazu, kogeneracja (CHP) lub upgrading do biometanu, automatyka i zbiorniki stalowe umożliwiające przyszłościową rozbudowę. (<a href="/technologia.html">Więcej informacji</a>)</p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;