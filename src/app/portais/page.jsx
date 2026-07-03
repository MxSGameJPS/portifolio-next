"use client";

import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";
import {
  PiCpuBold,
  PiUserGearBold,
  PiPlugsBold,
  PiLockKeyBold,
  PiFilesBold,
  PiDeviceMobileBold,
  PiUsersThreeBold,
} from "react-icons/pi";

const features = [
  {
    title: "Cada um vê só o que é dele",
    description:
      "Login por perfil: cliente, equipe e admin acessam apenas o conteúdo e as ações que lhes pertencem, sem bagunça nem acesso indevido.",
  },
  {
    title: "Área do cliente self-service",
    description:
      "Seu cliente acompanha pedido, baixa nota e documento e abre chamado sozinho, reduzindo ligação e e-mail para a sua equipe.",
  },
  {
    title: "Portal interno para a equipe",
    description:
      "Uma intranet com as ferramentas, documentos e informações que o seu time usa no dia a dia, tudo centralizado em um lugar.",
  },
  {
    title: "Integra com seus sistemas",
    description:
      "Puxa dados do ERP, CRM ou banco para mostrar informação sempre atualizada, sem ninguém digitar de novo.",
  },
  {
    title: "Seguro por perfil",
    description:
      "Login protegido e permissões verificadas no servidor: ninguém acessa o que não deve, mesmo tentando.",
  },
  {
    title: "No computador e no celular",
    description:
      "Portal responsivo para o usuário acessar de qualquer aparelho, a qualquer hora e em qualquer lugar.",
  },
];

const benefits = [
  {
    icon: <PiUsersThreeBold />,
    text: "Menos ligação repetida: o cliente resolve sozinho no portal e seu telefone para de tocar por coisa boba.",
  },
  {
    icon: <PiLockKeyBold />,
    text: "Acesso seguro por perfil: cada usuário no seu escopo, com permissão verificada no servidor.",
  },
  {
    icon: <PiPlugsBold />,
    text: "Sempre atualizado: integrado aos seus sistemas, mostra dado real e não informação velha.",
  },
];

const differentials = [
  {
    icon: <PiCpuBold />,
    title: "Rápido e moderno",
    text: "Next.js e React para um portal ágil, não uma área logada lenta e datada dos anos 2000.",
  },
  {
    icon: <PiUserGearBold />,
    title: "Perfis e permissões",
    text: "Admin, cliente, equipe: cada papel com o seu acesso, controlado e verificado no servidor.",
  },
  {
    icon: <PiPlugsBold />,
    title: "Integra com ERP/CRM",
    text: "Dados reais do seu sistema dentro do portal, sempre atuais e sem digitação duplicada.",
  },
  {
    icon: <PiLockKeyBold />,
    title: "Seguro por padrão",
    text: "Login protegido, criptografia e proteção contra acesso indevido em cada área.",
  },
  {
    icon: <PiFilesBold />,
    title: "Documentos e downloads",
    text: "Notas, contratos e arquivos organizados e disponíveis para cada usuário na área dele.",
  },
  {
    icon: <PiDeviceMobileBold />,
    title: "Acessa de qualquer lugar",
    text: "Responsivo de verdade: funciona bem no computador e no celular sem perder função.",
  },
];

const methodSteps = [
  {
    title: "Perfis & Necessidades",
    description:
      "Definimos quem vai usar o portal (cliente, equipe, admin) e o que cada um precisa ver e fazer.",
  },
  {
    title: "Arquitetura & Acessos",
    description:
      "Planejo a estrutura de dados e as permissões, para cada perfil ter exatamente o acesso certo.",
  },
  {
    title: "Design do portal",
    description:
      "Crio telas claras para o usuário encontrar o que precisa rápido, sem manual e sem confusão.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Construo o portal com login, áreas por perfil e as funções que dão autonomia a cada usuário.",
  },
  {
    title: "Integração & Segurança",
    description:
      "Ligo o portal aos seus sistemas e aplico login seguro, permissões e criptografia.",
  },
  {
    title: "Lançamento & Suporte",
    description:
      "Publico o portal e acompanho o uso, ajustando o que for preciso conforme clientes e equipe adotam.",
  },
];

const trust = [
  { value: "Área logada", label: "por perfil de usuário" },
  { value: "Integrado", label: "aos seus sistemas" },
  { value: "2+ anos", label: "de experiência" },
];

export default function PortaisPage() {
  return (
    <ServicePage
      eyebrow="Área logada sob medida"
      headline="Um portal onde cada cliente acha o que precisa"
      subheadline="Área do cliente, intranet ou portal de conteúdo — cada usuário entra e vê só o que é dele, com segurança."
      description="Crio portais web com área logada: seu cliente acompanha pedidos e documentos, sua equipe acessa ferramentas internas, cada perfil com sua permissão. Menos ligação e e-mail, mais autonomia — integrado aos seus sistemas."
      heroImage={{ src: "/CriacaoDeSites/portals.png", alt: "Portais Web e Área do Cliente" }}
      ctaPrimary="Quero meu portal"
      ctaNote="Consultoria gratuita · resposta em até 24h · sem compromisso"
      trust={trust}
      quote="Cliente que resolve sozinho no portal é cliente satisfeito — e telefone que para de tocar por coisa repetida."
      infoParagraphs={[
        "Um portal é a área logada do seu negócio: o cliente entra e acompanha pedido, baixa documento e abre chamado; a equipe acessa as ferramentas internas. Cada um com o seu acesso, sem bagunça.",
        "Puxo os dados do seu ERP, CRM ou banco para o portal mostrar informação sempre atual, com login seguro e permissões por perfil. O resultado é menos ligação repetida e mais autonomia para o seu cliente.",
      ]}
      featuresHeading="O que o portal faz"
      features={features}
      benefits={benefits}
      ctaMid="Quero um orçamento"
      diffHeading="Diferenciais do portal"
      differentials={differentials}
      methodHeading="Do login à autonomia"
      methodSubtitle="Portal que resolve sozinho"
      methodSteps={methodSteps}
      faqHeading="Dúvidas sobre portais"
      faqItems={faqItems}
    />
  );
}
