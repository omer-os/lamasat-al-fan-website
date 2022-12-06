import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation';
export default function LandingCarousel() {
  const [SelectedTap, setSelectedTap] = useState(0);
  const { t, lang } = useTranslation('common', 'landing');
  const headline = t('landing:headline');
  const dta = [
    {
      title: " تصميم الداخلي",
      text: "مرحبًا  موثوق به في طريقك لبناء مستقبل أفضل للجميع",
      bg: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80",
    },
    {
      title: "في الصفحة التي ",
      text: "مرحبًا بكم في Vennea مرحبًا بكم في Vennea شريك به في طريقك لبناء مستقب به في طريقك لبناء مستقبل أفضل للجميع",
      bg: "https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "في الصفحة لوريم",
      text: "مرحبًا بكم في Vennea مرحبًا بكم في Vennea شريك به في طريقك لبناء مستقبل شريك تجاري موثوق به في طريقك لبناء مستقبل أفضل للجميع",
      bg: "https://images.unsplash.com/photo-1506749841726-3df2e72b9564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <div className="sm:-z-10 sm:absolute relative top-0 left-0 sm:h-full sm:rounded-none rounded-xl sm:overflow-hidden sm:w-[50%] sm:mt-0 mt-20 sm:mx-0 mx-0">
        <div className="sm:block hidden">
          {dta.map((i, index) => (
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
              className={`w-full h-full  absolute top-0 left-0 z-10  object-cover `}
              src={dta[index].bg}
            ></motion.img>
          ))}
        </div>

        <div className="flex overflow-x-scroll snap-display-none snap-x snap-mandatory gap-4 sm:hidden px-8">
          {dta.map((i, index) => (
            <div key={index} className="relative">
              <motion.img
                className={`snap-center min-w-[18em] rounded-xl h-[23em] brightness-75 top-0 left-0 z-10 object-cover`}
                src={dta[index].bg}
              />

              <div className="absolute bottom-5 right-5 text-xl text-white sm:hidden font-semibold">
                {i.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" lg:right-[12em] sm:h-[100vh] md:right-[5em] sm:right-[3em] transition-all sm:mx-0 mx-7 relative flex justify-center flex-col mt-[4%] gap-2 sm:w-[25em]">
        <div>
          <div className="sm:text-5xl text-2xl font-extrabold">
            {headline}
          </div>
          <div className="text-sm sm:hidden text-zinc-400">
            الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام إيبسوم لأنها تعطي
            توزيعاَ.
          </div>
          <Link
            href="/portfolio"
            className="bg-black text-white active:bg-black/90 group active:scale-95 transition-all py-4 px-6 font-bold sm:w-max justify-center mt-4 sm:mt-10 sm:rounded-0 rounded-xl flex gap-7 flex-row"
          >
            <span className="min-w-max">اهم مشاريعنا</span>

            <svg
              className="w-6 h-6 sm:flex hidden rotate-180"
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

        <div className="sm:flex hidden mt-6 flex-col   h-[8em]">
          <div className="flex flex-row w-full z-30">
            {["تصميم داخلي", "تصميم خارجي", "تنفيذ"].map((i, index) => (
              <div
                key={index}
                onClick={() => setSelectedTap(index)}
                className="relative py-4 active:bg-zinc-200 transition-all cursor-pointer px-6"
              >
                {i}

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
            {dta.map((i, index) => {
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
                    {i.text}
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
