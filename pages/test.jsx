import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Test() {
  const [SelectedTap, setSelectedTap] = useState(2);

  return (
    <div dir="ltr" className="h-screen lg:gap-10 flex flex-row">
      <div className="md:w-[50%] w-full transition-all min-w-[30em] h-full">
        <div className="images" />
      </div>

      <div className="flex mt-32 flex-col lg:relative  ristaticght-10 top-0 w-[25em] text-right">
        <div className="text-5xl font-extrabold">
          هناك حقيقة مثبتة منذ زمن طويل زمن طويل
        </div>

        <div className="bg-black text-white py-4 px-5 font-bold w-max self-end mt-10 flex gap-7 flex-row-reverse">
          <span className="min-w-max">اهم مشاريعنا</span>

          <svg
            className="w-6 h-6 rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </div>

        <div className="flex flex-col">
          <div className="flex mt-10 flex-row-reverse w-full z-30">
            {["تصميم داخلي", "تصميم خارجي", "تنفيذ"].map((i, index) => (
              <button
                onClick={() => setSelectedTap(index)}
                key={index}
                className={`bg-white flex-1 py-4 transition-all duration-500 relative ${
                  index === SelectedTap && "bg-zinc-2002"
                }`}
              >
                {i}

                {index === SelectedTap && (
                  <motion.div
                    className="absolute bg-black w-full h-[.09em] bottom-0 left-0"
                    layoutId="bottomborder"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="text-sm text-zinc-400 mt-5">
            مرحبًا بكم في Vennea مرحبًا بكم في Vennea شريك به في طريقك لبناء
            مستقبل شريك تجاري موثوق به في طريقك لبناء مستقبل أفضل للجميع
          </div>
        </div>
      </div>
    </div>
  );
}
