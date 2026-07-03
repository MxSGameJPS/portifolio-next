export const meta = {
  title: "Desenvolvimento de APIs & Integrações",
  description:
    "Desenvolvimento de APIs REST e GraphQL e integração entre sistemas (ERP, CRM, pagamento). Dados sincronizados automaticamente, documentados e seguros.",
  path: "/api-development",
  image: "/CriacaoDeSites/api-dev.png",
  serviceType: "API Development",
  name: "Desenvolvimento de APIs & Integrações",
  offers: [
    "APIs REST e GraphQL",
    "Integração entre sistemas",
    "Webhooks e automações",
    "Documentação (Swagger/OpenAPI)",
  ],
};

export const faqItems = [
  {
    question: "O que é uma API, na prática?",
    answer:
      "É a ponte que faz dois sistemas conversarem: seu site fala com o pagamento, seu app fala com o banco de dados, seu ERP fala com a loja. Assim a informação anda sozinha, sem ninguém copiar dado na mão.",
  },
  {
    question: "Dá para integrar sistemas que eu já uso?",
    answer:
      "Sim. Conecto ERP, CRM, meios de pagamento, e-mail e ferramentas de terceiros para trocarem dados automaticamente, sem trabalho manual duplicado.",
  },
  {
    question: "A API vem documentada?",
    answer:
      "Sim, com Swagger/OpenAPI. Qualquer desenvolvedor (seu ou o próximo) entende e usa a API sem precisar adivinhar como ela funciona.",
  },
  {
    question: "É seguro expor uma API?",
    answer:
      "Sim. Uso autenticação por chave ou JWT, limite de requisições e validação de dados para evitar abuso e vazamento de informação.",
  },
  {
    question: "Serve para automatizar tarefas?",
    answer:
      "Sim. Com webhooks e automações, um pedido novo pode disparar e-mail, dar baixa no estoque e avisar no WhatsApp, sem ninguém apertar botão.",
  },
  {
    question: "Consigo escalar se o uso crescer?",
    answer:
      "Sim. Construo pensando em escala (arquitetura serverless e otimização) para a API aguentar mais requisições sem cair.",
  },
];
