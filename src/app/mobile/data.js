// Shared content for the /mobile route.
// faqItems is consumed by BOTH the page (rendering) and the layout (FAQPage JSON-LD),
// so the structured data can never drift from what users actually read.

export const faqItems = [
  {
    question: "Preciso pagar para publicar nas lojas?",
    answer:
      "Sim. A Apple cobra uma taxa anual de $99 e o Google uma taxa única de $25. Esses valores são pagos diretamente para elas na criação da sua conta de desenvolvedor.",
  },
  {
    question: "O aplicativo vai funcionar no iPhone e no Android?",
    answer:
      "Sim! Utilizo desenvolvimento híbrido (React Native), o que permite criar versões para iOS e Android ao mesmo tempo, economizando tempo e investimento.",
  },
  {
    question: "Quanto tempo demora para a Apple/Google aprovar?",
    answer:
      "O Google Play geralmente aprova em até 48 horas. A Apple App Store é mais rigorosa e pode levar de 3 a 5 dias para revisar e aprovar o aplicativo.",
  },
  {
    question: "Vocês dão manutenção depois de pronto?",
    answer:
      "Sim. Aplicativos precisam de manutenção constante por causa das atualizações dos sistemas operacionais (iOS/Android). Ofereço planos de suporte contínuo.",
  },
  {
    question: "Consigo enviar notificações para os usuários?",
    answer:
      "Com certeza. As notificações push são uma das ferramentas mais poderosas dos apps e já deixo a estrutura pronta para você se comunicar com a sua base.",
  },
  {
    question: "O aplicativo precisa de internet para funcionar?",
    answer:
      "Depende da funcionalidade. Posso construir o app com recursos offline (modos de consulta), mas para sincronizar dados geralmente é necessária conexão.",
  },
];
