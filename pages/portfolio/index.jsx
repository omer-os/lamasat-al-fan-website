import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { CTAcard } from "../../components/";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { SanityClient, urlFor } from "../../dta";
import useTranslation from "next-translate/useTranslation";

export default function Index({ Dta }) {
  const router = useRouter();
  const QueryCategory = router.query.category;
  const [SelectedCategory, setSelectedCategory] = useState("residential");

  const { t, lang } = useTranslation("common");

  useEffect(() => {
    QueryCategory === undefined && router.push("?category=residential");

    // setSelectedCategory(QueryCategory);
  }, []);

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
      <Head>
        <title>{t(`page_titles.portfolio`)}</title>
      </Head>

      <div className="w-full sm:px-[3em] sm:mt-[7em] mt-20 flex flex-col">
        <div className="flex px-5 justify-between sm:flex-row-reverse flex-col-reverse sm:items-center sticky sm:relative z-30 sm:top-0 left-0 top-24 items-end ">
          <div className="bg-zinc-300 flex rounded-xl sm:w-max w-full overflow-y-hidden p-2 mt-3 gap-2 ">
            {Dta.categories.map((i, index) => (
              <div
                onClick={() => {
                  setSelectedCategory(i.title.en);
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                key={i.title.en}
                className={`font-bold flex-1 text-sm  p-2 px-6 rounded-xl relative ${
                  SelectedCategory !== i.title.en && "!text-black"
                } text-white transition-all cursor-pointer duration-200`}
              >
                <>
                  <span className="z-20 relative capitalize">{i.title[lang]}</span>
                  {SelectedCategory === i.title.en && (
                    <motion.div
                      className="bg-black w-full rounded-xl h-full absolute inset-0 z-10"
                      layoutId="category-bg"
                    />
                  )}
                </>
              </div>
            ))}
          </div>
        </div>
        <motion.div className="mt-10 px-6 grid md:grid-cols-3 sm:grid-cols-2 gap-10 min-h-[30em] auto-rows-[15em]">
          <AnimatePresence exit>
            {Dta &&
              Dta.projects
                .filter((i) => i.category.title.en === SelectedCategory)
                .map((i, index) => (
                  <motion.div
                    className="bg-zinc-300 rounded-xl shadow-sm"
                    exit={{
                      scale: [1, 0.9],
                      opacity: [1, 0.5],
                    }}
                    animate={{
                      scale: [0.9, 1],
                      opacity: [0.5, 1],
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    key={i.slug.current}
                    layout
                  >
                    <Link
                      href={`/portfolio/${i.slug.current}`}
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <motion.div className="rounded-xl w-full h-full object-cover relative">
                        <div className="img w-full h-full relative">
                          <Image
                            src={urlFor(i.ProjectCover).url()}
                            className={`w-full h-full  object-cover rounded-xl`}
                            alt={i.ProjectName[lang]}
                            fill
                            priority
                          />

                          <div className="absolute rounded-xl h-full bg-gradient-to-t from-black/60 sm:from-black/50 w-full left-0 bottom-0" />
                        </div>

                        <div
                          className={`absolute w-full p-4 bottom-0 text-xl text-white  rounded-b-xl font-bold z-20 
                      left-0
                      ${lang === "ar" ? "text-right" : "text-left"}
                      `}
                        >
                          {i.ProjectName[lang]}
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="mt-20">
        <CTAcard services />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const Dta =
    await SanityClient.fetch(`*[_type in ["categories", "projects"]][0]{
      "categories":*[_type == 'categories']{title},
      "projects":*[_type == 'projects']{
      ProjectName,
      slug,
      category->{title},
      ProjectCover
    }}
  `);

  return {
    props: {
      Dta,
    },
    revalidate: 10,
  };
}
