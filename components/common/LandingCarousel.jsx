import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingCarousel() {
  var ScrollRef = useRef(null);
  const handlePrevBtnClick = () => {
    ScrollRef.current.scrollLeft -= 500;
  };
  const handleNextBtnClick = () => {
    ScrollRef.current.scrollLeft += 500;
  };

  return (
    <>
      <img
        src="/images/landing-bg.png"
        alt=""
        className="absolute top-0 left-0 w-full sm:h-[130vh] h-[110vh] transition-all object-fill -z-10"
      />

      <section
        ref={ScrollRef}
        className="flex gap-3 sm:gap-10 items-center snap-display-none scroll-smooth sm:h-[90vh] h-[70vh] snap-x overflow-x-scroll snap-mandatory px-10"
      >
        {[
          {
            title: "هناك حقيقة مثبتة منذ زمن طويل زمن طويل ",
            subtitle:
              "مرحبًا بكم في sdfs شريك تجاري موثوق به في طريقك لبناء مستقبل أفضل للجميع",
            link: "ssdf",
            img: "https://images.unsplash.com/photo-1669231338618-eb8815129599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
          },
          {
            title: "هناك حقيقة مثبتة منذ زمن طويل زمن طويل ",
            subtitle:
              "مرحبًا بكم في sdfs شريك تجاري موثوق به في طريقك لبناء مستقبل أفضل للجميع",
            link: "ssdf",
            img: "https://images.unsplash.com/photo-1669231338618-eb8815129599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
          },
          {
            title: "هناك حقيقة مثبتة منذ زمن طويل زمن طويل ",
            subtitle:
              "مرحبًا بكم في sdfs شريك تجاري موثوق به في طريقك لبناء مستقبل أفضل للجميع",
            link: "ssdf",
            img: "https://images.unsplash.com/photo-1669231338618-eb8815129599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
          },
        ].map((card, index) => (
          <motion.div
            dir="rtl"
            key={index}
            className="
        md:min-w-[50em]
        sm:min-w-[30em]
        min-w-[18em]
        sm:h-[28em] h-[25em] bg-white overflow-hidden rounded-xl relative snap-center"
          >
            <div className="absolute left-0 top-0 h-3/6 sm:h-full w-full sm:w-[50%] transition-all">
              <img
                className="w-full h-full object-cover"
                src={card.img}
                alt=""
              />

              <div className="sm:w-[6em] w-full h-3/6 sm:h-full absolute right-0 sm:top-0 -bottom-1 sm:bg-gradient-to-l bg-gradient-to-t from-white" />
            </div>

            <div className="flex flex-col absolute right-5 sm:top-10 sm:bottom-10 transition-all gap-2 bottom-8 justify-center sm:w-[25em]">
              <div className="sm:text-3xl text-xl font-extrabold">
                {card.title}
              </div>

              <div className="text-zinc-400 sm:text-base text-sm">
                {card.subtitle}
              </div>

              <div className="buttons gap-4 flex">
                <button className="border px-3 ms:mt-1 mt-3 py-1 rounded ">
                  تفاصيل المشروع
                </button>
              </div>
            </div>
          </motion.div>
        ))}

        <div dir="ltr" className="sm:flex hidden">
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={handlePrevBtnClick}
            className="py-2 px-4 rounded bg-black text-white font-bold text-xl absolute z-20 top-[50vh] left-4"
          >
            {"<"}
          </motion.button>
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={handleNextBtnClick}
            className="py-2 px-4 rounded bg-black text-white font-bold text-xl absolute z-20 top-[50vh] right-4"
          >
            {">"}
          </motion.button>
        </div>
      </section>
      <div className="relative flex items-center w-full justify-center gap-10">
        <Link href="/portfolio" className="font-bold">
          بعض مشاريعنا
        </Link>
        <Link
          href="/portfolio"
          className="bg-black text-white font-bold py-2 px-4 rounded"
        >
          معلومات عنا
        </Link>
      </div>
    </>
  );
}
