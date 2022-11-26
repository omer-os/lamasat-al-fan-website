import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="gap-4 bg-black p-7 flex items-center flex-col text-white w-full">
      <div className="text-xl font-extrabold text-center w-full">
        Lamasat Al Fan
      </div>

      <div className="flex gap-5 items-center mt-2">
        <Link href="/">
          <img
            className="hover:scale-95 transition-all"
            src="/icons/facebook.svg"
            alt=""
          />
        </Link>
        <Link href="/">
          <img
            className="hover:scale-95 transition-all"
            src="/icons/twitter.svg"
            alt=""
          />
        </Link>
        <Link href="/">
          <img
            className="hover:scale-95 transition-all"
            src="/icons/instagram.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="flex sm:flex-row mt-2 flex-col gap-10 items-center">
        <Link href="/">الرئيسية</Link>
        <Link href="/about">من نحن</Link>
        <Link href="/portfolio">مشاريعنا</Link>
        <Link href="/contact">تواصل معنا</Link>
      </div>

      <div className="h-[.2em] max-w-[10em] rounded-xl w-full bg-zinc-800 mt-2" />

      <div className="text-center text-sm text-zinc-300">
        lamasat al fan ©2022
      </div>
    </div>
  );
}
