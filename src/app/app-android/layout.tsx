export const metadata = {
  title: "Desenvolvimento de Apps Android",
  description:
    "Criação de aplicativos Android nativos e híbridos. Coloque sua empresa na Google Play com apps de alta performance.",
  openGraph: {
    title: "Desenvolvimento de Apps Android | Saulo Pavanello",
    description:
      "Desenvolvimento de aplicativos móveis para Android. Soluções focadas em performance, UX e engajamento.",
    url: "https://saulopavanello.com.br/app-android",
    images: ["/CriacaoDeSites/android-dev.png"],
  },
};

export default function AndroidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Android App Development",
    provider: {
      "@type": "Person",
      name: "Saulo Pavanello",
    },
    areaServed: "Brasil",
    description:
      "Desenvolvimento de aplicativos móveis nativos para plataforma Android.",
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
