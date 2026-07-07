import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Termos e Condições | Veloe",
  description: "Leia os termos e condições de uso do nosso site e serviço.",
};

export default function TermosCondicoesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-[family-name:var(--font-montserrat)]">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-veloe-navy mb-4">Termos e Condições de Uso</h1>
        <p className="text-sm text-gray-500 mb-8">Última atualização: 07 de julho de 2026</p>

        <div className="space-y-5 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-semibold text-veloe-navy mt-6">1. Objeto do site</h2>
          <p>
            Este site tem como objetivo principal permitir o cadastro e solicitação de dispositivos de identificação veicular para uso em pedágios e estacionamentos da marca Veloe, operado pela TAG TECNOLOGIA PARA O SISTEMA FINANCEIRO S.A.
          </p>

          <h2 className="text-xl font-semibold text-veloe-navy mt-6">2. Obrigações do usuário</h2>
          <p>
            Ao se cadastrar, você se compromete a fornecer informações verdadeiras, completas e atualizadas. É de sua responsabilidade manter seus dados corretos para garantir o recebimento e funcionamento do serviço.
          </p>

          <h2 className="text-xl font-semibold text-veloe-navy mt-6">3. Análise e aprovação</h2>
          <p>
            A solicitação de cadastro e recebimento do dispositivo está sujeita à análise interna da empresa, que poderá aprovar ou recusar o pedido conforme critérios internos e normas aplicáveis.
          </p>

          <h2 className="text-xl font-semibold text-veloe-navy mt-6">4. Alterações</h2>
          <p>
            Estes Termos e Condições podem ser atualizados periodicamente. Sempre que houver alterações relevantes, publicaremos a nova versão nesta mesma página.
          </p>

          <h2 className="text-xl font-semibold text-veloe-navy mt-6">5. Lei aplicável e foro</h2>
          <p>
            Estes termos são regidos pela legislação brasileira. Qualquer questão ou disputa será resolvida no Foro da Comarca de Barueri/SP.
          </p>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}