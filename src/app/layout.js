import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://saulopavanello.com.br"),
  title: {
    default: "Saulo Pavanello | Engenheiro de Software FullStack",
    template: "%s | Saulo Pavanello",
  },
  description:
    "Desenvolvedor FullStack Especialista (React, Next.js, Node.js). Transformo ideias complexas em soluções digitais de alta performance para o seu negócio.",
  keywords: [
    "Desenvolvedor FullStack",
    "React",
    "Next.js",
    "Node.js",
    "Engenheiro de Software",
    "Criação de Sites",
    "Aplicativos Mobile",
    "Saulo Pavanello",
    "Portfólio",
  ],
  authors: [{ name: "Saulo Pavanello" }],
  creator: "Saulo Pavanello",
  publisher: "Saulo Pavanello",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/Logo/logohorizontal.png",
    shortcut: "/Logo/logohorizontal.png",
    apple: "/Logo/logohorizontal.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://saulopavanello.com.br",
    title: "Saulo Pavanello | Engenheiro de Software FullStack",
    description:
      "Transformo desafios de negócio em software de ponta. Especialista em React, React Native e Arquitetura de Sistemas.",
    siteName: "Saulo Pavanello Portfólio",
    images: [
      {
        url: "/Hero.png", // Using the Hero image as default OG Image
        width: 1200,
        height: 630,
        alt: "Saulo Pavanello - FullStack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saulo Pavanello | Engenheiro de Software FullStack",
    description:
      "Desenvolvedor FullStack focado em React, Next.js e Mobile. Vamos construir o futuro do seu negócio.",
    images: ["/Hero.png"],
    creator: "@saulopavanello",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
