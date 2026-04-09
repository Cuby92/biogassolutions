import { Metadata } from 'next';
import Footer from '@/components/Footer';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';

export const metadata: Metadata = {
    title: 'Kontakt i wycena - Biogas Solutions',
    description: 'Wyślij zapytanie o bezpłatną wycenę instalacji biogazu lub biometanu - działamy w całej Polsce i wspieramy pozyskanie dofinansowania.'
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