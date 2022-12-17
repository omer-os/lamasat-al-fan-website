import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function CTAcard({ projects, contact, services }) {
  const { t, lang } = useTranslation("common", "landing");

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="flex items-center justify-center relative h-[20em] rounded-xl sm:mx-20 mt-10 flex-col mb-10 mx-5 transition-all p-4"
    >
      <img
        src="/images/cta-bg.png"
        alt=""
        className="absolute object-cover sm:brightness-50 brightness-[45%] transition-all rounded-xl -z-10 h-full w-full  top-0 left-0"
      />
      {projects && (
        <div className="items-center text-center">
          <h1 className="mt-3 sm:text-[3.5rem] text-[2em] font-bold sm:leading-[4rem] sm:tracking-tight text-white">
            {t(`common:cta.title`)}
          </h1>
          <p className="mt-3 text-slate-100 mb-6 sm:text-2xl text-xl leading-relaxed   ">
            {t(`common:cta.subtitle_projects`)}
          </p>
          <Link
            href="/contact"
            className="transition-all active:scale-95 rounded border-2 border-white text-white font-sans mt-24 hover:bg-white hover:text-black text-xl w-max py-2 px-3 mx-auto"
          >
            {t(`common:cta.projects`)}
          </Link>
        </div>
      )}
      {services && (
        <div className="items-center text-center">
          <h1 className="mt-3 sm:text-[3.5rem] text-[2em] font-bold sm:leading-[4rem] sm:tracking-tight text-white">
            {t(`common:cta.title`)}
          </h1>
          <p className="mt-3 mb-6 sm:text-2xl text-xl leading-relaxed text-slate-100 ">
            {t(`common:cta.subtitle_services`)}
          </p>
          <Link
            href="/contact"
            className="transition-all active:scale-95 rounded border-2 border-white text-white font-sans mt-24 hover:bg-white hover:text-black text-xl w-max py-2 px-3 mx-auto"
          >
            {t(`common:cta.services`)}
          </Link>
        </div>
      )}
      {contact && (
        <div className="items-center text-center">
          <h1 className="mt-3 sm:text-[3.5rem] text-[2em] font-bold sm:leading-[4rem] sm:tracking-tight text-white">
            {t(`common:cta.title`)}
          </h1>
          <p className="mt-3 mb-6 sm:text-2xl text-xl leading-relaxed text-slate-100 ">
            {t(`common:cta.subtitle_contact`)}
          </p>
          <Link
            href="/contact"
            className="transition-all active:scale-95 rounded border-2 border-white text-white font-sans mt-24 hover:bg-white hover:text-black text-xl w-max py-2 px-3 mx-auto"
          >
            {t(`common:cta.contact`)}
          </Link>
        </div>
      )}
    </div>
  );
}
