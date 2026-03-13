import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Realizacje biogazowni i CHP - projekty 499 kW-2 MW | Biogas Solutions",
  description: "Poznaj nasze doświadczenie w projektowaniu, budowie i modernizacji biogazowni w całej Polsce — od koncepcji i dokumentacji, po rozruch, serwis i zarządzanie eksploatacją.",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;