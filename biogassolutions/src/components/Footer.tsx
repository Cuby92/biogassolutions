import Link from "next/link";

function Footer() {
    return (
        <footer>
            <div id="footer-about">
            <img src="/img/brand/logo.svg" className="logo" alt="logo" />
            <p>Biogas Solutions Sp. z o.o.</p>
            <p>ul. Topolowa 27B, 62-028 Koziegłowy</p>
            <p>NIP: 777 345 10 10</p>
            <p>REGON: 542309232</p>
        </div>

        <nav id="footer-nav">
            <ul>
                <li><Link href="/index">Strona główna</Link></li>
                <li><Link href="/o-nas">O nas</Link></li>
                <li><Link href="/oferta">Oferta</Link></li>
                <li><Link href="/realizacje">Realizacje</Link></li>            
                <li><Link href="/technologia">Technologia</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/kontakt">Kontakt</Link></li>
                <li><Link href="/polityka-prywatnosci">Polityka prywatności</Link></li>
            </ul>
        </nav>

        <div id="footer-offer">
            <h3><a href="oferta.html">Oferta</a></h3>
            <ul>
                <li><Link href="/oferta.html#micro-plants">Mikrobiogazownie do 50kW</Link></li>
                <li><Link href="/oferta.html#plants">Biogazownie rolnicze i przemysłowe</Link></li>
                <li><Link href="/oferta.html#methane">Biometanownie (upgrading biogazu)</Link></li>
                <li><Link href="/oferta.html#service">Serwis i monitoring 24/7</Link></li>
            </ul>
        </div>

        <div id="footer-contact">
            <ul>
                <li><h3><Link href="/kontakt">Kontakt</Link></h3></li>
                <li>tel. +48 607 152 386</li>
                <li>email: biuro@biogassolutions.pl</li>
            </ul>
        </div>

        <div id="footer-copyright">
            <p id="brief-description">Projektujemy i budujemy instalacje biogazu i biometanu w modelu „od A do Z”, wspierając transformację energetyczną w Polsce i Europie.</p>
            <p>© 2025 Biogas Solutions Sp. z o.o. Wszelkie prawa zastrzeżone</p>
            <details>
                <summary>Użyte ikony (licencje)</summary>

                <a href="https://www.flaticon.com/free-icons/power-plant" title="power plant icons">Power plant icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/biogas" title="biogas icons">Biogas icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/methane" title="methane icons">Methane icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/from-a-to-z" title="from a to z icons">From a to z icons created by Prosymbols Premium - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/guarantee" title="guarantee icons">Guarantee icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/processor" title="processor icons">Processor icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/monitor" title="monitor icons">Monitor icons created by Freepik - Flaticon</a>
            </details>
        </div>
        </footer>
    )
}

export default Footer;