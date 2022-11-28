import Link from "next/link";
import { motion } from "framer-motion";

export const LandingServicesCard = ({
  title,
  subtitle,
  category,
  img,
  link,
  dir,
}) => {
  return (
    <motion.div
      initial={{
        bottom: -100,
        opacity: 0,
      }}
      whileInView={{
        bottom: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      className={`flex sm:flex-row flex-col relative  md:max-w-[65vw] max-w-[90vw] gap-10 items-center ${
        dir === "ltr" && "sm:!flex-row-reverse"
      }`}
    >
      <div className="img sm:w-[40em] relative h-[25em] w-full">
        <img className="w-full object-cover h-full" src={img} alt="" 
        
        />
        <div
          className={`
          absolute w-full h-full bg-zinc-100 -z-10 top-4 
          ${dir === "ltr" ? "-left-4" : "-right-4 "}
          `}
        ></div>
      </div>

      <div className="flex flex-col">
        <div className="text-second text-xl">{category}</div>
        <div className="sm:text-3xl w-max relative text-first text-2xl font-black">
          {title}

          <div className="absolute -bottom-[.05em] w-full h-3 bg-first/20 -z-10 "/>
        </div>

        <div className="sm:text-xl text-zinc-500 mt-2 sm:mt-4">{subtitle} </div>

        <Link
          href={link}
          className="mt-4 outline-first outline-2 relative hover:text-white outline group py-2 text-first  transition-all px-3 w-max"
        >
          عرض المشاريع
          <div className="absolute transition-all w-0 group-hover:w-full h-full bg-first top-0 left-0 -z-10" />
        </Link>
      </div>
    </motion.div>
  );
};
