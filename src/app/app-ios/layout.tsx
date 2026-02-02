export const metadata = {
  title: "Desenvolvimento de Apps iOS (iPhone) | Saulo Pavanello",
  description:
    "Especialista em desenvolvimento de apps iOS (iPhone/iPad). Soluções nativas em Swift de alta performance para a Apple App Store.",
  openGraph: {
    title: "Desenvolvimento de Apps iOS (iPhone) | Saulo Pavanello",
    description:
      "Aplicativos iOS premium. Design sofisticado e código robusto para os usuários mais exigentes.",
    url: "https://saulopavanello.com.br/app-ios",
    images: ["/CriacaoDeSites/ios-dev.png"],
  },
};

export default function IosLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "iOS App Development",
    provider: {
      "@type": "Person",
      name: "Saulo Pavanello",
    },
    areaServed: "Brasil",
    description:
      "Desenvolvimento de aplicativos móveis nativos para plataforma iOS (Apple).",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
