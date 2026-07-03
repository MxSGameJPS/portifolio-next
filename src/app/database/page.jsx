"use client";

import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";
import {
  PiDatabaseBold,
  PiGaugeBold,
  PiArrowsClockwiseBold,
  PiLockKeyBold,
  PiFloppyDiskBold,
  PiChartBarBold,
  PiShieldCheckBold,
} from "react-icons/pi";

const features = [
  {
    title: "Estrutura que evita bagunça",
    description:
      "Modelagem que elimina dado duplicado e mantém tudo consistente, mesmo com o volume de informação crescendo.",
  },
  {
    title: "Consulta rápida",
    description:
      "Índices e queries otimizadas para o sistema responder rápido, sem tela travando à espera do dado carregar.",
  },
  {
    title: "Migração sem perder nada",
    description:
      "Levo seus dados de planilha ou sistema antigo para o novo banco de forma organizada e segura, sem misturar informação.",
  },
  {
    title: "Backup automático",
    description:
      "Rotina de backup e recuperação configurada para você não perder informação por erro humano ou acidente.",
  },
  {
    title: "Segurança e LGPD",
    description:
      "Acesso controlado, criptografia e boas práticas para proteger dados sensíveis e cumprir a lei de proteção de dados.",
  },
  {
    title: "Pronto para crescer",
    description:
      "Banco preparado para aguentar mais dados e mais acessos sem perder performance ao longo do tempo.",
  },
];

const benefits = [
  {
    icon: <PiDatabaseBold />,
    text: "Dado íntegro e sem duplicidade: informação confiável e fácil de consultar.",
  },
  {
    icon: <PiGaugeBold />,
    text: "Sistema mais rápido: consulta otimizada tira a lentidão que espanta o usuário.",
  },
  {
    icon: <PiShieldCheckBold />,
    text: "Protegido e com backup automático, para você dormir tranquilo.",
  },
];

const differentials = [
  {
    icon: <PiDatabaseBold />,
    title: "PostgreSQL & serverless",
    text: "Banco relacional robusto ou serverless (Neon, Supabase) conforme o seu caso e volume de dados.",
  },
  {
    icon: <PiGaugeBold />,
    title: "Performance de verdade",
    text: "Análise de gargalo, índice e query afinada para acelerar exatamente o que está lento hoje.",
  },
  {
    icon: <PiArrowsClockwiseBold />,
    title: "Migração segura",
    text: "Levo os dados antigos para o novo modelo sem perder nem misturar informação no caminho.",
  },
  {
    icon: <PiLockKeyBold />,
    title: "Segurança & LGPD",
    text: "Acesso por papel, criptografia e proteção de dados sensíveis, dentro da lei.",
  },
  {
    icon: <PiFloppyDiskBold />,
    title: "Backup & recuperação",
    text: "Cópia automática e plano de recuperação para nunca ficar refém de um acidente.",
  },
  {
    icon: <PiChartBarBold />,
    title: "Preparado para escala",
    text: "Estrutura que segura o crescimento de dados e de acessos sem perder velocidade.",
  },
];

const methodSteps = [
  {
    title: "Diagnóstico",
    description:
      "Analiso o banco atual (ou o seu cenário) para entender o volume, os gargalos e o que precisa ser resolvido.",
  },
  {
    title: "Modelagem",
    description:
      "Desenho a estrutura das tabelas e relações para eliminar duplicidade e garantir integridade dos dados.",
  },
  {
    title: "Otimização",
    description:
      "Crio índices e ajusto consultas para o sistema responder rápido, mesmo com muito dado.",
  },
  {
    title: "Migração",
    description:
      "Transfiro seus dados de planilha ou sistema antigo para o novo banco, de forma organizada e sem perdas.",
  },
  {
    title: "Backup & Segurança",
    description:
      "Configuro backup automático, controle de acesso e criptografia para proteger a informação.",
  },
  {
    title: "Monitoramento",
    description:
      "Acompanho a performance ao longo do tempo e ajusto conforme o volume de dados e de acessos cresce.",
  },
];

const trust = [
  { value: "PostgreSQL", label: "relacional & serverless" },
  { value: "Backup automático", label: "dados protegidos" },
  { value: "2+ anos", label: "de experiência" },
];

export default function DatabasePage() {
  return (
    <ServicePage
      eyebrow="Dados organizados e rápidos"
      headline="Seus dados organizados, rápidos e seguros"
      subheadline="Banco bem estruturado é sistema veloz, sem dado duplicado e pronto para crescer sem travar."
      description="Modelo, otimizo e cuido do banco de dados por trás do seu sistema. Consulta rápida, informação íntegra, backup automático e segurança — a base sólida que evita lentidão e dor de cabeça."
      heroImage={{ src: "/CriacaoDeSites/database.png", alt: "Modelagem e Gestão de Banco de Dados" }}
      ctaPrimary="Quero organizar meus dados"
      ctaNote="Consultoria gratuita · resposta em até 24h · sem compromisso"
      trust={trust}
      quote="Sistema lento quase sempre tem um banco mal cuidado por trás. Organizar o dado é o que faz tudo voar."
      infoParagraphs={[
        "Um banco bem modelado é a diferença entre um sistema rápido e um que trava. Organizo suas informações para evitar duplicidade, manter a integridade e deixar as consultas voando.",
        "Também cuido do que já existe: otimizo o que está lento, migro dados de planilha ou sistema antigo sem perder nada e configuro backup automático para você nunca ficar refém de um acidente.",
      ]}
      featuresHeading="O que eu cuido"
      features={features}
      benefits={benefits}
      ctaMid="Quero um orçamento"
      diffHeading="Diferenciais do seu banco"
      differentials={differentials}
      methodHeading="Do caos à base sólida"
      methodSubtitle="Dados rápidos, íntegros e seguros"
      methodSteps={methodSteps}
      faqHeading="Dúvidas sobre banco de dados"
      faqItems={faqItems}
    />
  );
}
