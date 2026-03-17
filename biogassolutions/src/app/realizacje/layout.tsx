import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Biogazownie i mikrobiogazownie pod klucz | Biogas Solutions',
    description: 'Projekt i budowa instalacji biogazu w Polsce - od koncepcji i pozwoleń po rozruch, serwis 24/7 i wsparcie dofinansowania (NFOŚiGW, FENG).'
}

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            { children }
        </main>
    );
}

export default Layout;