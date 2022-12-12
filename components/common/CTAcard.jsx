import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function CTAcard({ works, contact, services }) {
  const { t, lang } = useTranslation("common", "landing");

  return (
    <div dir={lang==="ar"?"rtl":"ltr"} className="flex items-center justify-center relative h-[20em] rounded-xl sm:mx-20 flex-col mb-10 mx-5 transition-all p-4">
      <div className="text-center font-bold text-3xl font-sans text-white max-w-[10em] mx-auto">
        {t(`common:cta.title`)}
      </div>

      <img
        src="/images/cta-bg.png"
        alt=""
        className="absolute object-cover brightness-50 rounded-xl -z-10 h-full w-full top-0 left-0"
      />

      {works && (
        <Link
          href="/portfolio"
          className="transition-all active:scale-95 rounded border-2 border-white text-white font-sans mt-5 hover:bg-white hover:text-black text-xl w-max py-2 px-3 mx-auto"
        >
          {t(`common:cta.works`)}
        </Link>
      )}
      {services && (
        <Link
          href="/services"
          className="transition-all active:scale-95 rounded border-2 border-white text-white font-sans mt-5 hover:bg-white hover:text-black text-xl w-max py-2 px-3 mx-auto"
        >
          {t(`common:cta.services`)}
        </Link>
      )}
      {contact && (
        <Link
          href="/contact"
          className="transition-all active:scale-95 rounded border-2 border-white text-white font-sans mt-5 hover:bg-white hover:text-black text-xl w-max py-2 px-3 mx-auto"
        >
          {t(`common:cta.contact`)}
        </Link>
      )}
    </div>
  );
}
