import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SimpleAnalytics } from "@simpleanalytics/next";
import Script from "next/script";

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
    default: "Saulo Pavanello | Software Engineer",
    template: "%s | Saulo Pavanello",
  },
  alternates: {
    canonical: "/",
  },
  description:
    "Software Engineer focado em SaaS, sistemas web, aplicativos mobile, APIs, IA e produtos digitais sob medida. Baseado em Dois Irmãos (RS), com atendimento remoto para todo o Brasil.",
  applicationName: "Saulo Pavanello",
  category: "technology",
  keywords: [
    "Software Engineer",
    "Engenheiro de Software",
    "SaaS",
    "Sistemas Web",
    "React",
    "Next.js",
    "Node.js",
    "React Native",
    "APIs",
    "Inteligência Artificial",
    "Desenvolvimento de Software sob Medida",
    "Saulo Pavanello",
    "Portfólio",
  ],
  authors: [{ name: "Saulo Pavanello", url: "https://saulopavanello.com.br" }],
  creator: "Saulo Pavanello",
  publisher: "Saulo Pavanello",
  formatDetection: { telephone: false, email: false, address: false },
  manifest: "/manifest.webmanifest",
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
    title: "Saulo Pavanello | Software Engineer",
    description:
      "Eu construo software para negócios que querem crescer. SaaS, sistemas web, aplicativos, APIs e experiências digitais com foco em resultado real.",
    siteName: "Saulo Pavanello",
    images: [
      {
        url: "/ogimage.png",
        width: 1731,
        height: 909,
        type: "image/png",
        alt: "Saulo Pavanello — Software Engineer | SaaS, sistemas web, aplicativos e APIs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saulo Pavanello | Software Engineer",
    description:
      "Eu construo software para negócios que querem crescer. SaaS, sistemas web, aplicativos, APIs e experiências digitais.",
    images: ["/ogimage.png"],
    creator: "@saulopavanello",
  },
};

export const viewport = {
  themeColor: "#f5f1eb",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const SITE = "https://saulopavanello.com.br";
  const sameAs = [
    "https://github.com/MxSGameJPS",
    "https://www.linkedin.com/in/saulo-pavanello/",
    "https://www.instagram.com/saulopavanello.tech/",
  ];

  // Service-area business: no public street address, just the base city plus
  // the cities actively served (Vale do Sinos / Serra Gaúcha, RS).
  const baseCity = { "@type": "City", name: "Dois Irmãos", addressRegion: "RS", addressCountry: "BR" };
  const servedCities = [
    "Dois Irmãos",
    "Novo Hamburgo",
    "São Leopoldo",
    "Sapiranga",
    "Campo Bom",
    "Ivoti",
    "Estância Velha",
    "Sapucaia do Sul",
    "Caxias do Sul",
  ].map((name) => ({ "@type": "City", name, addressRegion: "RS", addressCountry: "BR" }));

  // Connected @graph: search engines and AI summarizers resolve the @id links,
  // building one entity model (person + site + service + real reviews).
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE}/#person`,
        name: "Saulo Pavanello",
        url: SITE,
        jobTitle: "Software Engineer",
        sameAs,
        knowsAbout: [
          "React",
          "Next.js",
          "Node.js",
          "React Native",
          "System Architecture",
          "Artificial Intelligence",
          "SEO",
        ],
        image: `${SITE}/ogimage.png`,
        description:
          "Software Engineer focado em SaaS, sistemas web, aplicativos, APIs e produtos digitais de alta performance.",
        homeLocation: baseCity,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "Saulo Pavanello — Software Engineer",
        inLanguage: "pt-BR",
        publisher: { "@id": `${SITE}/#person` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE}/#service`,
        name: "Saulo Pavanello — Desenvolvimento de Software",
        url: SITE,
        image: `${SITE}/ogimage.png`,
        description:
          "Desenvolvimento de SaaS, sistemas web, aplicativos mobile, APIs e produtos digitais sob medida.",
        founder: { "@id": `${SITE}/#person` },
        priceRange: "$$",
        sameAs,
        areaServed: [...servedCities, { "@type": "Country", name: "Brasil" }],
        knowsAbout: [
          "Desenvolvimento Web",
          "Desenvolvimento Mobile",
          "Desenvolvimento Backend",
          "Inteligência Artificial",
          "UI/UX",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Soluções de Desenvolvimento",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Desenvolvimento Web",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS e Sistemas Web" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Pages de Alta Conversão" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce e Lojas Virtuais" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dashboards e Portais" } },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Desenvolvimento Mobile",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aplicativos Android" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aplicativos iOS" } },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Backend, APIs e Integrações",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "APIs REST e Integrações" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Modelagem e Gestão de Banco de Dados" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automação e Inteligência Artificial" } },
              ],
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://scripts.simpleanalyticscdn.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://scripts.simpleanalyticscdn.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SimpleAnalytics />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17926381242"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17926381242');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
