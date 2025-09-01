import Header from "@/componentsPromocao/Header/Header";
import Hero from "@/componentsPromocao/Hero/hero";
import Servicos from "@/componentsPromocao/Servicos/servicos";
import Comparacao from "@/componentsPromocao/Comparacao/comparacao";
import Testemunhos from "@/componentsPromocao/Testemunhos/testemunho";
import Formulario from "@/componentsPromocao/Formulario/form";
import Script from "next/script";

export default function PromocaoPage() {
  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '868773593828810');
          fbq('track', 'PageView');
        `}
      </Script>
      <div
        dangerouslySetInnerHTML={{
          __html: `<noscript><img height='1' width='1' style='display:none' src='https://www.facebook.com/tr?id=868773593828810&ev=PageView&noscript=1' /></noscript>`,
        }}
      />
      <Header />
      <Hero />
      <Servicos />
      <Comparacao />
      <Testemunhos />
      <Formulario />
    </>
  );
}
