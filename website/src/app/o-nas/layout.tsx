import { Metadata } from 'next';
import Footer from '@/components/Footer';
import GSAPWrapper from '@/utils/gsap/GSAPWrapper';

export const metadata: Metadata = {
    title: 'Biogas Solutions - Biogaz i biometan pod klucz',
    description: 'Projektujemy i budujemy instalacje biogazu i biometanu w modelu "od A do Z", wraz z m.in. doborem technologii do substratów oraz wsparciem w zakresie dofinansowania.'
};

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <GSAPWrapper>
            <main>
                { children }
            </main>
            <Footer />
        </GSAPWrapper>
    )
}

export default Layout;