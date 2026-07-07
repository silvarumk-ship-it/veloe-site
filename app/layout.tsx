import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

// 👇 Seus dados do Pixel e Token
const FB_PIXEL_ID = "1402511185031681";
const FB_ACCESS_TOKEN = "EAAIDzzA8qGQBR5ZCdFc2WVMhaiTX61JZAkOtSUk6ZCM335Yf7yYBoDl21xpH6StFh0LUvvs3wK1vw3TqHMrlTkuYvRQwooGodGGeCncbk2ymam9QBniZC5AE1VAFSZCYpKGXCalciZAkpUE8skOA61i8VQgzm60hP2UG10nzJAE2ILyJUZBTnFKkiyXPgYfvIyutgZDZD";

export const metadata: Metadata = {
  title: "Veloe - Até 2 TAGs gratuitas para você!",
  description:
    "Clientes dos bancos parceiros têm até 2 TAGs Veloe sem custo. Sem mensalidade, sem taxa de adesão.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} flex min-h-screen flex-col antialiased`}>
        {/* 🟩 Meta Pixel + estrutura para API de Conversões */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              
              // Inicializa o Pixel
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');

              // Disponibiliza os dados para uso com a API
              window.FB_PIXEL_ID = '${FB_PIXEL_ID}';
              window.FB_ACCESS_TOKEN = '${FB_ACCESS_TOKEN}';

              // Função pronta para enviar evento de cadastro pela API + Pixel
              window.trackCompleteRegistration = function(userData = {}) {
                // Envia pelo Pixel (método tradicional)
                fbq('track', 'CompleteRegistration', {
                  content_name: 'Cadastro Veloe',
                  status: 'completed',
                  currency: 'BRL',
                  value: 0
                });

                // Os dados da API serão usados na rota do servidor
                console.log('Evento de cadastro preparado para envio:', {
                  pixelId: window.FB_PIXEL_ID,
                  accessToken: window.FB_ACCESS_TOKEN,
                  userData
                });
              };
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {/* 🟩 Fim da integração */}

        <div className="flex-1">{children}</div>
        <SiteFooter />

        {/* 🟩 Vercel Analytics mantido como estava */}
        <Analytics />
      </body>
    </html>
  );
}
