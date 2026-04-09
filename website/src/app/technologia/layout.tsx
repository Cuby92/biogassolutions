import { Metadata } from 'next';
import Footer from '@/components/Footer';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';

export const metadata: Metadata = {
    title: 'Technologia - fermentacja, CHP i upgrading do biometanu',
    description: 'Od substratów i fermentacji po uzdatnianie, kogenerację i zdalny monitoring 24/7 - jak działa instalacja biogazu i biometanu.'
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