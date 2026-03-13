import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Biogas Solutions - Biogaz i biometan pod klucz',
    description: 'Projektujemy i budujemy instalacje biogazu i biometanu w modelu „od A do Z”, wraz z m.in. doborem technologii do substratów oraz wsparciem w zakresie dofinansowania.'
};

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            { children }
        </main>
    )
}

export default Layout;