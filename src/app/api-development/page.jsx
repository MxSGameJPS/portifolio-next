"use client";

import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";
import {
  PiCpuBold,
  PiDatabaseBold,
  PiPlugsBold,
  PiLockKeyBold,
  PiFileTextBold,
  PiGitBranchBold,
  PiGaugeBold,
} from "react-icons/pi";

const features = [
  {
    title: "Sistemas trocando dados sozinhos",
    description:
      "Seu ERP, loja e CRM sincronizados automaticamente. O cadastro feito em um lugar aparece no outro, sem digitação dupla nem erro de cópia.",
  },
  {
    title: "Automação de tarefas",
    description:
      "Webhooks que disparam ações: pedido novo manda e-mail, atualiza estoque e notifica no WhatsApp, sem ninguém precisar apertar um botão.",
  },
  {
    title: "APIs REST e GraphQL",
    description:
      "Construo a API do jeito que o seu projeto pede, com respostas rápidas e padronizadas para consumir na web e no mobile.",
  },
  {
    title: "Documentação clara",
    description:
      "Swagger/OpenAPI para qualquer desenvolvedor entender e consumir a API sem adivinhação, hoje e no futuro.",
  },
  {
    title: "Segurança e controle de uso",
    description:
      "Autenticação por chave ou JWT, limite de requisições e validação de dados para evitar abuso e proteger a informação que trafega.",
  },
  {
    title: "Preparada para escalar",
    description:
      "Arquitetura serverless e otimizada para aguentar picos de uso sem derrubar o sistema quando o movimento cresce.",
  },
];

const benefits = [
  {
    icon: <PiPlugsBold />,
    text: "Fim da digitação dupla: seus sistemas se atualizam sozinhos, com menos erro humano.",
  },
  {
    icon: <PiLockKeyBold />,
    text: "Integração segura, com autenticação e validação protegendo os dados que trafegam.",
  },
  {
    icon: <PiGaugeBold />,
    text: "Respostas rápidas que aguentam o crescimento do seu uso.",
  },
];

const differentials = [
  {
    icon: <PiCpuBold />,
    title: "Base moderna (Node)",
    text: "APIs em Node.js com Fastify ou Express: leves, rápidas e fáceis de manter e evoluir.",
  },
  {
    icon: <PiDatabaseBold />,
    title: "Modelagem de dados sólida",
    text: "Banco bem estruturado (PostgreSQL) para o dado ficar íntegro e a consulta ser rápida.",
  },
  {
    icon: <PiPlugsBold />,
    title: "Conecta com terceiros",
    text: "Integro pagamento, ERP, CRM, e-mail e qualquer serviço que ofereça uma API para conversar.",
  },
  {
    icon: <PiLockKeyBold />,
    title: "Segurança por padrão",
    text: "Chaves, JWT, limite de requisições e validação com Zod para a API não virar uma porta aberta.",
  },
  {
    icon: <PiFileTextBold />,
    title: "Documentada de verdade",
    text: "Swagger/OpenAPI sempre atualizado, para a sua equipe usar sem depender de mim para cada dúvida.",
  },
  {
    icon: <PiGitBranchBold />,
    title: "Escala sem dor",
    text: "Serverless e processamento em fila (workers) para crescer sem precisar reescrever tudo.",
  },
];

const methodSteps = [
  {
    title: "Mapa dos sistemas",
    description:
      "Entendo quais sistemas precisam conversar e que dados devem andar entre eles. Daqui sai o desenho da integração.",
  },
  {
    title: "Contrato da API",
    description:
      "Defino as rotas, os formatos e as regras de cada resposta, para tudo ficar previsível antes de programar.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Construo a API com respostas rápidas e padronizadas, ligando os sistemas e automatizando o que for repetitivo.",
  },
  {
    title: "Segurança & Testes",
    description:
      "Aplico autenticação, limites e validação e testo cada rota para garantir que nada quebre com dado inesperado.",
  },
  {
    title: "Documentação",
    description:
      "Entrego a documentação Swagger/OpenAPI para qualquer desenvolvedor consumir a API com clareza.",
  },
  {
    title: "Deploy & Monitoramento",
    description:
      "Publico a API em ambiente seguro e acompanho o funcionamento, ajustando performance conforme o uso cresce.",
  },
];

const trust = [
  { value: "REST & GraphQL", label: "APIs sob medida" },
  { value: "Documentada", label: "Swagger/OpenAPI" },
  { value: "2+ anos", label: "de experiência" },
];

export default function ApiDevelopmentPage() {
  return (
    <ServicePage
      eyebrow="APIs & Integrações"
      headline="Seus sistemas conversando entre si"
      subheadline="Menos trabalho manual e menos erro: seus sistemas trocam dados sozinhos, com segurança."
      description="Construo APIs e integrações que ligam seu site, app, ERP, CRM e meios de pagamento. Dados sincronizados automaticamente, documentados e seguros — o fim da planilha copiada na mão."
      heroImage={{ src: "/CriacaoDeSites/api-dev.png", alt: "Desenvolvimento de APIs e Integrações" }}
      ctaPrimary="Quero integrar meus sistemas"
      ctaNote="Consultoria gratuita · resposta em até 24h · sem compromisso"
      trust={trust}
      quote="Sistema que não conversa com os outros vira retrabalho. A integração certa faz o dado andar sozinho — e você para de digitar duas vezes."
      infoParagraphs={[
        "Uma API é a ponte entre sistemas: seu site fala com o pagamento, seu app com o banco de dados, seu ERP com a loja. Construo essa ponte para o dado andar sozinho, sem ninguém copiar na mão.",
        "Além de ligar sistemas, automatizo tarefas: um pedido novo pode disparar e-mail, dar baixa no estoque e avisar no WhatsApp. Tudo documentado e seguro, para crescer sem virar bagunça.",
      ]}
      featuresHeading="O que a API faz"
      features={features}
      benefits={benefits}
      ctaMid="Quero um orçamento"
      diffHeading="Diferenciais da integração"
      differentials={differentials}
      methodHeading="Da bagunça à integração"
      methodSubtitle="Sistemas conversando ponta a ponta"
      methodSteps={methodSteps}
      faqHeading="Dúvidas sobre APIs"
      faqItems={faqItems}
    />
  );
}
