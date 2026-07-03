"use client";

import ServicePage from "../_services/ServicePage";
import { faqItems } from "./data";
import {
  PiChartBarBold,
  PiPlugsBold,
  PiClockBold,
  PiLockKeyBold,
  PiCpuBold,
  PiCodeBold,
  PiChartLineUpBold,
  PiClockCountdownBold,
  PiDeviceMobileBold,
} from "react-icons/pi";

const features = [
  {
    title: "Seus números numa tela só",
    description:
      "Vendas, metas, custos e estoque reunidos em gráficos claros, sem você caçar informação espalhada em várias planilhas.",
  },
  {
    title: "Atualiza sozinho",
    description:
      "Dados em tempo real ou atualização automática. Fim de montar relatório na mão todo fim de mês.",
  },
  {
    title: "Junta suas fontes de dados",
    description:
      "Integro sistema, banco, planilha, ERP, CRM e Analytics em um painel único e consistente, sem informação solta.",
  },
  {
    title: "Indicadores do seu jeito",
    description:
      "Os KPIs que fazem sentido para o seu negócio, do jeito que você acompanha — não um modelo genérico de prateleira.",
  },
  {
    title: "Acesso por usuário",
    description:
      "Cada pessoa da equipe vê o painel e os números que pode. Você controla quem enxerga o quê.",
  },
  {
    title: "No computador e no celular",
    description:
      "Painel responsivo para acompanhar os indicadores de qualquer lugar, na reunião ou fora do escritório.",
  },
];

const benefits = [
  {
    icon: <PiChartLineUpBold />,
    text: "Você decide olhando número atualizado, não achismo nem planilha velha.",
  },
  {
    icon: <PiClockCountdownBold />,
    text: "O painel se atualiza sozinho e devolve o tempo que você gastava em relatório.",
  },
  {
    icon: <PiDeviceMobileBold />,
    text: "Seus indicadores no bolso, para acompanhar de qualquer lugar.",
  },
];

const differentials = [
  {
    icon: <PiChartBarBold />,
    title: "Visual que comunica",
    text: "O gráfico certo para o dado certo: você entende a situação do negócio num relance.",
  },
  {
    icon: <PiPlugsBold />,
    title: "Integra suas fontes",
    text: "Sistema, banco, ERP, CRM e Analytics conversando em um painel só, sem exportação manual.",
  },
  {
    icon: <PiClockBold />,
    title: "Tempo real",
    text: "Dado atualizado na hora, sem depender de alguém exportar planilha todo dia.",
  },
  {
    icon: <PiLockKeyBold />,
    title: "Acesso controlado",
    text: "Cada usuário vê apenas os números que pode, com permissão verificada no servidor.",
  },
  {
    icon: <PiCpuBold />,
    title: "Rápido com muito dado",
    text: "Consulta otimizada para o painel não travar mesmo com um grande volume de informação.",
  },
  {
    icon: <PiCodeBold />,
    title: "Sem licença mensal",
    text: "Painel sob medida e seu, sem mensalidade de ferramenta de BI para usar seus próprios dados.",
  },
];

const methodSteps = [
  {
    title: "Indicadores & Metas",
    description:
      "Definimos quais números importam para você decidir: vendas, metas, custos, estoque. É o coração do painel.",
  },
  {
    title: "Fontes de dados",
    description:
      "Mapeio de onde vem cada informação (sistema, banco, ERP, planilha) e como conectar tudo de forma confiável.",
  },
  {
    title: "Design do painel",
    description:
      "Organizo os gráficos e cartões para o dado importante saltar aos olhos, sem poluição visual.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Construo o painel, integro as fontes e monto os indicadores atualizando de forma automática.",
  },
  {
    title: "Acessos & Testes",
    description:
      "Configuro quem vê o quê e valido cada número contra a fonte, para o painel ser confiável de verdade.",
  },
  {
    title: "Lançamento & Ajustes",
    description:
      "Coloco o painel em uso e refino os indicadores conforme você começa a decidir com ele no dia a dia.",
  },
];

const trust = [
  { value: "Tempo real", label: "dados sempre atuais" },
  { value: "Sob medida", label: "seus indicadores" },
  { value: "2+ anos", label: "de experiência" },
];

export default function DashboardsPage() {
  return (
    <ServicePage
      eyebrow="Dados que viram decisão"
      headline="Seus números numa tela só, em tempo real"
      subheadline="Pare de decidir no escuro: vendas, metas e custos em gráficos claros e atualizados sozinhos."
      description="Crio dashboards sob medida que reúnem os números do seu negócio em uma tela visual e atualizada. Vendas, metas, estoque e custos em gráficos claros, integrados às suas fontes de dados e acessíveis do celular."
      heroImage={{ src: "/CriacaoDeSites/dashboards.png", alt: "Dashboards e Painéis de Gestão (BI)" }}
      ctaPrimary="Quero meu painel"
      ctaNote="Consultoria gratuita · resposta em até 24h · sem compromisso"
      trust={trust}
      quote="Decidir olhando planilha bagunçada é dirigir olhando pelo retrovisor. Um bom painel mostra o agora, claro e na hora."
      infoParagraphs={[
        "Um dashboard reúne os números que importam — vendas, metas, custos, estoque — em uma tela visual e sempre atualizada. Em vez de caçar dado em planilha, você bate o olho e entende a situação.",
        "Puxo as informações do seu sistema, banco ou ferramentas (ERP, CRM, Analytics) e junto tudo em um painel só, com os indicadores do seu jeito e acesso controlado para cada pessoa da equipe.",
      ]}
      featuresHeading="O que o painel mostra"
      features={features}
      benefits={benefits}
      ctaMid="Quero um orçamento"
      diffHeading="Diferenciais do dashboard"
      differentials={differentials}
      methodHeading="Do dado à decisão"
      methodSubtitle="Painel que mostra o agora"
      methodSteps={methodSteps}
      faqHeading="Dúvidas sobre dashboards"
      faqItems={faqItems}
    />
  );
}
