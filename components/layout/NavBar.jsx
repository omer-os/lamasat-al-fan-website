import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import Image from "next/image";

export default function NavBar() {
  const [OpenSideBar, setOpenSideBar] = useState(false);
  const [DropDown, setDropDown] = useState(false);
  const [ScrollTop, setScrollTop] = useState(0);
  const router = useRouter();
  const { t, lang } = useTranslation("common");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollTop(window.pageYOffset);
    });
  }, []);

  return (
    <header
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="fixed top-0 left-0 w-full px-7 md:px-15 z-50"
    >
      <div
        className={`absolute transition-all inset-0 shadow-xl bg-white -z-10 ${
          ScrollTop === 0 && "!shadow-none sm:!bg-white/0"
        }`}
      />

      <nav
        className={`py-5 w-full ${
          ScrollTop === 0 && "sm:border-b"
        } border-zinc-300 items-center transition-all flex md:!flex-row justify-between relative z-20 ${
          lang === "ar" && "flex-row-reverse"
        }`}
      >
        <div className="flex flex-row items-center gap-10">
          <Link href="/" className="text-xl font-bold">
            {/* {t("company_name")} */}
            <Image
              src="/images/logo.png"
              width={50}
              height={50}
              alt="lmsat logo"
            />
          </Link>

          <div className="md:flex hidden gap-5 text-zinc-500 items-center">
            {[
              {
                name: t("navigation.home_page"),
                link: "/",
              },
              {
                name: t("navigation.about_page"),
                link: "/about",
              },
              {
                name: t("navigation.portfolio_page"),
                link: "/portfolio",
              },
              {
                name: t("navigation.services_page"),
                link: "/services",
              },
            ].map((i, index) => (
              <Link
                scroll={true}
                key={index}
                className={`font-sans relative hover:font-bold hover:text-black/80 transition-all ${
                  router.pathname == i.link && "font-bold text-black"
                }`}
                href={i.link}
              >
                {router.pathname === i.link && (
                  <motion.div
                    animate={{
                      opacity: [0, 1],
                      scale: [0.9, 1],
                    }}
                    className="absolute w-full h-[.09em] rounded -bottom-1 left-0 z-20 bg-white"
                  />
                )}
                {i.name}
              </Link>
            ))}

            <LanguageDropDown
              lang={lang}
              setDropDown={setDropDown}
              DropDown={DropDown}
              t={t}
              setOpenSideBar={setOpenSideBar}
            />
          </div>
        </div>

        <Link
          className={`transition-all border border-black py-2 px-6 hidden md:block font-bold hover:bg-black hover:!text-white  
          ${
            ScrollTop === 0 &&
            router.pathname == "/" &&
            "!bg-transparent !border-white text-white"
          }
          `}
          href="/contact"
        >
          {t("navigation.contact_page")}
        </Link>

        <div
          onClick={() => setOpenSideBar(!OpenSideBar)}
          className="burger-btn md:hidden"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`line line-${i} ${OpenSideBar && "active"}`}
            />
          ))}
        </div>
      </nav>

      <div
        className={`flex md:hidden flex-col gap-5 fixed w-full h-full z-10 top-0 items-center transition-all duration-300 justify-center left-full font-bold ${
          OpenSideBar && "!left-0 bg-white visible !opacity-100"
        }  opacity-0 md:opacity-100 md:left-0`}
      >
        {[
          {
            name: t("navigation.home_page"),
            link: "/",
          },
          {
            name: t("navigation.about_page"),
            link: "/about",
          },
          {
            name: t("navigation.portfolio_page"),
            link: "/portfolio",
          },
          {
            name: t("navigation.services_page"),
            link: "/services",
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
        <LanguageDropDown
          lang={lang}
          setDropDown={setDropDown}
          DropDown={DropDown}
          t={t}
          setOpenSideBar={setOpenSideBar}
        />

        <div className="flex items-center sm:hidden flex-col-reverse mt-1 text-sm gap-3">
          <Link
            onClick={() => setOpenSideBar(false)}
            href="/contact"
            className="bg-black text-white active:scale-95 transition-all py-2 px-3 rounded"
          >
            {t("navigation.contact_page")}
          </Link>
        </div>

        <div className="sm:hidden absolute items-center gap-3 bottom-2 flex flex-col">
          <div className="flex items-center gap-5">
            <Link href="https://facebook.com/lmsatarchi/" target="_blank">
              <img
                className="hover:scale-95 transition-all fill-white"
                src="/icons/facebook.svg"
                alt=""
              />
            </Link>
            <Link href="https://instagram.com/lmsatarchi/" target="_blank">
              <img
                className="hover:scale-95 transition-all"
                src="/icons/instagram.svg"
                alt=""
              />
            </Link>
            <Link href="https://instagram.com/lmsatarchi/" target="_blank">
              <img
                className="hover:scale-95 transition-all "
                src="/icons/whatsapp.svg"
                alt=""
              />
            </Link>
          </div>
          <Link
            href="/"
            className="text-center capitalize text-zinc-600 font-normal"
          >
            {t("company_name")} ??{new Date().getFullYear()}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function LanguageDropDown({
  setDropDown,
  DropDown,
  setOpenSideBar,
  lang,
}) {
  return (
    <div className="drop-down group border  rounded relative cursor-pointer ">
      <button
        onClick={() => setDropDown(!DropDown)}
        className="dropdown uppercase px-3 py-1 active:scale-95 transition-all"
      >
        {lang}
      </button>

      <div
        className={`${
          !DropDown ? "hidden" : "show"
        } absolute   z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow 
        left-[50%]
        translate-x-[-50%]
        text-center mt-1
        `}
      >
        <ul className="py-1">
          <li>
            <a
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100  "
              onClick={() => {
                setLanguage("ar");
                setDropDown(!DropDown);
                setOpenSideBar(false);
              }}
            >
              ??????????????
            </a>
          </li>
          <li>
            <a
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100  "
              onClick={() => {
                setLanguage("en");
                setDropDown(!DropDown);
                setOpenSideBar(false);
              }}
            >
              English
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
