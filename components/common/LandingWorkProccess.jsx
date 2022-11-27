import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LandingWorkProccess() {
  const [workProcess, setworkProcess] = useState(0);

  const workprostext = [
    "الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام هنا يوجد محتوى نصي، هنا يوجد محتوى نصي",
    "على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة، يقوم مولّدنا هذا باستخدام كلمات من قاموس يحوي على أكثر من 200 كلمة لا تينية، مضاف",
    "على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة  بما تتطلبه يقوم مولّدنا هذا باستخدام كلمات من قاموس يحوي على أكثر من 200 كلمة لا تينية، مضاف",
  ];

  return (
    <section className="bg-first py-10 sm:mt-24 mt-10">
      <div className="sm:text-center sm:text-3xl text-white  px-10 sm:font-bold">
        عملية عملنا
      </div>
      <div className="sm:text-center text-2xl sm:text-xl mt-1 text-third/70 px-10 font-bold sm:font-normal sm:mx-auto max-w-[15em] ">
        النتائج الممتازة هي نتيجة عمل منضبط
      </div>

      <div className="flex sm:flex-row-reverse flex-col-reverse gap-6 text-xl mt-3 sm:mt-10 md:w-4/6 sm:w-5/6 mx-auto">
        <AnimatePresence exit>
          <motion.div
            animate={{
              bottom: [-10, 0],
              opacity: [0, 1],
            }}
            exit={{
              bottom: [0, -10],
              opacity: [1, 0],
            }}
            className="mx-4 text-zinc-500 sm:mx-0 p-10 rounded-xl bg-third sm:bg-transparent sm:px-0"
          >
            {workprostext[workProcess]}
          </motion.div>
        </AnimatePresence>
        <div className="flex sm:min-w-max sm:flex-col sm:justify-start flex-row w-full gap-2 px-4">
          {["نص وهمي", "نص وهمي", "نص وهمي"].map((i, index) => (
            <button
              key={index}
              onClick={() => setworkProcess(index)}
              className={`transition-all sm:py-5 snap-start py-3 flex-1 text-sm sm:text-md sm:px-10 rounded-xl font-bold sm:w-max relative ${
                index === workProcess ? "!text-white" : "text-zinc-500"
              }`}
            >
              {index === workProcess && (
                <motion.div
                  layoutId="workProsbtn"
                  className="w-full h-full bg-third/20 z-10 absolute top-0 left-0 rounded-xl"
                />
              )}
              <span className="relative  z-20"> نص وهمي</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
