function Header() {
    return (
        <header>
            <div className="glass-background"></div>

            <a href="./index.html"><img className="logo" src="./images/logo.svg" alt="Biogas Solutions" /></a>

            <nav className="nav-menu">
                <ul>
                    <li><a href="./o-nas.html">O Nas</a></li>    
                    <li><a href="./oferta.html">Oferta</a></li>
                    <li><a href="./realizacje.html">Realizacje</a></li>
                    <li><a href="./technologia.html">Technologia</a></li>
                    <li><a href="./faq.html">FAQ</a></li>
                    <li><a href="./kontakt.html">Kontakt</a></li>
                </ul>
            </nav>

            <label className="hamburger-menu">
                <input type="checkbox"></input>

                <ul className="sidebar-menu">
                    <div className="glass-background"></div>
                    
                    <li><a href="./o-nas.html">O Nas</a></li>    
                    <li><a href="./oferta.html">Oferta</a></li>
                    <li><a href="./realizacje.html">Realizacje</a></li>
                    <li><a href="./technologia.html">Technologia</a></li>
                    <li><a href="./faq.html">FAQ</a></li>
                    <li><a href="./kontakt.html">Kontakt</a></li>
                </ul>
            </label>
        </header>
    );
}

export default Header;