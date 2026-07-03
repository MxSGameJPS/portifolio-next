// Shared content for the /web-apps route.
// faqItems is consumed by BOTH the page (rendering) and the layout (FAQPage JSON-LD),
// so the structured data can never drift from what users actually read.

export const faqItems = [
  {
    question: "Qual o prazo para desenvolver um projeto?",
    answer:
      "Os prazos variam conforme a complexidade do escopo. Projetos institucionais levam em média 30 dias, enquanto sistemas complexos podem variar de 60 a 120 dias, dependendo das funcionalidades.",
  },
  {
    question: "Qual a tecnologia utilizada no desenvolvimento?",
    answer:
      "Utilizamos as tecnologias mais modernas do mercado: Stack JavaScript (Next.js, React, Node.js, Express). Isso garante performance, segurança e facilidade de manutenção futura.",
  },
  {
    question: "Posso integrar o sistema com meu software atual (ERP/CRM)?",
    answer:
      "Sim! Desenvolvemos APIs e microservices que permitem a comunicação fluida entre o novo sistema e ferramentas que você já utiliza, como RD Station, Salesforce, SAP, entre outros.",
  },
  {
    question: "O código-fonte será meu ao final do projeto?",
    answer:
      "Com certeza. Prezamos pela sua autonomia. Ao final do projeto e quitação do contrato, entregamos o repositório completo do código, sem 'pegadinhas' de licença ou aluguel.",
  },
  {
    question: "O sistema funcionará bem em celulares?",
    answer:
      "Sim. Nossas aplicações são desenvolvidas com o conceito 'Mobile First' e Responsividade, garantindo que funcionem perfeitamente em smartphones, tablets e desktops.",
  },
  {
    question: "Como funciona o suporte pós-lançamento?",
    answer:
      "Oferecemos um período de garantia para correções de eventuais bugs. Após isso, podemos estabelecer um contrato de SLA (Nível de Serviço) para evolução contínua e suporte técnico premium.",
  },
];
