import Link from "next/link";

export const LandingServicesCard = ({
  title,
  subtitle,
  category,
  img,
  link,
  dir,
}) => {
  return (
    <div
      className={`flex sm:flex-row flex-col relative  md:max-w-[65vw] max-w-[90vw] gap-10 items-center ${
        dir === "ltr" && "sm:!flex-row-reverse"
      }`}
    >
      <div className="img sm:w-[40em] relative h-[25em] w-full">
        <img className="w-full object-cover h-full" src={img} alt="" />
        <div
          className={`
          absolute w-full h-full bg-zinc-100 -z-10 top-4 
          ${dir === "ltr" ? "-left-4" : "-right-4 "}
          `}
        ></div>
      </div>

      <div className="flex flex-col">
        <div className="text-second text-xl">{category}</div>
        <div className="sm:text-3xl text-first text-2xl font-black">
          {title}
        </div>

        <div className="sm:text-xl text-zinc-500 mt-2 sm:mt-4">{subtitle} </div>

        <Link
          href={link}
          className="border mt-4 border-first relative hover:text-white  group py-2 text-first hover:border-2 transition-all px-3 w-max"
        >
          عرض المشاريع
          <div className="absolute transition-all w-0 group-hover:w-full h-full bg-first top-0 left-0 -z-10" />
        </Link>
      </div>
    </div>
  );
};
