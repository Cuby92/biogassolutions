import { Metadata } from 'next';
import Footer from '@/components/Footer';
import GSAPWrapper from '@/utils/gsap/GSAPWrapper';

export const metadata: Metadata = {
    title: 'Oferta - Mikrobiogazownie, biogazownie i biometanownie',
    description: 'Jedna oferta - wiele możliwości: 50 kW, 50-499 kW, >500 kW, upgrading do biometanu, doradztwo finansowe i techniczne, serwis 24/7.'
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