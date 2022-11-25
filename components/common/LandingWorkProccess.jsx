import { useState } from "react";

export default function LandingWorkProccess() {
  const [workProcess, setworkProcess] = useState(0);

  const workprostext = [
    "الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام هنا يوجد محتوى نصي، هنا يوجد محتوى نصي",
    "على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة، يقوم مولّدنا هذا باستخدام كلمات من قاموس يحوي على أكثر من 200 كلمة لا تينية، مضاف",
    "على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة  بما تتطلبه يقوم مولّدنا هذا باستخدام كلمات من قاموس يحوي على أكثر من 200 كلمة لا تينية، مضاف",
  ];
  return (
    <section className="sm:mt-24 mt-10">
      <div className="sm:text-center sm:text-3xl text-zinc-500 sm:text-black px-10 sm:font-bold">
        عملية عملنا
      </div>
      <div className="sm:text-center text-2xl sm:text-xl mt-1 sm:text-zinc-400 px-10 font-bold sm:font-normal sm:mx-auto max-w-[15em] ">
        النتائج الممتازة هي نتيجة عمل منضبط
      </div>

      <div className="flex sm:flex-row-reverse flex-col-reverse gap-6 text-xl mt-3 sm:mt-10 md:w-4/6 sm:w-5/6 mx-auto ">
        <div className="mx-4 sm:mx-0 p-10 rounded-xl bg-zinc-200 sm:bg-transparent sm:px-0">
          {workprostext[workProcess]}
        </div>
        <div className="flex sm:min-w-max sm:flex-col sm:justify-start overflow-x-scroll flex-row w-full gap-2 snap-display-none px-10 snap-x snap-mandatory ">
          {["نص وهمي", "نص وهمي", "نص وهمي"].map((i, index) => (
            <button
              onClick={() => setworkProcess(index)}
              className={`transition-all sm:py-5 snap-start py-3 px-3 sm:px-10 rounded-xl font-bold sm:w-max min-w-[10em] border 
          ${
            index === workProcess
              ? "sm:!bg-black bg-zinc-200 sm:!text-white"
              : "text-zinc-500 bg-white"
          }
          `}
            >
              نص وهمي
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
