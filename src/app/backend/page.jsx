"use client";

import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";
import {
  PiCpuBold,
  PiDatabaseBold,
  PiLockKeyBold,
  PiPlugsBold,
  PiFileTextBold,
  PiGitBranchBold,
  PiGaugeBold,
  PiShieldCheckBold,
} from "react-icons/pi";

const features = [
  {
    title: "Guarda e organiza seus dados",
    description:
      "Banco de dados bem modelado (PostgreSQL) para a informação ficar íntegra e a consulta ser rápida, mesmo com muito dado acumulado.",
  },
  {
    title: "Login e permissões",
    description:
      "Quem entra e o que cada um pode ver e fazer. Controle de acesso por papel, para cada pessoa enxergar apenas o que é dela.",
  },
  {
    title: "Regras do seu negócio",
    description:
      "A lógica que torna o seu sistema único — cálculo, fluxo, validação — programada do jeito exato que a sua operação funciona.",
  },
  {
    title: "Automação e processamento",
    description:
      "Tarefas rodando em segundo plano: e-mails, relatórios, filas e rotinas agendadas, sem travar a tela do usuário.",
  },
  {
    title: "Segurança de dados",
    description:
      "Senha criptografada, validação de entrada e defesa contra ataques comuns para proteger você e os seus clientes.",
  },
  {
    title: "Pronto para escalar",
    description:
      "Arquitetura que aguenta o crescimento de uso sem cair e sem exigir reescrever o sistema do zero.",
  },
];

const benefits = [
  {
    icon: <PiDatabaseBold />,
    text: "Dados seguros e organizados: informação íntegra, protegida e fácil de consultar.",
  },
  {
    icon: <PiLockKeyBold />,
    text: "Acesso controlado: cada usuário vê só o que pode, com permissões verificadas no servidor.",
  },
  {
    icon: <PiGaugeBold />,
    text: "Aguenta o crescimento: nasce pronto para mais usuários e mais funções.",
  },
];

const differentials = [
  {
    icon: <PiCpuBold />,
    title: "Node.js moderno",
    text: "Backend em Node com Fastify ou Express: leve, rápido e fácil de evoluir com o tempo.",
  },
  {
    icon: <PiDatabaseBold />,
    title: "Modelagem sólida",
    text: "Estrutura de banco pensada para performance e integridade, não improvisada no meio do caminho.",
  },
  {
    icon: <PiLockKeyBold />,
    title: "Segurança por padrão",
    text: "JWT, criptografia, controle de acesso por papel e validação com Zod desde a primeira linha.",
  },
  {
    icon: <PiPlugsBold />,
    title: "Integra com tudo",
    text: "Conversa com meios de pagamento, ERP, CRM e outras APIs sem gambiarra nem retrabalho.",
  },
  {
    icon: <PiFileTextBold />,
    title: "Código documentado",
    text: "Organizado e documentado, para a manutenção não depender de uma única pessoa.",
  },
  {
    icon: <PiGitBranchBold />,
    title: "Preparado para escalar",
    text: "Serverless, cache e filas para o sistema crescer sem retrabalho e sem cair no pico.",
  },
];

const methodSteps = [
  {
    title: "Entendimento & Regras",
    description:
      "Mapeio como sua operação funciona e quais regras o sistema precisa aplicar. É a base de tudo que vem depois.",
  },
  {
    title: "Modelagem de dados",
    description:
      "Desenho a estrutura do banco para a informação ficar íntegra, sem duplicidade e com consulta rápida.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Programo as regras de negócio, o login, as permissões e as automações que sustentam o seu produto.",
  },
  {
    title: "Segurança & Testes",
    description:
      "Aplico criptografia, controle de acesso e validação, e testo os fluxos críticos com dados inesperados.",
  },
  {
    title: "Documentação",
    description:
      "Deixo o código organizado e documentado, para qualquer desenvolvedor dar manutenção depois.",
  },
  {
    title: "Deploy & Monitoramento",
    description:
      "Publico em ambiente seguro e acompanho o funcionamento, ajustando performance conforme o uso cresce.",
  },
];

const trust = [
  { value: "Node & PostgreSQL", label: "base sólida" },
  { value: "Escalável", label: "cresce com você" },
  { value: "2+ anos", label: "de experiência" },
];

export default function BackendPage() {
  return (
    <ServicePage
      eyebrow="O motor do seu sistema"
      headline="O backend que faz seu sistema funcionar"
      subheadline="A parte invisível que guarda seus dados, aplica as regras e aguenta o crescimento — feita com segurança."
      description="Construo o backend por trás do seu site ou app: banco de dados, login, permissões, pagamento e automações. A engenharia que ninguém vê, mas que segura a operação de pé e pronta para escalar."
      heroImage={{ src: "/CriacaoDeSites/backend.png", alt: "Desenvolvimento Backend e Sistemas" }}
      ctaPrimary="Quero um backend sólido"
      ctaNote="Consultoria gratuita · resposta em até 24h · sem compromisso"
      trust={trust}
      quote="O backend é o que o cliente não vê — e é justamente o que decide se o sistema aguenta o dia real de uso."
      infoParagraphs={[
        "O backend é o motor invisível: guarda os dados, decide quem pode fazer o quê e processa login, pagamento e pedidos. Construo esse motor para ser rápido, seguro e organizado.",
        "Penso em escala desde o começo. O sistema nasce preparado para receber mais usuários e novas funções sem precisar ser refeito, com código limpo que qualquer desenvolvedor consegue manter depois.",
      ]}
      featuresHeading="O que o backend faz"
      features={features}
      benefits={benefits}
      ctaMid="Quero um orçamento"
      diffHeading="Diferenciais do backend"
      differentials={differentials}
      methodHeading="Da regra ao sistema no ar"
      methodSubtitle="Engenharia que segura a operação"
      methodSteps={methodSteps}
      faqHeading="Dúvidas sobre backend"
      faqItems={faqItems}
    />
  );
}
