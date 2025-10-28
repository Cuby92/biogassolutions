body = document.querySelector('body');
header = body.querySelector('#header');
header.innerHTML = `
<div class="glass-background"></div>

<a href="/index.html"><img class="logo" src="/images/logo.svg" alt="logo" /></a>

<nav class="nav-menu">
    <ul>
        <li><a href="/o-nas.html">O Nas</a></li>    
        <li><a href="/oferta.html">Oferta</a></li>
        <li><a href="/kontakt.html">Kontakt</a></li>
        <li><a href="/technologia.html">Technologia</a></li>
        <li><a href="/faq.html">FAQ</a></li>
        <li><a href="/realizacje.html">Realizacje</a></li>
        <li><a class="inactive-link">Kalkulator</a></li>
    </ul>
</nav>

<label class="hamburger-menu">
    <input type="checkbox">

    <ul class="sidebar-menu">
        <div class="glass-background"></div>
        
        <li><a href="/o-nas.html">O Nas</a></li>    
        <li><a href="/oferta.html">Oferta</a></li>
        <li><a href="/kontakt.html">Kontakt</a></li>
        <li><a href="/technologia.html">Technologia</a></li>
        <li><a href="/faq.html">FAQ</a></li>
        <li><a href="/realizacje.html">Realizacje</a></li>
        <li><a class="inactive-link">Kalkulator</a></li>
    </ul>
</label>`