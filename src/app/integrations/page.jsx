"use client";

import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";
import {
  PiCpuBold,
  PiPlugsBold,
  PiArrowsClockwiseBold,
  PiLockKeyBold,
  PiChatCircleTextBold,
  PiChartBarBold,
  PiClockCountdownBold,
  PiShieldCheckBold,
} from "react-icons/pi";

const features = [
  {
    title: "Fim da digitação dupla",
    description:
      "O que entra em um sistema aparece no outro automaticamente. Cadastro, pedido e status sempre sincronizados, sem cópia manual.",
  },
  {
    title: "Processos no automático",
    description:
      "Pagou, o sistema dá baixa no estoque, gera a nota, manda e-mail e avisa no WhatsApp — sozinho, sem ninguém empurrar.",
  },
  {
    title: "Liga o que você já usa",
    description:
      "Pagamento, ERP, CRM, e-mail, WhatsApp, planilhas e marketplaces conectados, sem precisar trocar suas ferramentas.",
  },
  {
    title: "Confiável mesmo se algo oscilar",
    description:
      "Filas e re-tentativa garantem que a integração não perca dado caso um serviço caia por um instante.",
  },
  {
    title: "Só o dado necessário, com segurança",
    description:
      "Autenticação e validação em cada ponto: trafega apenas o preciso, sempre protegido.",
  },
  {
    title: "Sob medida, sem mensalidade por tarefa",
    description:
      "As regras exatas do seu processo, sem limite de tarefa nem mensalidade que cresce a cada automação, como nas plataformas prontas.",
  },
];

const benefits = [
  {
    icon: <PiPlugsBold />,
    text: "Ferramentas conectadas: o que você já usa passa a trabalhar junto, sem ilha de informação.",
  },
  {
    icon: <PiClockCountdownBold />,
    text: "Tempo de volta: tarefa repetitiva vira automática e sua equipe foca no que importa.",
  },
  {
    icon: <PiShieldCheckBold />,
    text: "Confiável e seguro: dados protegidos e integração que não perde informação.",
  },
];

const differentials = [
  {
    icon: <PiCpuBold />,
    title: "Automação sob medida",
    text: "As regras do seu processo, não um fluxo genérico de plataforma pronta que quase serve.",
  },
  {
    icon: <PiPlugsBold />,
    title: "Conecta com qualquer API",
    text: "Pagamento, ERP, CRM, marketplace: se a ferramenta tem API, eu integro.",
  },
  {
    icon: <PiArrowsClockwiseBold />,
    title: "Sincronização confiável",
    text: "Filas e re-tentativa para o dado nunca se perder no caminho entre um sistema e outro.",
  },
  {
    icon: <PiLockKeyBold />,
    title: "Seguro por padrão",
    text: "Autenticação e validação protegendo cada troca de dado entre as ferramentas.",
  },
  {
    icon: <PiChatCircleTextBold />,
    title: "Avisa seu cliente sozinho",
    text: "WhatsApp e e-mail automáticos em cada etapa, disparados na hora certa do processo.",
  },
  {
    icon: <PiChartBarBold />,
    title: "Menos erro, mais controle",
    text: "Sem cópia manual, os números batem e você acompanha o processo do começo ao fim.",
  },
];

const methodSteps = [
  {
    title: "Mapa do processo",
    description:
      "Entendo como sua operação funciona hoje e onde o trabalho manual repetido está tomando tempo e gerando erro.",
  },
  {
    title: "Pontos de integração",
    description:
      "Defino quais ferramentas precisam conversar e que dados devem andar entre elas, e em que momento.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Construo as conexões e as automações, ligando os sistemas e transformando tarefa manual em fluxo automático.",
  },
  {
    title: "Filas & Segurança",
    description:
      "Aplico filas, re-tentativa e validação para a integração ser confiável e segura, mesmo sob instabilidade.",
  },
  {
    title: "Testes ponta a ponta",
    description:
      "Simulo o processo inteiro para garantir que o dado ande certo do início ao fim, sem furo.",
  },
  {
    title: "Ativação & Monitoramento",
    description:
      "Ligo a automação e acompanho o funcionamento, ajustando conforme o volume e o processo evoluem.",
  },
];

const trust = [
  { value: "Automação", label: "tarefas no automático" },
  { value: "Sob medida", label: "sem mensalidade por tarefa" },
  { value: "2+ anos", label: "de experiência" },
];

export default function IntegrationsPage() {
  return (
    <ServicePage
      eyebrow="Sistemas & Automação"
      headline="Suas ferramentas trabalhando juntas, sozinhas"
      subheadline="Chega de copiar dado de um lugar para o outro: seus sistemas se conversam e as tarefas repetitivas rodam sozinhas."
      description="Ligo as ferramentas que você já usa — pagamento, ERP, CRM, e-mail, WhatsApp, planilhas — para trocarem dados automaticamente. Menos trabalho manual, menos erro e processos que rodam sem ninguém empurrar."
      heroImage={{ src: "/CriacaoDeSites/integrations.png", alt: "Integração de Sistemas e Automação" }}
      ctaPrimary="Quero automatizar"
      ctaNote="Consultoria gratuita · resposta em até 24h · sem compromisso"
      trust={trust}
      quote="Cada dado digitado duas vezes é tempo perdido e erro esperando para acontecer. Integrar é fazer o trabalho repetitivo desaparecer."
      infoParagraphs={[
        "Sua operação usa várias ferramentas que não conversam: o pedido chega em um lugar, o estoque está em outro, o cliente é avisado na mão. Ligo tudo para o dado andar sozinho entre elas.",
        "Além de conectar, automatizo o processo: pagamento aprovado dá baixa no estoque, gera nota, manda e-mail e avisa no WhatsApp — sem ninguém repetir tarefa. Confiável, seguro e do jeito do seu fluxo.",
      ]}
      featuresHeading="O que fica automático"
      features={features}
      benefits={benefits}
      ctaMid="Quero um orçamento"
      diffHeading="Diferenciais da integração"
      differentials={differentials}
      methodHeading="Do manual ao automático"
      methodSubtitle="Processos rodando sozinhos"
      methodSteps={methodSteps}
      faqHeading="Dúvidas sobre integração"
      faqItems={faqItems}
    />
  );
}
