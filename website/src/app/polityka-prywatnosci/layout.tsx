import { Metadata } from 'next';
import Footer from '@/components/Footer';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';

export const metadata: Metadata = {
    title: 'Polityka prywatności - Biogas Solutions',
    description: 'Polityka Prywatności Biogas Solutions. Sprawdź, w jaki sposób przetwarzamy dane osobowe i wykorzystujemy pliki cookies (ciasteczka) zgodnie z wymogami RODO.'
};

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ScrollSmootherWrapper>
            <main>
                { children }
            </main>
            <Footer />
        </ScrollSmootherWrapper>
    );
}

export default Layout;