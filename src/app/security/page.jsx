"use client";

import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";
import {
  PiShieldCheckBold,
  PiLockKeyBold,
  PiUserGearBold,
  PiFileMagnifyingGlassBold,
  PiScalesBold,
  PiBellRingingBold,
  PiEyeSlashBold,
} from "react-icons/pi";

const features = [
  {
    title: "Proteção contra ataques comuns",
    description:
      "Defesa contra as invasões mais frequentes (injeção, força bruta, dados expostos), seguindo as práticas de segurança do OWASP.",
  },
  {
    title: "Login seguro",
    description:
      "Senha criptografada, autenticação forte e segundo fator (2FA) quando faz sentido, para dificultar o acesso indevido.",
  },
  {
    title: "Controle de acesso",
    description:
      "Cada usuário enxerga e faz apenas o que pode, verificado no servidor. Nada de porta aberta por engano.",
  },
  {
    title: "Auditoria de segurança",
    description:
      "Analiso login, permissões e pontos fracos e entrego um plano claro do que corrigir, organizado por prioridade.",
  },
  {
    title: "Conformidade com a LGPD",
    description:
      "Adequação do tratamento de dados à lei: consentimento, proteção e uso correto da informação do cliente.",
  },
  {
    title: "Dados criptografados",
    description:
      "Informação sensível protegida em trânsito e em repouso, para não vazar mesmo em caso de acesso indevido.",
  },
];

const benefits = [
  {
    icon: <PiShieldCheckBold />,
    text: "Ataques barrados: proteção contra as invasões mais comuns, seguindo o padrão OWASP.",
  },
  {
    icon: <PiLockKeyBold />,
    text: "Dados protegidos e LGPD: informação do cliente segura e dentro da lei.",
  },
  {
    icon: <PiEyeSlashBold />,
    text: "Invisível para o usuário: segurança forte que não atrapalha a experiência de quem usa.",
  },
];

const differentials = [
  {
    icon: <PiShieldCheckBold />,
    title: "Padrão OWASP",
    text: "Proteção baseada nas ameaças mais reais e frequentes, não em achismo ou lista genérica.",
  },
  {
    icon: <PiLockKeyBold />,
    title: "Criptografia sempre",
    text: "Senha e dado sensível cifrados, tanto em trânsito quanto em repouso no banco.",
  },
  {
    icon: <PiUserGearBold />,
    title: "Acesso por papel (RBAC)",
    text: "Permissão verificada no servidor, com cada usuário restrito ao seu próprio escopo.",
  },
  {
    icon: <PiFileMagnifyingGlassBold />,
    title: "Auditoria com plano",
    text: "Diagnóstico dos pontos fracos e o passo a passo para corrigir, priorizando o que é mais crítico.",
  },
  {
    icon: <PiScalesBold />,
    title: "Conformidade LGPD",
    text: "Tratamento de dados adequado à lei, evitando multa e dor de cabeça jurídica.",
  },
  {
    icon: <PiBellRingingBold />,
    title: "Monitoramento",
    text: "Alertas para detectar comportamento suspeito e agir antes que vire um incidente.",
  },
];

const methodSteps = [
  {
    title: "Auditoria",
    description:
      "Analiso o sistema em busca de pontos fracos: login, permissões, dados expostos e configurações de risco.",
  },
  {
    title: "Plano de correção",
    description:
      "Entrego um relatório claro, com o que corrigir e em que ordem, priorizando o que traz mais risco.",
  },
  {
    title: "Proteções & Login",
    description:
      "Implemento as defesas contra ataques comuns e reforço a autenticação com criptografia e 2FA quando cabe.",
  },
  {
    title: "Controle de acesso",
    description:
      "Configuro permissões por papel, verificadas no servidor, para cada pessoa acessar só o que é dela.",
  },
  {
    title: "LGPD & Criptografia",
    description:
      "Adequo o tratamento dos dados à lei e cifro as informações sensíveis, em trânsito e em repouso.",
  },
  {
    title: "Monitoramento contínuo",
    description:
      "Deixo alertas ativos para detectar comportamento suspeito e agir antes que vire um problema real.",
  },
];

const trust = [
  { value: "OWASP", label: "ataques comuns barrados" },
  { value: "LGPD", label: "dados em conformidade" },
  { value: "2+ anos", label: "de experiência" },
];

export default function SecurityPage() {
  return (
    <ServicePage
      eyebrow="Proteção de verdade"
      headline="Seu sistema e seus dados protegidos"
      subheadline="Barre invasão e vazamento e fique em dia com a LGPD — antes que um problema vire prejuízo."
      description="Protejo seu site, sistema e app contra os ataques mais comuns e adequo o tratamento de dados à LGPD. Auditoria, login seguro, controle de acesso e criptografia — para proteger você e a confiança dos seus clientes."
      heroImage={{ src: "/CriacaoDeSites/security.png", alt: "Segurança de Aplicações e Dados" }}
      ctaPrimary="Quero proteger meu sistema"
      ctaNote="Consultoria gratuita · resposta em até 24h · sem compromisso"
      trust={trust}
      quote="Segurança não aparece no orçamento até o dia do vazamento. Aí vira o item mais caro de todos. Prevenir é sempre mais barato."
      infoParagraphs={[
        "Todo sistema exposto na internet é alvo. Meu trabalho é dificultar ao máximo: aplico proteções contra os ataques mais comuns, login seguro e controle de quem acessa o quê, sem atrapalhar o usuário.",
        "Também cuido dos dados: senha criptografada, informação sensível protegida e tratamento adequado à LGPD. Uma auditoria mostra onde estão os pontos fracos e o que corrigir antes que virem prejuízo.",
      ]}
      featuresHeading="O que eu protejo"
      features={features}
      benefits={benefits}
      ctaMid="Quero uma auditoria"
      diffHeading="Diferenciais da segurança"
      differentials={differentials}
      methodHeading="Do risco à proteção"
      methodSubtitle="Segurança antes do prejuízo"
      methodSteps={methodSteps}
      faqHeading="Dúvidas sobre segurança"
      faqItems={faqItems}
    />
  );
}
