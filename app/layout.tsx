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

// 👇 Seus IDs e tokens
const FB_PIXEL_ID = "1402511185031681";
const FB_ACCESS_TOKEN = "EAAIDzzA8qGQBR5ZCdFc2WVMhaiTX61JZAkOtSUk6ZCM335Yf7yYBoDl21xpH6StFh0LUvvs3wK1vw3TqHMrlTkuYvRQwooGodGGeCncbk2ymam9QBniZC5AE1VAFSZCYpKGXCalciZAkpUE8skOA61i8VQgzm60hP2UG10nzJAE2ILyJUZBTnFKkiyXPgYfvIyutgZDZD";
const GOOGLE_ADS_ID = "AW-18193682923";
const GOOGLE_CONVERSION_LABEL = "qNUoCK7w7sIcEOujtuND";

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

        {/* 🟦 Google Ads Tag */}
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
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

              // Função para disparar conversão quando o cadastro for concluído
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

        {/* 🟩 Meta Pixel */}
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

              window.FB_PIXEL_ID = '${FB_PIXEL_ID}';
              window.FB_ACCESS_TOKEN = '${FB_ACCESS_TOKEN}';

              window.trackCompleteRegistration = function() {
                fbq('track', 'CompleteRegistration', {
                  content_name: 'Cadastro Veloe',
                  status: 'completed',
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

        <div className="flex-1">{children}</div>
        <SiteFooter />

        {/* 🟪 Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
