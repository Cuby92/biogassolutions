import { Metadata } from 'next';
import Footer from '@/components/Footer';
import GSAPWrapper from '@/utils/gsap/GSAPWrapper';

export const metadata: Metadata = {
    title: 'FAQ - mikrobiogazownia i biogaz: najczęstsze pytania',
    description: 'Odpowiadamy na pytania o "pod klucz", modułowość 50 kWe, harmonogram, serwis 24/7, substraty i wsparcie finansowania.'
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