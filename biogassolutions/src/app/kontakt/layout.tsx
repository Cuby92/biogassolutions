import { Metadata } from 'next';
import './page.css';

export const metadata: Metadata = {
    title: 'Kontakt i wycena - Biogas Solutions',
    description: 'Wyślij zapytanie o bezpłatną wycenę instalacji biogazu lub biometanu - działamy w całej Polsce i wspieramy pozyskanie dofinansowania.'
};

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            { children }
        </main>
    );
}

export default Layout;