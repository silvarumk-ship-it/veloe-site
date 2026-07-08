"use client";

import { useRegistration } from "@/context/RegistrationContext";

// ✅ Define o tipo aqui mesmo, sem precisar importar de fora
type Bank = "banco-do-brasil" | "bradesco" | "itau" | "santander" | "caixa" | "banrisul" | "outros";

const options: {
  value: Bank;
  title: string;
}[] = [
  { value: "banco-do-brasil", title: "Banco do Brasil" },
  { value: "bradesco", title: "Bradesco" },
  { value: "itau", title: "Itaú" },
  { value: "santander", title: "Santander" },
  { value: "caixa", title: "Caixa Econômica Federal" },
  { value: "banrisul", title: "Banrisul" },
  { value: "outros", title: "Outros Bancos" },
];

export default function StepStickers({ onNext }: { onNext: () => void }) {
  const { formData, updateFormData } = useRegistration();
  const isValid = !!formData.bank;

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold leading-tight text-veloe-navy sm:text-[1.65rem]">
        Selecione seu banco
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-veloe-navy/70 sm:text-[15px]">
        Escolha o banco onde você tem conta. <br />
        Não encontrou o seu? Selecione <strong>Outros Bancos</strong>.
      </p>

      <div className="mt-6 space-y-3 sm:mt-8">
        {options.map((option) => {
          const selected = formData.bank === option.value;
          return (
            <button
              key={option.value}
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
