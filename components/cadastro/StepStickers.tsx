"use client";

import { useRegistration } from "@/context/RegistrationContext";
import type { PartnerBank } from "@/lib/types";

// ✅ Lista atualizada com os bancos que você quer
const options: {
  value: PartnerBank | "";
  title: string;
}[] = [
  { value: "bradesco" as PartnerBank, title: "Bradesco" },
  { value: "itau" as PartnerBank, title: "Itaú" },
  { value: "santander" as PartnerBank, title: "Santander" },
  { value: "bb" as PartnerBank, title: "Banco do Brasil" },
  { value: "mercado-pago" as PartnerBank, title: "Mercado Pago" },
  { value: "c6-bank" as PartnerBank, title: "C6 Bank" },
  { value: "pagseguro" as PartnerBank, title: "PagSeguro" },
  { value: "sicredi" as PartnerBank, title: "Sicredi" },
  { value: "" as PartnerBank, title: "Outros Bancos" },
];

export default function StepStickers({ onNext }: { onNext: () => void }) {
  const { formData, updateFormData } = useRegistration();

  // ✅ Verificação corrigida: libera o botão também quando escolher "Outros"
  const isValid = formData.bank !== undefined && formData.bank !== null;

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold leading-tight text-veloe-navy sm:text-[1.65rem]">
        Selecione seu banco
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-veloe-navy/70 sm:text-[15px]">
        Escolha o banco ou instituição que você utiliza. <br />
        Não encontrou? Selecione <strong>Outros Bancos</strong>.
      </p>

      <div className="mt-6 space-y-3 sm:mt-8">
        {options.map((option) => {
          const selected = formData.bank === option.value;
          return (
            <button
              key={option.value || "outros-bancos"}
              type="button"
              onClick={() => updateFormData({ bank: option.value })}
              className={`flex w-full items-center justify-between rounded-2xl border-2 bg-white p-4 text-left transition-all duration-200 sm:p-5 ${
                selected
                  ? "border-veloe-cyan shadow-[0_4px_16px_rgba(38,208,224,0.2)] scale-[1.01]"
                  : "border-gray-200 hover:border-veloe-cyan/40 hover:shadow-sm"
              }`}
            >
              <span className="font-medium text-veloe-navy">{option.title}</span>
              <div
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                  selected
                    ? "border-veloe-cyan bg-veloe-cyan"
                    : "border-gray-300 bg-white"
                }`}
              >
                {selected && <div className="h-2 w-2 rounded-full bg-white" />}
              </div>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={!isValid}
        className={`mt-8 w-full rounded-full py-4 text-base font-bold transition-all duration-200 ${
          isValid
            ? "bg-veloe-navy text-white shadow-[0_4px_16px_rgba(29,27,132,0.3)] hover:bg-veloe-navy-dark hover:shadow-[0_6px_20px_rgba(29,27,132,0.35)] active:scale-[0.98]"
            : "cursor-not-allowed bg-[#e1e1eb] text-gray-400"
        }`}
      >
        Continuar
      </button>
    </div>
  );
}
