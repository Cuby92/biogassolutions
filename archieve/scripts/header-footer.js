body = document.querySelector('body');
header = body.querySelector('#header');
header.innerHTML = `
<div class="glass-background"></div>

<a href="./index.html"><img class="logo" src="./images/logo.svg" alt="Biogas Solutions" /></a>

<nav class="nav-menu">
    <ul>
        <li><a href="./o-nas.html">O Nas</a></li>    
        <li><a href="./oferta.html">Oferta</a></li>
        <li><a href="./realizacje.html">Realizacje</a></li>
        <li><a href="./technologia.html">Technologia</a></li>
        <li><a href="./faq.html">FAQ</a></li>
        <li><a href="./kontakt.html">Kontakt</a></li>
    </ul>
</nav>

<label class="hamburger-menu">
    <input type="checkbox">

    <ul class="sidebar-menu">
        <div class="glass-background"></div>
        
        <li><a href="./o-nas.html">O Nas</a></li>    
        <li><a href="./oferta.html">Oferta</a></li>
        <li><a href="./realizacje.html">Realizacje</a></li>
        <li><a href="./technologia.html">Technologia</a></li>
        <li><a href="./faq.html">FAQ</a></li>
        <li><a href="./kontakt.html">Kontakt</a></li>
    </ul>
</label>`

footer = body.querySelector('#footer');
footer.innerHTML = `
<div id="footer-about">
    <img src="./images/logo.svg" class="logo" alt="logo" />
    <p>Biogas Solutions Sp. z o.o.</p>
    <p>ul. Topolowa 27B, 62-028 Koziegłowy</p>
    <p>NIP: 777 345 10 10</p>
    <p>REGON: 542309232</p>
</div>

<nav id="footer-nav">
    <ul>
        <li><a href="/index.html">Strona główna</a></li>
            <li><a href="/o-nas.html">O nas</a></li>
            <li><a href="/oferta.html">Oferta</a></li>
            <li><a href="/realizacje.html">Realizacje</a></li>            
            <li><a href="/technologia.html">Technologia</a></li>
            <li><a href="/faq.html">FAQ</a></li>
            <li><a href="/kontakt.html">Kontakt</a></li>
            <li><a href="/polityka-prywatnosci.html">Polityka prywatności</a></li>
    </ul>
</nav>

<div id="footer-offer">
    <h3><a href="oferta.html">Oferta</a></h3>
    <ul>
        <li><a href="/oferta.html#micro-plants">Mikrobiogazownie do 50kW</a></li>
        <li><a href="/oferta.html#plants">Biogazownie rolnicze i przemysłowe</a></li>
        <li><a href="/oferta.html#methane">Biometanownie (upgrading biogazu)</a></li>
        <li><a href="/oferta.html#service">Serwis i monitoring 24/7</a></li>
    </ul>
</div>

<div id="footer-contact">
    <ul>
        <li><h3><a href="/kontakt.html">Kontakt</a></h3></li>
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
</div>`