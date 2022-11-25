import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { CTAcard } from "../../components/Files";
export default function Index() {
  const [SelectedCategory, setSelectedCategory] = useState("تجاري");
  return (
    <>
      <div className="w-full sm:px-20 px-6 sm:mt-[7em] flex flex-col">
        <div className="flex justify-between sm:flex-row flex-col-reverse sm:items-center items-end">
          <div className="bg-[#E8E8E8] flex rounded-xl sm:w-max w-full p-2 mt-3 gap-2">
            {["تجاري", "حكومي", "سكني"].map((i, index) => (
              <button
                onClick={() => setSelectedCategory(i)}
                key={i}
                className="font-bold flex-1 text-sm p-2 px-6 rounded-xl relative"
              >
                <span className="z-20 relative">{i}</span>
                {SelectedCategory === i && (
                  <motion.div
                    className="bg-[#B8B8B8] w-full rounded-xl h-full absolute inset-0 z-10"
                    layoutId="category-bg"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="text-zinc-500 text-xl mt-2">مشاريع لمسات الفن</div>
        </div>{" "}
        <motion.div className="mt-10 grid sm:grid-cols-3 gap-10">
          <AnimatePresence>
            {[
              "https://plus.unsplash.com/premium_photo-1661375445819-c04f5418ff53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
              "https://plus.unsplash.com/premium_photo-1661375445819-c04f5418ff53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
              "https://plus.unsplash.com/premium_photo-1661375445819-c04f5418ff53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
              "https://plus.unsplash.com/premium_photo-1661375445819-c04f5418ff53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
            ].map((i, index) => (
              <motion.div
                exit={{
                  scale: [1, 0.9],
                  opacity: [1, 0.5],
                }}
                animate={{
                  scale: [0.9, 1],
                  opacity: [0.5, 1],
                }}
                key={index}
                className="rounded-xl w-full h-full object-cover"
              >
                <img
                  src={i}
                  className="w-full h-full object-cover rounded-xl"
                  alt=""
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>{" "}
      </div>
      <div className="mt-20">
        <CTAcard />
      </div>
    </>
  );
}
