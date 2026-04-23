import { Metadata } from 'next';
import Footer from '@/components/Footer';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';

export const metadata: Metadata = {
    title: 'Biogazownie i mikrobiogazownie pod klucz | Biogas Solutions',
    description: 'Projekt i budowa instalacji biogazu w Polsce - od koncepcji i pozwoleń po rozruch, serwis 24/7 i wsparcie dofinansowania (NFOŚiGW, FENG).'
}

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