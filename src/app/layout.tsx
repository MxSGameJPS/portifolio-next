import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saulopavanello.com.br"),
  title:
    "Desenvolvedor Front-End | Saulo Pavanello - React, Next.js e React Native",
  description:
    "Portfólio de Saulo Pavanello, desenvolvedor front-end especialista em React, Next.js, criação de sites e interfaces responsivas para negócios digitais.",
  keywords: [
    "desenvolvedor front-end",
    "portfólio dev",
    "React",
    "Next.js",
    "sites modernos",
    "UI/UX",
    "freelancer web",
    "Saulo Pavanello",
    "React Native",
    "Aplicativo Android",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Saulo Pavanello | Desenvolvedor Front-End",
    description: "Criação de sites modernos com React e Next.js.",
    url: "https://www.saulopavanello.com.br",
    siteName: "Saulo Pavanello",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saulo Pavanello - Desenvolvedor Front-End",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saulo Pavanello | Desenvolvedor Front-End",
    description: "Criação de sites modernos e responsivos com React e Next.js.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.saulopavanello.com.br",
  },
};


import Footer from "../components/layout/Footer";
import Header from './../components/Novo/Header/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta httpEquiv="Content-Language" content="pt-br" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`antialiased bg-[#000000]`}
        style={{
          fontFamily: `${inter.style.fontFamily}, ${jetBrainsMono.style.fontFamily}`,
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        {/* 100% privacy-first analytics */}
        <script
          data-collect-dnt="true"
          async
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
        <noscript>
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </body>
    </html>
  );
}
