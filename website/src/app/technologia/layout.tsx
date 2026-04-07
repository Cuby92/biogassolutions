import { Metadata } from 'next';
import Footer from '@/components/Footer';
import GSAPWrapper from '@/utils/gsap/GSAPWrapper';

export const metadata: Metadata = {
    title: 'Technologia - fermentacja, CHP i upgrading do biometanu',
    description: 'Od substratów i fermentacji po uzdatnianie, kogenerację i zdalny monitoring 24/7 - jak działa instalacja biogazu i biometanu.'
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