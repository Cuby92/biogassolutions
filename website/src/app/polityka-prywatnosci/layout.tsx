import { Metadata } from 'next';
import Footer from '@/components/Footer';
import GSAPWrapper from '@/utils/gsap/GSAPWrapper';

export const metadata: Metadata = {
    title: 'Polityka prywatności - Biogas Solutions',
    description: 'Polityka Prywatności Biogas Solutions. Sprawdź, w jaki sposób przetwarzamy dane osobowe i wykorzystujemy pliki cookies (ciasteczka) zgodnie z wymogami RODO.'
};

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <GSAPWrapper>
            <main>
                { children }
            </main>
            <Footer />
        </GSAPWrapper>
    );
}

export default Layout;