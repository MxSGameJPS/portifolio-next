"use client";

import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";
import {
  PiCloudBold,
  PiGitBranchBold,
  PiLockKeyBold,
  PiBellRingingBold,
  PiFloppyDiskBold,
  PiGaugeBold,
  PiArrowsClockwiseBold,
} from "react-icons/pi";

const features = [
  {
    title: "No ar com estabilidade",
    description:
      "Hospedagem em provedor confiável, com o sistema rápido e disponível no momento em que o cliente precisa dele.",
  },
  {
    title: "Atualiza sem tirar do ar",
    description:
      "Deploy automático (CI/CD): novidades publicadas sem interromper quem está usando o sistema naquele momento.",
  },
  {
    title: "Cadeado de segurança (SSL)",
    description:
      "Certificado configurado. Um site sem cadeado espanta o cliente e perde posição no Google.",
  },
  {
    title: "Monitoramento e alerta",
    description:
      "Você é avisado se algo falhar, antes do cliente perceber — e não depois da reclamação chegar.",
  },
  {
    title: "Backup automático",
    description:
      "Cópia de segurança configurada para você nunca perder dado por erro humano ou acidente.",
  },
  {
    title: "Escala no pico",
    description:
      "Infraestrutura preparada para aguentar o aumento de acesso em campanhas e datas de pico sem derrubar o sistema.",
  },
];

const benefits = [
  {
    icon: <PiCloudBold />,
    text: "Sempre disponível: sistema no ar e rápido quando o cliente procura.",
  },
  {
    icon: <PiArrowsClockwiseBold />,
    text: "Atualiza sem interromper: novidades publicadas sem tirar o sistema do ar.",
  },
  {
    icon: <PiBellRingingBold />,
    text: "Você sabe antes: o monitoramento avisa o problema antes do cliente reclamar.",
  },
];

const differentials = [
  {
    icon: <PiCloudBold />,
    title: "Hospedagem certa",
    text: "Vercel, AWS ou o que o seu caso pedir, com o custo de infraestrutura sob controle.",
  },
  {
    icon: <PiGitBranchBold />,
    title: "Deploy automático (CI/CD)",
    text: "Publicação automatizada e sem downtime a cada atualização, com menos risco de erro humano.",
  },
  {
    icon: <PiLockKeyBold />,
    title: "Seguro por padrão",
    text: "SSL, headers de segurança e boas práticas configurados desde o primeiro deploy.",
  },
  {
    icon: <PiBellRingingBold />,
    title: "Monitoramento ativo",
    text: "Alertas de queda e lentidão para agir antes que o problema vire prejuízo.",
  },
  {
    icon: <PiFloppyDiskBold />,
    title: "Backup & recuperação",
    text: "Cópia automática e plano de volta ao ar rápido, para nenhum acidente virar catástrofe.",
  },
  {
    icon: <PiGaugeBold />,
    title: "Escala sob demanda",
    text: "Estrutura que cresce no pico e reduz na baixa, sem desperdício de recurso.",
  },
];

const methodSteps = [
  {
    title: "Diagnóstico da infra",
    description:
      "Avalio como seu sistema é publicado e mantido hoje, e onde estão os riscos de queda, lentidão ou custo.",
  },
  {
    title: "Ambiente & Hospedagem",
    description:
      "Escolho e configuro a hospedagem certa para o seu caso, com domínio e ambientes separados de teste e produção.",
  },
  {
    title: "Deploy automático (CI/CD)",
    description:
      "Monto a esteira de publicação para as atualizações irem ao ar de forma automática e sem interrupção.",
  },
  {
    title: "SSL & Segurança",
    description:
      "Configuro certificado, headers de segurança e boas práticas para o sistema ficar protegido no ar.",
  },
  {
    title: "Monitoramento & Backup",
    description:
      "Ativo alertas de queda e lentidão e configuro backup automático com plano de recuperação.",
  },
  {
    title: "Acompanhamento",
    description:
      "Acompanho a saúde da infraestrutura e ajusto escala e custo conforme o uso do sistema evolui.",
  },
];

const trust = [
  { value: "SSL & Uptime", label: "site seguro e no ar" },
  { value: "Deploy automático", label: "atualiza sem cair" },
  { value: "2+ anos", label: "de experiência" },
];

export default function DevopsPage() {
  return (
    <ServicePage
      eyebrow="Seu sistema no ar, sempre"
      headline="Seu sistema no ar, rápido e sem cair"
      subheadline="Hospedagem estável, cadeado de segurança e atualização sem tirar do ar — com aviso antes de qualquer problema."
      description="Cuido de colocar e manter seu sistema no ar: hospedagem, domínio, SSL, deploy automático e monitoramento. Infraestrutura estável e segura, que escala no pico e avisa você antes do cliente perceber."
      heroImage={{ src: "/CriacaoDeSites/devops.png", alt: "DevOps: Deploy, Hospedagem e Infraestrutura" }}
      ctaPrimary="Quero meu sistema estável"
      ctaNote="Consultoria gratuita · resposta em até 24h · sem compromisso"
      trust={trust}
      quote="Site fora do ar é venda perdida e confiança arranhada. Boa infraestrutura é a que ninguém percebe — porque nunca falha na hora errada."
      infoParagraphs={[
        "De nada adianta um sistema ótimo se ele cai ou fica lento. Cuido da parte que sustenta tudo: servidor confiável, domínio, cadeado de segurança e atualização publicada sem tirar o sistema do ar.",
        "Configuro monitoramento para você saber de qualquer problema antes do cliente, backup para não perder nada e uma estrutura que aguenta o pico de acesso sem derrubar a operação.",
      ]}
      featuresHeading="O que eu cuido"
      features={features}
      benefits={benefits}
      ctaMid="Quero um orçamento"
      diffHeading="Diferenciais da infraestrutura"
      differentials={differentials}
      methodHeading="Do deploy ao monitoramento"
      methodSubtitle="Infra estável e sob controle"
      methodSteps={methodSteps}
      faqHeading="Dúvidas sobre DevOps"
      faqItems={faqItems}
    />
  );
}
