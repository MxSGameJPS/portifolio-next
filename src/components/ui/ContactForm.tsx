"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";

// Inicializa o EmailJS (adicionar no topo do componente)
emailjs.init({
  publicKey: "EngK1wpE0VaiNJqtv", // Sua chave completa aqui
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Atualize com o ID correto do seu template
      const serviceId = "service_46sy6hh";
      const templateId = "template_oobriie"; // SUBSTITUA pelo ID correto que você encontrar no dashboard

      // Versão 4.x usa esta sintaxe
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
      // Log mais detalhado do erro
      if (err instanceof Error) {
        console.error("Detalhes do erro:", err.message);
      }
      setError(
        "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      {success ? (
        <div className="py-8 text-center">
          <div className="mb-4 text-6xl text-success">✓</div>
          <h3 className="mb-2 text-2xl font-semibold">Mensagem Enviada!</h3>
          <p className="mb-6 text-secondary">
            Obrigado pelo contato! Responderei sua mensagem em breve.
          </p>
          <Button onClick={() => setSuccess(false)} variant="outline">
            Enviar outra mensagem
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block mb-1 text-sm font-medium">
              Assunto
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Selecione um assunto</option>
              <option value="Proposta de Projeto">Proposta de Projeto</option>
              <option value="Oportunidade de Trabalho">
                Oportunidade de Trabalho
              </option>
              <option value="Parceria">Parceria</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-1 text-sm font-medium">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md resize-none dark:border-gray-700 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {error && (
            <div className="p-3 mb-4 text-red-700 bg-red-100 rounded-md dark:bg-red-900/30 dark:text-red-400">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="justify-center w-full"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </Button>
        </form>
      )}
    </div>
  );
}
