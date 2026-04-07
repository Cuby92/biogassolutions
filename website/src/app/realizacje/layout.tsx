import { Metadata } from 'next';
import Footer from '@/components/Footer';
import GSAPWrapper from '@/utils/gsap/GSAPWrapper';

export const metadata: Metadata = {
    title: 'Biogazownie i mikrobiogazownie pod klucz | Biogas Solutions',
    description: 'Projekt i budowa instalacji biogazu w Polsce - od koncepcji i pozwoleń po rozruch, serwis 24/7 i wsparcie dofinansowania (NFOŚiGW, FENG).'
}

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