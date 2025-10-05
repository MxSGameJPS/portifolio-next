"use client";

import dynamic from "next/dynamic";
import React from "react";
import Link from "next/link";

// Importa o formulário de promoção (já existente)
const Formulario = dynamic(
  () => import("@/componentsPromocao/Formulario/form"),
  { ssr: false }
);

export default function ContatoPage() {
  return (
    <main>
      <div
        style={{
          padding: "1rem 1.25rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, color: "#F5F5F5" }}>Contato</h1>
        <Link href="/" legacyBehavior>
          <a
            style={{
              background: "linear-gradient(90deg, #B8860B, #C0C0C0)",
              color: "#000",
              padding: "0.5rem 1rem",
              borderRadius: 20,
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Voltar para a home
          </a>
        </Link>
      </div>
      <Formulario />
    </main>
  );
}
