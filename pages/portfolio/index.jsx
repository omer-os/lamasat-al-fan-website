import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { CTAcard } from "../../components/";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

import { SanityClient, urlFor } from "../../dta";
import useTranslation from "next-translate/useTranslation";

export default function Index({ Dta }) {
  const router = useRouter();
  const QueryCategory = router.query.category;
  const [SelectedCategory, setSelectedCategory] = useState("governmental");

  const { t, lang } = useTranslation("common");

  // useEffect(() => {
  // QueryCategory === undefined && router.push("?category=governmental");
  // setSelectedCategory(QueryCategory)
  // }, []);

  const categories = [
    {
      en: "residential",
      ar: "سكني",
    },
    {
      en: "commercial",
      ar: "تجارس",
    },
    {
      en: "governmental",
      ar: "حكومي",
    },
  ];

  // categories.map((i) => {
  //   console.log(i[lang]);
  // });

  return (
    <>
      <Head>
        <title>اهم مشاريعنا</title>
      </Head>
      <div className="w-full sm:px-20 sm:mt-[7em] mt-20 flex flex-col">
        <div className="flex px-5 justify-between sm:flex-row-reverse flex-col-reverse sm:items-center sticky sm:relative z-30 sm:top-0 left-0 top-8 items-end ">
          <div className="bg-zinc-300 flex rounded-xl sm:w-max w-full overflow-y-hidden p-2 mt-3 gap-2 ">
            {categories.map((i, index) => (
              <button
                onClick={() => router.push(`?category=${i.en}`)}
                key={i.en}
                className={`font-bold flex-1 text-sm  p-2 px-6 rounded-xl relative ${
                  QueryCategory !== i.en && "!text-black"
                } text-white transition-all duration-200`}
              >
                <span className="z-20 relative">{i[lang]}</span>
                {QueryCategory === i.en && (
                  <motion.div
                    className="bg-black w-full rounded-xl h-full absolute inset-0 z-10"
                    layoutId="category-bg"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="sm:text-zinc-500 text-black ml-auto text-xl font-bold sm:font-normal mt-2">
            مشاريع لمسات الفن
          </div>
        </div>
        <motion.div className="mt-10 px-6 grid md:grid-cols-3 sm:grid-cols-2 gap-10 min-h-[30em] auto-rows-[15em]">
          <AnimatePresence exit>
            {Dta &&
              Dta.filter((i) => i.Category === QueryCategory).map(
                (i, index) => (
                  <Link href={`/portfolio/${i.slug.current}`} key={index}>
                    <motion.div
                      exit={{
                        scale: [1, 0.9],
                        opacity: [1, 0.5],
                      }}
                      animate={{
                        scale: [0.9, 1],
                        opacity: [0.5, 1],
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="rounded-xl w-full h-full object-cover relative"
                    >
                      <motion.img
                        layoutId={i.slug.current}
                        src={urlFor(i.ProjectCover)}
                        className="w-full h-full object-cover rounded-xl"
                        alt=""
                      />

                      <div className="absolute w-full p-4 bottom-0 text-xl text-white left-0 rounded-b-xl font-bold z-20">
                        {i.ProjectName[lang]}
                      </div>
                      <div className="absolute rounded-xl h-full bg-gradient-to-t from-black/60 sm:from-black/50 w-full left-0 bottom-0" />
                    </motion.div>
                  </Link>
                )
              )}

            {/* {Dta &&
              Dta.filter((i) => i.category === QueryCategory).map(
                (i, index) => (
                  <Link href={`/portfolio/${i.slug.current}`} key={index}>
                    <motion.div
                      exit={{
                        scale: [1, 0.9],
                        opacity: [1, 0.5],
                      }}
                      animate={{
                        scale: [0.9, 1],
                        opacity: [0.5, 1],
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="rounded-xl w-full h-full object-cover relative"
                    >
                      <motion.img
                        layoutId={i.slug.current}
                        src={urlFor(i.ProjectCover)}
                        className="w-full h-full object-cover rounded-xl"
                        alt=""
                      />

                      <div className="absolute w-full p-4 bottom-0 text-xl text-white left-0 rounded-b-xl font-bold z-20">
                        {i.ProjectName}
                      </div>
                      <div className="absolute rounded-xl h-full bg-gradient-to-t from-black/60 sm:from-black/50 w-full left-0 bottom-0" />
                    </motion.div>
                  </Link>
                )
              )} */}
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="mt-20">
        <CTAcard />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const Dta = await SanityClient.fetch(`*[_type=="projects"]{
    ProjectName,
    slug,
    Category,
    ProjectCover
  }
  `);

  return {
    props: {
      Dta,
    },
    revalidate: 10,
  };
}
