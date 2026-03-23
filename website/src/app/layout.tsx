import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { DM_Sans, Poppins, Space_Grotesk, Raleway } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Realizacje biogazowni i CHP - projekty 499 kW-2 MW | Biogas Solutions",
  description: "Poznaj nasze doświadczenie w projektowaniu, budowie i modernizacji biogazowni w całej Polsce - od koncepcji i dokumentacji, po rozruch, serwis i zarządzanie eksploatacją.",
};

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--dm-sans'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--poppins'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--space-grotesk'
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--raleway'
});

function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pl" className={`${dmSans.variable} ${poppins.variable} ${spaceGrotesk.variable} ${raleway.variable}`}>
      <body>
        <Header />
          { children }
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}

export default RootLayout;