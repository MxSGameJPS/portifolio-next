
import Header from "@/componentsPromocao/Header/Header";
import Hero from "@/componentsPromocao/Hero/hero";
import Servicos from "@/componentsPromocao/Servicos/servicos";
import Comparacao from "@/componentsPromocao/Comparacao/comparacao";
import Testemunhos from "@/componentsPromocao/Testemunhos/testemunho";
import Formulario from "@/componentsPromocao/Formulario/form";

export default function PromocaoPage() {
  return (
    <main>
      <Header />
      <Hero />
      <Servicos />
      <Comparacao />
      <Testemunhos />
      <Formulario />
      {/* Componentes serão adicionados aqui */}
    </main>
  );
}
