import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SimpleAnalytics } from "@simpleanalytics/next";

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
    default: "Desenvolvimento de Sites e Apps",
    template: "%s | Saulo Pavanello",
  },
  alternates: {
    canonical: "./",
  },
  description:
    "Especialista em Desenvolvimento de Sites, Criação de Apps e Sistemas Web. Transformo ideias em software de alta performance. React, Next.js e Node.js.",
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
  verification: {
    other: {
      "msvalidate.01": "8276A0BE06EB4F455FC55062BF0C023A",
    },
  },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saulo Pavanello",
    url: "https://saulopavanello.com.br",
    jobTitle: "Engenheiro de Software FullStack",
    sameAs: [
      "https://github.com/MxSGameJPS",
      "https://www.linkedin.com/in/saulo-pavanello",
      "https://www.instagram.com/saulopavanello",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "React Native",
      "System Architecture",
      "SEO",
    ],
    image: "https://saulopavanello.com.br/Hero.png",
    description:
      "Desenvolvedor FullStack Especialista. Transformo ideias complexas em soluções digitais de alta performance.",
  };

  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SimpleAnalytics />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
