import { Metadata } from 'next';
import Footer from '@/components/Footer';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';

export const metadata: Metadata = {
    title: 'FAQ - mikrobiogazownia i biogaz: najczęstsze pytania',
    description: 'Odpowiadamy na pytania o "pod klucz", modułowość 50 kWe, harmonogram, serwis 24/7, substraty i wsparcie finansowania.'
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