"use client";

import Image from "next/image";
import Link from "next/link";
import { useHomeTab, heroContent } from "@/context/HomeTabContext";

export default function HeroSection() {
  const { activeTab } = useHomeTab();
  const content = heroContent[activeTab];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Área da imagem AGORA CLICÁVEL - Versão Desktop */}
      <Link
        href="/cadastro"
        onClick={() => sessionStorage.setItem("veloe-home-tab", activeTab)}
        className="pointer-events-auto absolute inset-y-0 right-0 hidden w-1/2 lg:block z-10"
        aria-label="Iniciar resgate da TAG Veloe"
      >
        {(["pessoa-fisica", "pessoa-juridica", "parcerias"] as const).map(
          (tab) => (
            <div
              key={tab}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                activeTab === tab
                  ? "scale-100 opacity-100"
                  : "scale-105 opacity-0"
              }`}
            >
              <Image
                src={heroContent[tab].image}
                alt="Iniciar resgate da TAG Veloe"
                fill
                className="object-cover object-center"
                priority={tab === "pessoa-fisica"}
                sizes="50vw"
              />
            </div>
          )
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 from-[0%] via-white/15 via-[24%] to-transparent to-[58%]" />
      </Link>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[580px]">
          <div className="order-2 flex flex-col justify-center px-4 pb-10 pt-6 sm:px-6 md:px-8 lg:order-1 lg:w-[52%] lg:py-16 lg:pl-10 lg:pr-6 xl:pl-14">
            <div
              key={activeTab}
              className="animate-fade-in"
            >
              <h1 className="text-[1.65rem] font-bold leading-[1.2] text-veloe-navy sm:text-[1.85rem] md:text-4xl lg:text-[2.65rem] lg:leading-[1.15] xl:text-[2.75rem]">
                {content.title}
              </h1>
              <p className="mt-3 text-[15px] leading-relaxed text-veloe-navy/75 sm:mt-4 sm:text-base md:text-lg lg:mt-5">
                {content.subtitle}
              </p>

              <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3 md:mt-8">
                {content.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckIcon />
                    <span className="text-[13px] leading-snug text-veloe-navy sm:text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 sm:mt-8 md:mt-10" id="resgate">
                <CTAButton />
                <p className="mt-3.5 flex items-center gap-2 text-[11px] text-veloe-gray sm:mt-4 sm:text-xs md:text-sm">
                  <ShieldIcon />
                  Processo 100% seguro e rápido
                </p>
              </div>
            </div>
          </div>

          {/* Área da imagem AGORA CLICÁVEL - Versão Celular */}
          <Link
            href="/cadastro"
            onClick={() => sessionStorage.setItem("veloe-home-tab", activeTab)}
            className="relative order-1 h-[260px] w-full sm:h-[320px] md:h-[380px] lg:order-2 lg:hidden z-10"
            aria-label="Iniciar resgate da TAG Veloe"
          >
            {(["pessoa-fisica", "pessoa-juridica", "parcerias"] as const).map(
              (tab) => (
                <div
                  key={tab}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    activeTab === tab
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                >
                  <Image
                    src={heroContent[tab].image}
                    alt="Veloe"
                    fill
                    className="object-cover object-center"
                    priority={tab === "pessoa-fisica"}
                    sizes="100vw"
                  />
                </div>
              )
            )}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />

            <div className="absolute inset-x-3 bottom-4 sm:inset-x-5 sm:bottom-5 pointer-events-none">
              <div className="mx-auto max-w-lg overflow-hidden rounded-full bg-veloe-navy py-2 pl-2 pr-4 shadow-[0_8px_24px_rgba(29,27,132,0.3)] sm:py-2.5 sm:pl-2.5 sm:pr-5">
                <FloatingCardContent compact />
              </div>
            </div>
          </Link>

          <div className="pointer-events-none relative order-2 hidden lg:order-2 lg:block lg:w-[48%]">
            <div className="absolute bottom-10 right-6 xl:bottom-14 xl:right-10 pointer-events-auto z-20">
              <div className="max-w-[340px] overflow-hidden rounded-full bg-veloe-navy py-3 pl-3 pr-7 shadow-[0_12px_32px_rgba(29,27,132,0.35)]">
                <FloatingCardContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCardContent({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex shrink-0 items-center justify-center rounded-full bg-white ${
          compact ? "h-11 w-11 sm:h-12 sm:w-12" : "h-14 w-14 xl:h-16 xl:w-16"
        }`}
      >
        <GiftIcon compact={compact} />
      </div>
      <div
        className={`leading-snug text-white ${
          compact ? "text-[11px] sm:text-xs" : "text-sm xl:text-[15px]"
        }`}
      >
        <p>Exclusivo para clientes</p>
        <p>dos bancos parceiros.</p>
        <p className="mt-0.5 font-medium">
          Até <span className="font-bold text-veloe-cyan">2 TAGs</span> grátis
        </p>
      </div>
    </div>
  );
}

export function CTAButton({
  className = "",
  id,
}: {
  className?: string;
  id?: string;
}) {
  const { activeTab } = useHomeTab();

  return (
    <Link
      href="/cadastro"
      id={id}
      onClick={() => sessionStorage.setItem("veloe-home-tab", activeTab)}
      className={`group inline-flex items-center overflow-hidden rounded-full bg-veloe-cyan py-2.5 pl-7 pr-2 text-base font-bold text-white shadow-[0_6px_20px_rgba(38,208,224,0.45)] transition-all duration-200 hover:bg-veloe-cyan-hover hover:shadow-[0_8px_24px_rgba(38,208,224,0.55)] active:scale-[0.98] sm:py-3 sm:pl-9 sm:pr-2.5 sm:text-lg md:text-xl md:pl-11 md:py-3.5 ${className}`}
    >
      <span className="pr-4 sm:pr-5">Iniciar resgate</span>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-veloe-cyan transition-transform duration-200 group-hover:translate-x-1 sm:h-11 sm:w-11 md:h-12 md:w-12">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 shrink-0"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="11" fill="#26d0e0" />
      <path
        d="M7 12.5l3 3 7-7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path
        d="M12 2l8 4v6c0 5.25-3.5 10-8 12-4.5-2-8-6.75-8-12V6l8-4z"
        stroke="#1d1b84"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="#1d1b84"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GiftIcon({ compact = false }: { compact?: boolean }) {
  const size = compact ? 22 : 28;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="10"
        width="18"
        height="11"
        rx="1"
        stroke="#1d1b84"
        strokeWidth="1.5"
      />
      <path
        d="M12 10V21M3 10h18M12 10c0-2 2-4 0-6-2 2 0 4 0 6M12 10c0-2-2-4 0-6 2 2 0 4 0 6"
        stroke="#1d1b84"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
