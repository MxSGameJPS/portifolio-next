import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f1f3f5] dark:bg-[#343a40] py-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col justify-between items-center mb-8 md:flex-row">
          <div className="mb-6 md:mb-0">
            <h3 className="mb-2 text-xl font-bold text-gradient">
              Saulo Pavanello
            </h3>
            <p className="mb-4 max-w-md text-secondary">
              Desenvolvedor Front-End criando experiências digitais que unem
              beleza e funcionalidade.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex mb-4 space-x-4">
              <a
                href="https://github.com/MxSGameJPS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saulopavanello/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/mxsgamejps/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
            <p className="text-sm text-secondary">
              <a
                href="mailto:contato@saulopavanello.com"
                className="transition-colors hover:text-primary"
              >
                contato@saulopavanello.com
              </a>
            </p>
          </div>
        </div>

        <div className="pt-6 text-sm text-center border-t border-gray-200 dark:border-gray-700 text-secondary">
          <p>© {currentYear} Saulo Pavanello. Todos os direitos reservados.</p>
          <div className="flex justify-center mt-2 space-x-4">
            {[
              { name: "Início", href: "#home" },
              { name: "Sobre", href: "#sobre" },
              { name: "Projetos", href: "#projetos" },
              { name: "Contato", href: "#contato" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
