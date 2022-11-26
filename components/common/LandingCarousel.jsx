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

export function Test() {
  const [Slide, setSlide] = useState(0);

  const AllSlides = ["red", "blue", "red"];

  return (
    <div className="md:h-[80vh] mb-10 items-center justify-center gap-10 xl:mx-[9em] lg:mx-10 md:mx-8 flex md:flex-row mx-10 flex-col">
      <div className="flex  items-end flex-col ">
        <div
          onClick={() => setSlide(Slide + 1)}
          className="snap-display-none sm:right-0  relative flex flex-row-reverse overflow-x-visible gap-2 w-full sm:w-[25em]"
        >
          <motion.div
            animate={{
              top: 0,
              left: Slide > 0 ? "min(20em,83vw)" : 0,
              scale: Slide > 0 ? 0.8 : 1,
            }}
            className="img min-h-[20em] min-w-[20em] relative justify-center bg-zinc-300"
          >
            0
          </motion.div>

          {AllSlides.map((i, index) => {
            if (Slide === 4) {
              setSlide(0);
            }

            return (
              <motion.div
                key={index}
                animate={{
                  top: 0,
                  left: Slide === index + 1 ? 0 : "min(20em,83vw)",
                  scale: Slide === index + 1 ? 1 : 0.8,
                }}
                className={`img absolute min-h-[20em] min-w-[20em] z-[${index}] snap-end bg-zinc-300`}
              >
                {index + 1}
              </motion.div>
            );
          })}
        </div>
        <div className="flex w-[10em] sm:mx-0 mx-auto mt-3 items-center gap-4">
          <span>0{Slide + 1}</span>
          <div className="w-full rounded-full bg-zinc-100 flex flex-row-reverse -z-10 h-1">
            <motion.div
              animate={{
                width:
                  Slide === 0 ? "10%" : (Slide / AllSlides.length) * 100 + "%",
              }}
              className={`transition-all h-full bg-red-600 rounded-full`}
            ></motion.div>
          </div>
          <span>0{Slide}</span>
        </div>
      </div>

      <div className="flex gap-3 -mt-10 sm:mt-0 max-w-[38em] flex-col">
        <div className="flex font-bold text-2xl sm:text-3xl lg:text-4xl flex-col">
          توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
          إيبسوم لأنها تعطي توزيعاَ طبيعياَ
        </div>
        <div className="sm:text-base text-sm text-zinc-500">
          توضع الفقرات في الصفحة التي يقرتوضع الفقرات في الصفحة التي يقرأها.
          ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ
        </div>

        <div className="flex gap-10 sm:text-base text-sm mt-2 sm:mt-10">
          <button className="py-2 px-4 font-bold bg-blue-600 text-white ">
            تواصل معنا
          </button>
          <button className="py-2 text-blue-600 px-4 font-bold border-2 border-blue-600 ">
            مشاريعنا
          </button>
        </div>
      </div>
    </div>
  );
}
