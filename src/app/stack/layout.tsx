const SITE = "https://saulopavanello.com.br";
const PAGE = `${SITE}/stack`;

export const metadata = {
  title: "Stack & Tecnologias",
  description:
    "A stack de desenvolvimento de Saulo Pavanello: React, Next.js 16, React Native, Node.js, PostgreSQL e mais. As tecnologias que uso para construir sites, apps e sistemas.",
  alternates: { canonical: "/stack" },
  openGraph: {
    title: "Stack & Tecnologias | Saulo Pavanello",
    description:
      "Front-end moderno, mobile, back-end, banco de dados e DevOps: as tecnologias que domino para entregar do MVP à aplicação corporativa.",
    url: PAGE,
    images: ["/Hero.png"],
  },
};

export default function StackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
