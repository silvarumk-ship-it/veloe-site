import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contato | Veloe",
  description: "Entre em contato conosco para dúvidas ou suporte.",
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-[family-name:var(--font-montserrat)]">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-veloe-navy mb-8">Contato</h1>

        <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-sm">
          <p className="mb-6 text-gray-700">
            Estamos à disposição para tirar suas dúvidas e fornecer mais informações sobre nossos serviços.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <span className="font-semibold text-veloe-navy">📞 Telefone/WhatsApp:</span>
              <a href="tel:+5531996487583" className="text-veloe-navy hover:underline">(31) 99648-7583</a>
            </p>
            <p className="flex items-center gap-3">
              <span className="font-semibold text-veloe-navy">🏢 Razão Social:</span>
              <span>TAG TECNOLOGIA PARA O SISTEMA FINANCEIRO S.A.</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="font-semibold text-veloe-navy">📄 CNPJ:</span>
              <span>31.345.107/0001-03</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="font-semibold text-veloe-navy">📍 Endereço:</span>
              <span>Alameda Xingu, 512, Edifício Evolution, 3º, 4º e 20º andares – Alphaville Industrial – Barueri/SP – CEP 06455-030</span>
            </p>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}