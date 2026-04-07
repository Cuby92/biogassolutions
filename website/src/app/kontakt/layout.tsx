import { Metadata } from 'next';
import Footer from '@/components/Footer';
import GSAPWrapper from '@/utils/gsap/GSAPWrapper';

export const metadata: Metadata = {
    title: 'Kontakt i wycena - Biogas Solutions',
    description: 'Wyślij zapytanie o bezpłatną wycenę instalacji biogazu lub biometanu - działamy w całej Polsce i wspieramy pozyskanie dofinansowania.'
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