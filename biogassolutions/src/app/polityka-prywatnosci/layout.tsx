import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Polityka prywatności - Biogas Solutions',
    description: 'Polityka Prywatności Biogas Solutions. Sprawdź, w jaki sposób przetwarzamy dane osobowe i wykorzystujemy pliki cookies (ciasteczka) zgodnie z wymogami RODO.'
};

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            { children }
        </main>
    );
}

export default Layout;