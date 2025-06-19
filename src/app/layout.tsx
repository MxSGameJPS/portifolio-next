import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saulo Pavanello | Desenvolvedor Front-End",
  description:
    "Portfólio de Saulo Pavanello, Desenvolvedor Front-End especializado em React e Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased bg-[#000000]`}
        style={{
          fontFamily: `${inter.style.fontFamily}, ${jetBrainsMono.style.fontFamily}`,
        }}
      >
        {children}
      </body>
    </html>
  );
}
