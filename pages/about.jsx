import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { CTAcard } from "../components/";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
export default function About() {
  const [SelectedTap, setSelectedTap] = useState(1);
  const { t, lang } = useTranslation("about", "common");

  return (
    <div>
      <title>{t(`common:page_titles.about`)}</title>

      <div className="text-3xl text-zinc-400 flex items-center justify-center pt-[4em] px-10 gap-3">
        <div className="max-w-[4em] w-full mt-1 h-[.09em] bg-zinc-400 rounded"></div>
        <span className="min-w-max">
          {" "}
          <div className="text-2xl font-bold">{t(`headline`)}</div>
        </span>
        <div className="max-w-[4em] w-full mt-1 h-[.09em] bg-zinc-400 rounded"></div>
      </div>

      <div className="flex sm:relative sm:top-0 sticky top-16 bg-white flex-row-reverse sm:w-4/6 w-full z-40 sm:mt-10 mt-4 mx-auto items-center justify-center px-2">
        {[0, 1].map((i, index) => (
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              setTimeout(() => {
                setSelectedTap(index);
              }, 1000);
            }}
            key={index}
            className={`relative bg-white flex-1 py-4 transition-all duration-500 ${
              index === SelectedTap && "bg-zinc-200"
            }`}
          >
            {t(`taps.${index}`)}

            {index === SelectedTap && (
              <motion.div
                className="z-20 absolute bg-black bottom-0 left-0 w-full h-[.09em]"
                layoutId="bottomborder"
              />
            )}
          </button>
        ))}
      </div>

      <div>
        {SelectedTap === 0 && <Tap_1 t={t} lang={lang} />}
        {SelectedTap === 1 && <Tap_2 t={t} lang={lang} />}
      </div>
      <div className="mt-10">
        <CTAcard />
      </div>
    </div>
  );
}

export const Tap_1 = ({ t, lang }) => {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        bottom: [-10, 0],
      }}
      exit={{
        bottom: -10,
        opacity: 0,
      }}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`flex md:flex-row flex-col-reverse mx-auto lg:w-5/6 w-full px-10 sm:px-20 mt-10 items-center gap-10 ${
        lang === "ar" ? "text-right" : "text-left"
      }`}
    >
      <div className="flex flex-col">
        <div className="text-3xl capitalize font-bold">
          {t(`about.title_1`)}
        </div>

        <div className="text-xl mt-3 text-zinc-500">
          {t(`about.subtitle_1`)}
        </div>
      </div>

      <div className="flex sm:hidden w-full h-[20em]">
        <img
          src="https://images.unsplash.com/photo-1669255180382-b99ea3fcfe09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="w-full h-full object-cover rounded-xl"
          alt=""
        />
      </div>

      <div className="gap-3 md:h-[70vh] min-w-[20em] lg:min-w-[25em] sm:grid hidden md:grid-cols-2 md:grid-rows-6 grid-cols-5">
        <div className="rounded-xl md:row-span-2">
          <img
            src="https://images.unsplash.com/photo-1669255182290-525a9840c93d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
        <div className=" rounded-xl md:row-span-3">
          <img
            src="https://images.unsplash.com/photo-1669255182290-525a9840c93d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
        <div className=" rounded-xl md:row-span-2">
          <img
            src="https://images.unsplash.com/photo-1669255182290-525a9840c93d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
        <div className=" rounded-xl md:row-span-3">
          <img
            src="https://images.unsplash.com/photo-1669255182290-525a9840c93d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
        <div className=" rounded-xl md:row-span-2">
          <img
            src="https://images.unsplash.com/photo-1669255182290-525a9840c93d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
};
export const Tap_2 = ({ t, lang }) => {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        bottom: [-10, 0],
      }}
      exit={{
        bottom: -10,
        opacity: 0,
      }}
      className={`flex ${
        lang === "ar" ? "!text-right" : "text-left"
      } relative flex-col mx-auto lg:w-5/6 w-full px-10 sm:px-20 mt-10`}
    >
      <div className="text-2xl font-bold">{t(`mission.title_1`)}</div>
      <div className="text-xl text-zinc-500">{t(`mission.subtitle_1`)} </div>
      <div className="text-2xl mt-20 font-bold">{t(`mission.title_2`)}</div>
      <div className="text-xl text-zinc-500">{t(`mission.subtitle_1`)} </div>
    </motion.div>
  );
};
export const Tap_3 = () => {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        bottom: [-10, 0],
      }}
      exit={{
        bottom: -10,
        opacity: 0,
      }}
    >
      <div className="text-3xl font-bold">{t(`about.title_1`)}</div>

      <div className="text-xl text-zinc-500">{t(`about.subtitle_1`)}</div>
    </motion.div>
  );
};
