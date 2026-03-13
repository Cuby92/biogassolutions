import { Metadata } from 'next';
import './page.css';

export const metadata: Metadata = {
    title: '',
    description: ''
};

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>

        </main>
    );
}

export default Layout;