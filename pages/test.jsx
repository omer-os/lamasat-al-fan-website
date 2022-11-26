import useMouse from "@react-hook/mouse-position";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Test() {
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
            className="img rounded-lg min-h-[20em] min-w-[20em] relative justify-center bg-red-600"
          >
            0
          </motion.div>

          {AllSlides.map((i, index) => {
            if (Slide === 4) {
              setSlide(0);
            }

            return (
              <motion.div
                animate={{
                  top: 0,
                  left: Slide === index + 1 ? 0 : "min(20em,83vw)",
                  scale: Slide === index + 1 ? 1 : 0.8,
                }}
                className={`img rounded-lg absolute min-h-[20em] min-w-[20em] z-[${index}] snap-end bg-${i}-600`}
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
