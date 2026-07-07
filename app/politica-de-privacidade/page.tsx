import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Política de Privacidade | Veloe",
  description: "Saiba como tratamos e protegemos os seus dados pessoais.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-[family-name:var(--font-montserrat)]">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-veloe-navy mb-4">Política de Privacidade</h1>
        <p className="text-sm text-gray-500 mb-8">Última atualização: 07 de julho de 2026</p>

        <div className="space-y-5 text-gray-700 leading-relaxed">
          <p>
            A <strong>TAG TECNOLOGIA PARA O SISTEMA FINANCEIRO S.A.</strong>, CNPJ nº 31.345.107/0001-03, está comprometida com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018) e demais normas aplicáveis.
          </p>

          <h2 className="text-xl font-semibold text-veloe-navy mt-6">1. Quais dados coletamos</h2>
          <p>
            Coletamos apenas as informações estritamente necessárias para o processamento do seu cadastro e solicitação do dispositivo Veloe: nome completo, CPF, endereço de e-mail, telefone, placa e características do veículo, dados bancários e endereço para entrega.
          </p>

          <h2 className="text-xl font-semibold text-veloe-navy mt-6">2. Finalidade do tratamento</h2>
          <p>Os dados coletados são utilizados exclusivamente para:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Processar e validar o seu cadastro;</li>
            <li>Realizar a entrega do dispositivo solicitado;</li>
            <li>Entrar em contato para confirmação ou suporte;</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>
          <p>Não compartilhamos seus dados com terceiros para fins comerciais ou uso não autorizado.</p>

          <h2 className="text-xl font-semibold text-veloe-navy mt-6">3. Armazenamento e segurança</h2>
          <p>
            Seus dados são armazenados em ambiente seguro, com acesso restrito e protegido por medidas técnicas e administrativas adequadas. Mantemos os dados apenas pelo tempo necessário para cumprir as finalidades descritas ou obrigações legais.
          </p>

          <h2 className="text-xl font-semibold text-veloe-navy mt-6">4. Seus direitos</h2>
          <p>
            Você pode solicitar a qualquer momento a confirmação, acesso, correção ou exclusão dos seus dados pessoais, enviando uma mensagem para o telefone <strong>(31) 99648-7583</strong>.
          </p>

          <p className="mt-6">
            Ao utilizar nosso site e realizar o cadastro, você concorda com os termos desta política.
          </p>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}