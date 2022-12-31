import Link from "next/link";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

export function LandingServicesCard({ title, subtitle, category, img }) {
  const { t, lang } = useTranslation("common", "landing");

  return (
    <motion.div
      initial={{
        bottom: -100,
        opacity: 0,
      }}
      whileInView={{
        bottom: 0,
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 0.4,
        },
      }}
      viewport={{
        once: true,
      }}
      className="items-center self-start relative flex flex-col gap-5"
    >
      <div className="h-[20em] w-full">
        <img
          src={img}
          className="w-full rounded-xl h-full object-cover"
          alt=""
        />
      </div>
      <div
        className={`
      flex z-20 sm:p-0 p-3 bottom-0 sm:relative absolute flex-col
w-full
      ${lang === "ar" ? "text-right right-0 " : "text-left left-0"}
      `}
      >
        <div className="text-xs sm:text-lg text-white sm:text-zinc-400 sm:font-semibold transition-all">
          {category}
        </div>
        <div className="sm:text-2xl text-lg sm:text-black text-white font-bold">
          {title}
        </div>
        <div className="sm:text-zinc-400 text-white mt-1 sm:mt-3 text-sm sm:text-xl">
          {subtitle}
        </div>
      </div>
      <div className="bg-gradient-to-t from-black/60 absolute bottom-0 left-0 rounded-xl sm:hidden w-full h-full sm:h-0 transition-all" />
    </motion.div>
  );
}
