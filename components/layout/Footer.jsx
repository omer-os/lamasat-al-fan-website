import Link from "next/link";
import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function Footer() {
  const { t, lang } = useTranslation("common");

  return (
    <div className="gap-4 bg-black p-7 flex items-center flex-col text-white w-full">
      <div className="text-center w-full">
        <h3 className="text-xl font-extrabold">{t("company_name")}</h3>
        <p className="text-md text-gray-300">{t("tagline")}</p>
      </div>

      <div className="flex sm:flex-row mt-2 flex-col gap-10 items-center">
        <Link href="/">{t("navigation.home_page")}</Link>
        <Link href="/about">{t("navigation.about_page")}</Link>
        <Link href="/services">{t("navigation.services_page")}</Link>
        <Link href="/portfolio">{t("navigation.portfolio_page")}</Link>
        <Link href="/contact">{t("navigation.contact_page")}</Link>
      </div>
      <div className="flex gap-5 items-center mt-2">
        <Link href="https://facebook.com/lmsatarchi/" target="_blank">
          <img
            className="hover:scale-95 transition-all fill-white"
            src="/icons/facebook.svg"
            alt=""
          />
        </Link>
        <Link href="https://instagram.com/lmsatarchi/" target="_blank">
          <img
            className="hover:scale-95 transition-all"
            src="/icons/instagram.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="h-[.2em] max-w-[10em] rounded-xl w-full bg-third/30 mt-2" />

      <div className="text-center text-sm text-zinc-300">
        {t("company_name")} {new Date().getFullYear()}
      </div>
    </div>
  );
}
