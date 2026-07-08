import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

// 👇 Seus dados e códigos
const FB_PIXEL_ID = "1402511185031681";
const GOOGLE_ADS_ID = "AW-18193682923";
const GOOGLE_CONVERSION_LABEL = "qNUoCK7w7sIcEOujtuND";
const SC_PROJECT = "13335112";
const SC_SECURITY = "4c86d711";

export const metadata: Metadata = {
  title: "Veloe - Até 2 TAGs gratuitas para você!",
  description: "Clientes dos bancos parceiros têm até 2 TAGs Veloe sem custo. Sem mensalidade, sem taxa de adesão.",
  icons: { icon: "/images/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} flex min-h-screen flex-col antialiased`}>

        {/* 🟦 TAG DO GOOGLE ADS - CÓDIGO OFICIAL */}
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          async
        />
        <Script
          id="google-ads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ADS_ID}');

              // Função para contar cadastro concluído
              window.trackGoogleConversion = function() {
                gtag('event', 'conversion', {
                  'send_to': '${GOOGLE_ADS_ID}/${GOOGLE_CONVERSION_LABEL}',
                  'value': 0,
                  'currency': 'BRL'
                });
              };
            `,
          }}
        />
        {/* 🟦 Fim Google Ads */}

        {/* 🟩 PIXEL DO META */}
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
              
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');

              // Função para contar cadastro concluído
              window.trackCompleteRegistration = function() {
                fbq('track', 'CompleteRegistration', {
                  content_name: 'Cadastro Veloe',
                  currency: 'BRL',
                  value: 0
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
        {/* 🟩 Fim Meta Pixel */}

        {/* 🟢 CONTADOR + USUÁRIOS ONLINE (StatCounter) */}
        <Script
          id="statcounter-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var sc_project = ${SC_PROJECT};
              var sc_invisible = 1;
              var sc_security = "${SC_SECURITY}";
            `,
          }}
        />
        <Script
          id="statcounter-js"
          strategy="afterInteractive"
          src="https://www.statcounter.com/counter/counter.js"
          async
        />
        <noscript>
          <div style={{ display: "none" }}>
            <a
              href="https://statcounter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://c.statcounter.com/${SC_PROJECT}/0/${SC_SECURITY}/1/`}
                alt="Estatísticas do site"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>
        {/* 🟢 Fim Estatísticas */}

        <div className="flex-1">{children}</div>
        <SiteFooter />

      </body>
    </html>
  );
}
