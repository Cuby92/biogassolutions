import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Realizacje biogazowni i CHP - projekty 499 kW-2 MW | Biogas Solutions",
  description: "Poznaj nasze doświadczenie w projektowaniu, budowie i modernizacji biogazowni w całej Polsce — od koncepcji i dokumentacji, po rozruch, serwis i zarządzanie eksploatacją.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
