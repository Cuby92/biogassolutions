import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '',
    description: ''
};

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            { children }
        </main>
    );
}

export default Layout;