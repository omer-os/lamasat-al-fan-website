import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

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
    <header className="fixed top-0 left-0 w-full px-7 md:px-16 z-50">
      <div
        className={`absolute transition-all inset-0 shadow-xl bg-white -z-10 ${
          ScrollTop === 0 && "!shadow-none sm:!bg-white/0"
        }`}
      />

      <nav
        className={`py-5 w-full ${
          ScrollTop === 0 && "sm:border-b"
        } border-zinc-300 items-center transition-all flex flex-row-reverse md:flex-row justify-between relative z-20`}
      >
        <div className="flex flex-row items-baseline gap-10">
          <Link href="/" className="text-xl font-bold">
            {t("company_name")}
          </Link>

          <div className="md:flex hidden gap-5 text-zinc-500">
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
            />

            <div
              id="dropdown"
              className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefault"
              >
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-100 ">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 "
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 "
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Link
          className={`border-black transition-all border py-2 px-6 hidden md:block font-bold hover:bg-black hover:!text-white text-black 
          ${ScrollTop === 0 && "!bg-transparent"}
          `}
          href="/contact"
        >
          {t("navigation.services_page")}
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
        className={`flex sm:hidden flex-col gap-5 fixed w-full h-full z-10 top-0 items-center transition-all duration-300 justify-center left-full font-bold ${
          OpenSideBar && "!left-0 bg-white visible !opacity-100"
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
          <Link
            onClick={() => setOpenSideBar(false)}
            href="/contact"
            className="bg-black text-white active:scale-95 transition-all py-2 px-3 rounded"
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
          <Link
            href="/"
            className="text-center capitalize text-zinc-600 font-normal"
          >
            lamasat al fan ©2020{" "}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function LanguageDropDown({ setDropDown, DropDown, t, lang }) {
  return (
    <div className="drop-down group border px-3 py-1  rounded relative">
      <button className="dropdown uppercase" onClick={() => setDropDown(!DropDown)}>
        {lang}
      </button>

      <div
        id="dropdownSmall"
        className={`${
          !DropDown ? "hidden" : "show"
        } absolute right-0 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow`}
      >
        <ul className="py-1">
          <li>
            <a
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100  "
              onClick={() => {
                setLanguage("ar");
                setDropDown(!DropDown);
              }}
            >
              Ar
            </a>
          </li>
          <li>
            <a
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100  "
              onClick={() => {
                setLanguage("en");
                setDropDown(!DropDown);
              }}
            >
              En
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
