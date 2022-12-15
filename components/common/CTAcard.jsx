import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function CTAcard({ projects, contact, services }) {
  const { t, lang } = useTranslation("common", "landing");

  return (
    <div dir={lang==="ar"?"rtl":"ltr"} className="flex items-center justify-center relative h-[20em] rounded-xl sm:mx-20 flex-col mb-10 mx-5 transition-all p-4">
      <div className="text-center font-bold text-3xl font-sans text-white max-w-[10em] mx-auto">
          {t(`common:cta.title`)}
      </div>

      {projects && (
        <div className="items-center text-center">
            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">{t(`common:cta.title`)}</h1>
            <p className="mt-3 mb-6 text-lg leading-relaxed text-slate-400">{t(`common:cta.subtitle_projects`)}</p>
            <Link
            href="/contact"
            className="transition-all active:scale-95 rounded border-2 border-black text-black font-sans mt-24 hover:bg-black hover:text-white text-xl w-max py-2 px-3 mx-auto"
            >
            {t(`common:cta.projects`)}
          </Link>
        </div>
      )}
      {services && (
        <div className="items-center text-center">
            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">{t(`common:cta.title`)}</h1>
            <p className="mt-3 mb-6 text-lg leading-relaxed text-slate-400">{t(`common:cta.subtitle_services`)}</p>
            <Link
            href="/contact"
            className="transition-all active:scale-95 rounded border-2 border-black text-black font-sans mt-24 hover:bg-black hover:text-white text-xl w-max py-2 px-3 mx-auto"
          >
            {t(`common:cta.services`)}
          </Link>
        </div>
      )}
      {contact && (
        <div className="items-center text-center">
            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">{t(`common:cta.title`)}</h1>
            <p className="mt-3 mb-6 text-lg leading-relaxed text-slate-400">{t(`common:cta.subtitle_contact`)}</p>
            <Link
            href="/contact"
            className="transition-all active:scale-95 rounded border-2 border-black text-black font-sans mt-24 hover:bg-black hover:text-white text-xl w-max py-2 px-3 mx-auto"
          >
            {t(`common:cta.contact`)}
          </Link>
        </div>
      )}
    </div>
  );
}
