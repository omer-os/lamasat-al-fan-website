import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { urlFor } from "../../dta";
export default function LandingCarousel({ data }) {
  const [SelectedTap, setSelectedTap] = useState(data[0].project.slug.current);
  const { t, lang } = useTranslation("common", "landing");
  var CenterHeroImage = useRef();

  useEffect(() => {
    CenterHeroImage.current.scrollLeft -= 300;
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="z-10 sm:absolute relative top-0 left-0 sm:h-full sm:rounded-none rounded-xl sm:overflow-hidden sm:w-full sm:mt-0 mt-24 sm:mx-0 mx-0 right-0 ">
        <div className="sm:block hidden">
          <AnimatePresence exit>
            {data
              .filter((i) => i.project.slug.current === SelectedTap)
              .map((i) => (
                <Link
                  lang={lang}
                  href={`/portfolio/${i.project.slug.current}`}
                  key={i.project.slug.current}
                >
                  <motion.img
                    initial={{ opacity: 0, scale: 1.05 }}
                    transition={{
                      duration: 1,
                    }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className={`h-full w-[50%]  absolute top-0 z-10 object-cover cursor-pointer brightness-75 ${
                      lang === "ar" ? "left-0" : "right-0"
                    }`}
                    src={urlFor(i.project.ProjectCover).url()}
                  ></motion.img>
                </Link>
              ))}
          </AnimatePresence>
        </div>

        <div
          ref={CenterHeroImage}
          className={`
        flex overflow-x-scroll snap-display-none snap-x snap-mandatory gap-4 sm:hidden px-8 flex-row-reverse ${
          lang === "ar" && "!flex-row"
        }`}
        >
          {data.map((i, index) => (
            <div key={index} className="relative">
              <Link lang={lang} href={`/portfolio/${i.project.slug.current}`}>
                <motion.img
                  className={`snap-center min-w-[18em] rounded-xl h-[21em] brightness-75 top-0 left-0 z-10 object-cover`}
                  src={urlFor(i.project.ProjectCover).url()}
                />

                <div
                  className={`absolute bottom-5  text-xl text-white sm:hidden font-semibold capitalize
                ${lang === "ar" ? "right-5" : "left-5"}
                `}
                >
                  {i.project.category.title[lang]}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`transition-all flex flex-col gap-2 z-20 sm:h-screen lg:max-w-[29em] sm:max-w-[45%] relative sm:top-10 top-2 sm:mx-10 lg:mx-0 justify-center ${
          lang === "ar" ? "lg:right-[10em]" : "lg:left-[8em] text-left"
        }`}
      >
        <div
          className={`
        text-center  sm:mt-5 mt-2 px-8 sm:px-0
        ${lang === "ar" ? "sm:text-right" : "sm:text-left"}
        `}
        >
          <div className="lg:text-6xl transition-all sm:text-4xl text-2xl font-extrabold">
            {t("landing:headline")}
          </div>
          <div className="sm:hidden">
            <div className="lg:text-lg transition-all text-sm sm:block text-zinc-400 mt-2">
              {t("landing:sub_headline")}
            </div>
          </div>

          <Link
            scroll={false}
            href="/portfolio"
            className="mt-5 bg-black text-white active:bg-black/90 group active:scale-95 transition-all py-4 px-6 font-bold sm:w-max justify-center sm:mt-10 sm:rounded-none rounded-xl flex gap-7 flex-row text-sm lg:text-md"
          >
            <span className="min-w-max">{t("landing:landing_hero_btn")}</span>

            <svg
              className={`w-6 h-6 sm:flex hidden  transition-all ${
                lang === "ar" ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </Link>
        </div>

        <div className="sm:flex hidden mt-6 flex-col  h-[8em]">
          <div className="flex flex-row w-full z-30">
            {data.map((i, index) => (
              <div key={i.project.slug.current}>
                <div
                  onClick={() => setSelectedTap(i.project.slug.current)}
                  className="relative py-4 active:bg-zinc-200 transition-all cursor-pointer px-6"
                >
                  {i.project.category.title[lang]}

                  {i.project.slug.current === SelectedTap && (
                    <motion.div
                      layoutId="bottom-b"
                      className="h-[.1em] w-full bg-black absolute bottom-0 z-20 left-0"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="lg:text-xl hidden transition-all text-sm sm:block text-zinc-400 mt-5">
            {t("landing:sub_headline")}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
