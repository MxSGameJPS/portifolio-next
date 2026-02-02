export const metadata = {
  title: "Desenvolvimento de Web Apps & Sistemas | Saulo Pavanello",
  description:
    "Criação de Web Apps e Sistemas Personalizados com React, Next.js e Node.js. Soluções escaláveis e de alta performance para o seu negócio.",
  openGraph: {
    title: "Desenvolvimento de Web Apps & Sistemas | Saulo Pavanello",
    description:
      "Transforme processos complexos em softwares inteligentes. Desenvolvimento sob medida para máxima eficiência.",
    url: "https://saulopavanello.com.br/web-apps",
    images: ["/CriacaoDeSites/hero.png"],
  },
};

export default function WebAppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Application Development",
    provider: {
      "@type": "Person",
      name: "Saulo Pavanello",
    },
    areaServed: "Brasil",
    description:
      "Desenvolvimento de aplicações web complexas, dashboards e sistemas de gestão personalizados.",
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
