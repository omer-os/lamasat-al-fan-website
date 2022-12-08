import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
export default function LandingCarousel() {
  const [SelectedTap, setSelectedTap] = useState(0);
  const { t, lang } = useTranslation("common", "landing");

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
      <div className="sm:-z-10 sm:absolute relative top-0 left-0 sm:h-full sm:rounded-none rounded-xl sm:overflow-hidden sm:w-full sm:mt-0 mt-20 sm:mx-0 mx-0 right-0 ">
        <div className="sm:block hidden">
          {[0, 1, 2].map((i, index) => (
            <motion.img
              key={index}
              animate={{
                opacity: SelectedTap === index ? 1 : 0,
                scale: SelectedTap === index ? 1 : 1.1,
                transition: {
                  type: "just",
                  duration: 1,
                },
              }}
              className={`w-[50%] h-full absolute top-0  z-10  object-cover brightness-75 ${
                lang === "ar" ? "left-0" : "right-0"
              }`}
              src={t(`landing:landing_hero_texts.${index}.bg`)}
            ></motion.img>
          ))}
        </div>

        <div
          className={`
        flex overflow-x-scroll  snap-display-none snap-x snap-mandatory gap-4 sm:hidden px-8 flex-row-reverse ${
          lang === "ar" && "!flex-row"
        }
        `}
        >
          {[0, 1, 2].map((i, index) => (
            <div key={index} className="relative">
              <motion.img
                className={`snap-center min-w-[18em] rounded-xl h-[23em] brightness-75 top-0 left-0 z-10 object-cover`}
                src={t(`landing:landing_hero_texts.${index}.bg`)}
              />

              <div
                className={`absolute bottom-5  text-xl text-white sm:hidden font-semibold capitalize
              ${lang === "ar" ? "right-5" : "left-5"}
              `}
              >
                {t(`landing:landing_hero_texts.${index}.title`)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`transition-all flex flex-col sm:mt-[2%] gap-2 sm:h-screen sm:max-w-[26em] relative sm:top-32 top-2 sm:mx-10 lg:mx-0 ${
          lang === "ar" ? "lg:right-[10em]" : "lg:left-[8em] text-left"
        }`}
      >
        <div
          className={`
        text-center sm:mt-5 mt-2 px-8 sm:px-0
        ${lang === "ar" ? "sm:text-right" : "sm:text-left"}
        `}
        >
          <div className="sm:text-5xl text-2xl font-extrabold">
            {t("landing:headline")}
          </div>
          <div className="sm:text-md text-sm sm:block text-zinc-400 mt-2">
            {t("landing:sub_headline")}
          </div>
          <Link
            href="/portfolio"
            className="mt-5 bg-black text-white active:bg-black/90 group active:scale-95 transition-all py-4 px-6 font-bold sm:w-max justify-center sm:mt-10 sm:rounded-0 rounded-xl flex gap-7 flex-row"
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
            {[0, 1, 2].map((i, index) => (
              <div
                key={index}
                onClick={() => setSelectedTap(index)}
                className="relative py-4 active:bg-zinc-200 transition-all cursor-pointer px-6"
              >
                {t(`landing:landing_hero_texts.${index}.title`)}

                {index === SelectedTap && (
                  <motion.div
                    layoutId="bottom-b"
                    className="h-[.1em] w-full bg-black absolute bottom-0 z-20 left-0"
                  />
                )}
              </div>
            ))}
          </div>
          <>
            {[0, 1, 2].map((i, index) => {
              if (index === SelectedTap) {
                return (
                  <motion.div
                    key={index}
                    animate={{
                      opacity: [0, 1],
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="text-sm text-zinc-400 mt-5"
                  >
                    {t(`landing:landing_hero_texts.${index}.text`)}
                  </motion.div>
                );
              }
            })}
          </>
        </div>
      </div>
    </motion.div>
  );
}
