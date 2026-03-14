function Contact() {
    return (
        <div className="content">
            <div id="Section1">
                <h1 className="hero-header">Skontaktujmy się</h1>
                <p className="lead">Zaczynamy od krótkiej rozmowy i podstawowych danych o dostępnych materiałach organicznych oraz zapotrzebowaniu na energię — na tej podstawie przygotujemy wstępną koncepcję. Po akceptacji przechodzimy do szczegółowych założeń projektu i harmonogramu.</p>
                <a className="cta-button" href="#Section3">Skontaktuj się z nami</a>
            </div>
            <div id="main-body">
                <div id="Section2" className="card card-big">
                    <h2>W czym możemy pomóc?</h2>
                    <ul>
                        <li>Wstępne określenie mocy, dobór technologii wraz z wstępną wyceną, harmonogramem i zakresem "pod klucz".</li>
                        <li>Wsparcie w dofinansowaniu i dokumentach, w tym załączniki techniczne wymagane przez programy.</li>
                        <li>Doborze i dostawie technologii, urządzeń oraz obiektów dla rozbudowy istniejącej instalacji</li>
                        <li>Modernizacji istniejących instalacji,</li>
                        <li>Serwis i utrzymanie ruchu,</li>
                        <li>Monitoring i automatyzacja instalacji (projektowanych i istniejących)</li>
                        <li>Nadzór techniczny i audyty dla instalacji biogazowych</li>
                    </ul>
                </div>

                <div id="Section3">
                    <div id="contact-info" className="card">
                        <h2>Kontakt</h2>
                        <p>Email: <strong>biuro@biogassolutions.pl</strong></p>
                        <p>Tel.: <strong>+48 607 152 386</strong></p>
                    </div>

                    <div id="company-info" className="card">
                        <h2>Dane Firmy</h2>
                        <p>Biogas Solutions Sp. z o.o.</p>
                        <p>ul. Topolowa 27B, 62-028 Koziegłowy</p>
                        <p>NIP: 777 345 10 10</p>
                        <p>REGON: 542309232</p>
                    </div>

                    <div id="office" className="card">
                        <h2>Biuro</h2>
                        <p>Ul. Dworcowa 4b/3</p>
                        <p>62-020 Swarzędz</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;