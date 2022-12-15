import Link from "next/link";
import React from "react";
import { CTAcard } from "../components/";
import { motion } from "framer-motion";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function Services() {
  const { t, lang } = useTranslation("common", "services");
  return (
    <main dir={lang === "ar" ? "rtl" : "ltr"}>
      <Head>
        <title>{t(`common:page_titles.services`)}</title>
      </Head>

      <div className="flex md:flex-row flex-col items-center px-5 sm:px-10  gap-10 xl:w-4/6 mx-auto mt-28">
        <motion.div
          animate={{
            right: [-10, 0],
            opacity: [0, 1],
            transition: {
              delay: 0,
            },
          }}
          className="flex-col min-w-[17em] flex"
        >
          <div className="text-zinc-400"> {t(`services:services`)}</div>
          <div className="font-bold text-black md:text-3xl text-2xl">
            {t(`services:headline`)}
          </div>

          <div className="md:text-xl text-zinc-400">
            {t(`services:subheadline`)}
          </div>

          <Link
            className="py-2 px-4 bg-black mt-4 sm:mt-10 text-white w-max"
            href="/portfolio"
          >
            {t(`services:button`)}
          </Link>
        </motion.div>
        <div
          className={`flex-col flex gap-4 max-w-[28em] 
        
        `}
        >
          {[0, 1, 2].map((service, index) => (
            <motion.div
              animate={{
                bottom: [-10, 0],
                opacity: [0, 1],
                transition: {
                  delay: index * 0.5 + 0.2,
                },
              }}
              key={index}
              className={`px-3 py-4 relative flex flex-col bg-zinc-100 
              
        ${lang === "ar" ? "text-right pr-[8em]" : "text-left pl-[8em]"}`}
            >
              <div className="font-bold">
                {t(`services:services_list.${index}.title`)}
              </div>
              <div className="text-zinc-600 text-sm">
                {t(`services:services_list.${index}.subtitle`)}
              </div>
              <div
                className={`absolute h-full bg-zinc-300  flex items-center justify-center py-3 px-6
        ${lang === "ar" ? "top-0 right-0" : "top-0 left-0"}`}
              >
                <img
                  src={`/icons/${t(`services:services_list.${index}.img`)}.png`}
                  className="object-contain w-14 h-14"
                  alt="z"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <CTAcard projects />
      </div>
    </main>
  );
}
