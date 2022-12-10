import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function CTAcard() {
  const { t, lang } = useTranslation("common", "landing");

  return (
    <div
      dir={lang === "ar" ? "ltr" : "rtl"}
      className="w-full relative sm:gap-10 gap-5 transition-all flex md:flex-row flex-col md:h-[25em] md:pb-0 pb-10 bg-zinc-100"
    >
      <div className="min-w-[50%] md:h-full h-[15em]">
        <img
          src="/images/cta-bg.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>

      <div className="flex w-full capitalize flex-col justify-center items-center">
        <div className="text-center w-4/6 text-3xl font-bold">
          {t(`common:cta.title`)}
        </div>
        <div className="flex items-center mt-4 gap-10">
          <Link
            scroll={false}
            href="/contact"
            className="active:scale-95 transition-all py-2 px-3 bg-black text-white"
          >
            {t(`common:cta.contact`)}
          </Link>
          <Link
            scroll={false}
            href="/portfolio"
            className="active:scale-95 transition-all underline "
          >
            {t(`common:cta.portfolio`)}
          </Link>
        </div>
      </div>
    </div>
  );
}
