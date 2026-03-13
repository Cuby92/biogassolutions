import Link from "next/link";

function Header() {
    return (
        <header>
            <div className="glass-background"></div>

            <Link href="/index"><img className="logo" src="/img/brand/logo.svg" alt="Biogas Solutions" /></Link>

            <nav className="nav-menu">
                <ul>
                    <li><Link href="/o-nas">O Nas</Link></li>
                    <li><Link href="/oferta">Oferta</Link></li>
                    <li><Link href="/realizacje">Realizacje</Link></li>
                    <li><Link href="/technologia">Technologia</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                    <li><Link href="/kontakt">Kontakt</Link></li>
                </ul>
            </nav>

            <label className="hamburger-menu">
                <input type="checkbox"></input>

                <ul className="sidebar-menu">
                    <div className="glass-background"></div>
                    
                    <li><Link href="/o-nas">O Nas</Link></li>    
                    <li><Link href="/oferta">Oferta</Link></li>
                    <li><Link href="/realizacje">Realizacje</Link></li>
                    <li><Link href="/technologia">Technologia</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                    <li><Link href="/kontakt">Kontakt</Link></li>
                </ul>
            </label>
        </header>
    );
}

export default Header;