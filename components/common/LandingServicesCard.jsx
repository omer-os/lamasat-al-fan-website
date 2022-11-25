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
        className={`flex sm:flex-row flex-col relative sm:w-5/6 gap-10 items-center ${
          dir === "ltr" && "sm:!flex-row-reverse"
        }`}
      >
        <div className="img sm:w-[40em] relative h-[25em] w-full">
          <img className="w-full object-cover h-full" src={img} alt="" />
          <div
            className={`
          absolute w-full h-full bg-zinc-300 -z-10 top-4 
          ${dir === "ltr" ? "-left-4" : "-right-4"}
          `}
          ></div>
        </div>
  
        <div className="flex flex-col">
          <div className="text-zinc-500 text-xl">{category}</div>
          <div className="text-3xl font-black">{title}</div>
  
          <div className="text-xl mt-2 sm:mt-4">{subtitle} </div>
  
          <Link href={link} className="border mt-4 border-black py-2 px-3 w-max">
            عرض المشاريع
          </Link>
        </div>
      </div>
    );
  };
  