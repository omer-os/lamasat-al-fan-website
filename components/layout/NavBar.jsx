import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";

export default function NavBar() {
  const [OpenSideBar, setOpenSideBar] = useState(false);
  const [Lang, setLang] = useState("ar");
  const [LangOpened, setLangOpened] = useState(false);
  const { t, lang } = useTranslation("common");

  const router = useRouter();

  return (
    <nav
      dir="ltr"
      className="flex z-40 justify-between items-center px-7 py-4 fixed right-0 top-0 transition-all sm:bg-white/0 sm:backdrop-blur-md left-0 w-full"
    >
      <div className="w-full h-full absolute inset-0 sm:bg-white/0 sm:hidden transition-all bg-white/0 backdrop-blur-lg z-10"></div>

      <Link
        href="/"
        className="text-md:xl  font-extrabold relative z-50 capitalize text-first"
      >
        {/* {t(`common:logo`)} */}
        lamasat al fan
      </Link>

      <div
        className={`flex flex-col sm:flex-row gap-5 sm:relative fixed sm:w-max sm:h-max w-full h-full z-40 top-0 items-center transition-all duration-300 justify-center left-full font-bold ${
          OpenSideBar && "!left-0 bg-third visible !opacity-100"
        }  opacity-0 sm:opacity-100 sm:left-0`}
      >
        {[
          {
            name: "الرئيسية",
            link: "/",
          },
          {
            name: "من نحن",
            link: "/about",
          },
          {
            name: "خدماتنا",
            link: "/services",
          },
          {
            name: "مشاريعنا",
            link: "/portfolio",
          },
        ].map((i, index) => (
          <Link
            className={`${
              router.pathname === i.link && "!font-bold scale-[1.09]"
            } scale-1 transition-all font-normal`}
            key={index}
            onClick={() => setOpenSideBar(false)}
            href={i.link}
          >
            {i.name}
          </Link>
        ))}

        <div className="flex items-center sm:hidden flex-col-reverse mt-1 text-sm gap-3">
          {/* language dropdown */}
          {/* <div
            className="flex active:scale-[.95] transition-all cursor-pointer relative px-3 items-center gap-1"
            onClick={() => setLangOpened(!LangOpened)}
          >
            <div className="text-lg uppercase">{Lang}</div>
            <img
              className={`${
                LangOpened && "!rotate-180"
              } rotate-0 transition-all`}
              src="/icons/down-arrow.png"
              alt=""
            />
            <div
              className={`uppercase bg-[#EAEAEA] absolute w-[6em] text-center right-0 rounded-xl  flex h-0 transition-all -bottom-10 opacity-0 overflow-hidden flex-col gap-1 ${
                LangOpened && "!h-[4.2em] opacity-100 -bottom-[4em]"
              } `}
            >
              {["ar", "en"].map((i) => (
                <div
                  key={i}
                  className={`hover:bg-[#cccccc] py-1 rounded cursor-pointer ${
                    Lang === i && "bg-[#BFBFBF]"
                  } transition-all`}
                  onClick={() => setLang(i)}
                >
                  {i}
                </div>
              ))}
            </div>
          </div> */}

          <Link
            onClick={() => setOpenSideBar(false)}
            href="/contact"
            className="bg-first text-white active:scale-95 transition-all py-2 px-3 rounded"
          >
            تواصل معنا
          </Link>
        </div>

        <div className="sm:hidden absolute items-center gap-3 bottom-2 flex flex-col">
          <div className="flex items-center gap-5">
            <img src="/icons/facebook.svg" alt="" />
            <img src="/icons/twitter.svg" alt="" />
            <img src="/icons/instagram.svg" alt="" />
          </div>
          <div className="text-center capitalize text-zinc-600 font-normal">
            lamasat al fan ©2020{" "}
          </div>
        </div>
      </div>

      <div className="sm:flex hidden gap-3">
        {/* language dropdown */}
        {/* <div
          className="flex active:scale-[.95] transition-all cursor-pointer relative px-3 items-center gap-1"
          onClick={() => setLangOpened(!LangOpened)}
        >
          <div className="text-lg uppercase">{Lang}</div>
          <img
            className={`${LangOpened && "!rotate-180"} rotate-0 transition-all`}
            src="/icons/down-arrow.png"
            alt=""
          />
          <div
            className={`uppercase bg-[#EAEAEA] absolute w-[6em] text-center right-0 rounded-xl  flex h-0 transition-all -bottom-10 opacity-0 overflow-hidden flex-col gap-1 ${
              LangOpened && "!h-[4.2em] opacity-100 -bottom-[4em]"
            } `}
          >
            {["ar", "en"].map((i) => (
              <div
                key={i}
                className={`hover:bg-[#cccccc] py-1 rounded cursor-pointer ${
                  Lang === i && "bg-[#BFBFBF]"
                } transition-all`}
                onClick={() => setLang(i)}
              >
                {i}
              </div>
            ))}
          </div>
        </div> */}

        <Link
          href="/contact"
          className="bg-first text-white  py-2 px-3 rounded"
        >
          تواصل معنا
        </Link>
      </div>

      <div
        onClick={() => setOpenSideBar(!OpenSideBar)}
        className="burger-btn sm:hidden"
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`line line-${i} ${OpenSideBar && "active"}`}
          />
        ))}
      </div>
    </nav>
  );
}
