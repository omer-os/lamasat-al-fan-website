import Link from "next/link";
import React from "react";

export default function CTAcard() {
  return (
    <div className="sm:h-[70vh] text-white relative p-10 py-14 flex items-center justify-center sm:text-right text-center w-full">
      <img
        src="/images/cta-bg.jpg"
        className="w-full absolute top-0 left-0 h-full -z-10 object-cover"
        alt=""
      />

      <div className="flex flex-col sm:items-start sm:w-4/6 max-w-[40em] items-center">
        <div className="sm:text-4xl text-3xl font-bold">عندما كانت طابعة</div>
        <div className="sm:text-2xl text-xl sm:mt-2 mt-3">
          كان Lorem Ipsum هو النص الوهمي القياسي في الصناعة منذ القرن الخامس عشر
          الميلادي ، عندما كانت طابعة غير معروفة.
        </div>
        <div className="flex mt-10 gap-10">
          <Link
            href="/portfolio"
            className="bg-white py-2 px-3 font-bold rounded text-black"
          >
            اهم مشاريعنا
          </Link>
          <Link href="/contact" className="py-2 px-3">
            تواصل معنا
          </Link>
        </div>
      </div>
    </div>
  );
}
