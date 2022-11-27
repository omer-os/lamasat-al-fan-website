import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { CTAcard } from "../components/";
export default function About() {
  const [SelectedTap, setSelectedTap] = useState(2);
  return (
    <div>
      <div className="text-3xl text-zinc-400 flex items-center justify-center  pt-8 px-10 gap-3">
        <div className="max-w-[4em] w-full mt-1 h-[.09em] bg-zinc-400 rounded"></div>
        <span className="min-w-max">من نحن</span>
        <div className="max-w-[4em] w-full mt-1 h-[.09em] bg-zinc-400 rounded"></div>
      </div>

      <div className="flex sm:relative sm:top-0 sticky top-14 bg-white flex-row-reverse sm:w-4/6 w-full z-30 sm:mt-10 mt-4 mx-auto items-center justify-center px-2">
        {["الجوائز", "مهمتنا و رؤيتنا", "عن الشركة"].map((i, index) => (
          <button
            onClick={() => setSelectedTap(index)}
            key={index}
            className={`relative bg-white flex-1 py-4 transition-all duration-500 ${index===SelectedTap&&'bg-zinc-200'}`}
          >
            {i}

            {index === SelectedTap && (
              <motion.div
                className="absolute bg-black bottom-0 left-0 w-full h-[.09em]"
                layoutId="bottomborder"
              />
            )}
          </button>
        ))}
      </div>

      {SelectedTap === 2 && <Tap_1 />}
      {SelectedTap === 1 && <Tap_2 />}
      <div className="mt-10">
        <CTAcard />
      </div>
    </div>
  );
}

export const Tap_1 = () => {
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
      className="flex md:flex-row flex-col-reverse mx-auto lg:w-5/6 w-full px-10 sm:px-20 mt-10 items-center gap-10"
    >
      <div className="flex flex-col">
        <div className="text-3xl font-bold">عن الشركة</div>

        <div className="text-xl text-zinc-500">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ.
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
export const Tap_2 = () => {
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
      className="flex relative flex-col mx-auto lg:w-5/6 w-full px-10 sm:px-20 mt-10"
    >
      <div className="text-2xl font-bold">مهمتنا و رؤيتنا</div>
      <div className="text-xl text-zinc-500">
        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
        القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
        التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ.
      </div>
      <div className="text-2xl mt-20 font-bold">مهمتنا و رؤيتنا</div>
      <div className="text-xl text-zinc-500">
        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
        القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
        التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ.
      </div>
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
      <div className="text-3xl font-bold">عن الشركة</div>

      <div className="text-xl text-zinc-500">
        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
        القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
        التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ.
      </div>
    </motion.div>
  );
};









