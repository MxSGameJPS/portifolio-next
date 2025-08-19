import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-gradient-to-b from-[#000000] via-[#4D0000] to-[#000000] text-[#F5F5F5] border-t border-[#B8860B]/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between mb-8 md:flex-row">
          <div className="mb-6 md:mb-0">
            <h3 className="mb-2 text-xl font-bold bg-gradient-to-r from-[#B8860B] via-[#C0C0C0] to-[#B8860B] bg-clip-text text-transparent">
              Saulo Pavanello
            </h3>
            <p className="max-w-md mb-4 text-[#C0C0C0]">
              Desenvolvedor Fullstack e Mobile criando experiências digitais que
              unem beleza e funcionalidade.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex mb-4 space-x-4">
              <a
                href="https://github.com/MxSGameJPS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-colors text-[#C0C0C0] hover:text-[#B8860B]"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saulopavanello/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-colors text-[#C0C0C0] hover:text-[#B8860B]"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/mxsgamejps/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-colors text-[#C0C0C0] hover:text-[#B8860B]"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
            <p className="text-sm text-[#C0C0C0]">
              <a
                href="mailto:contato@saulopavanello.com"
                className="transition-colors hover:text-[#B8860B]"
              >
                saulopavanello@saulopavanello.com
              </a>
            </p>
          </div>
        </div>

        <div className="pt-6 text-sm text-center border-t border-[#B8860B]/30 text-[#C0C0C0]">
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
                className="transition-colors hover:text-[#B8860B]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Bloco de divulgação E-goi */}
      <div className="flex justify-center mt-8">
        <a
          target="_blank"
          href="https://www.e-goi.com/br/email-marketing-gratis/?utm_medium=referral&utm_campaign=plano-5001&utm_content=rodape.site"
          rel="noopener"
        >
          <img
            src="https://eg-e-goi-com.b-cdn.net/5001/footer-5001-pt-br.png"
            alt="Rodapé E-goi"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </a>
      </div>
    </footer>
  );
}
