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

// export default function CTAcard() {
//   return (
//     <div className="text-white ctaGradient mx-2 sm:mx-16 lg:mx-40 rounded-xl transition-all py-8 px-5 sm:p-10 mb-10">
//       <div className="flex sm:pr-8 pr-7 transition-all relative flex-col max-w-[50em]">
//         <div className="bg-fourth right-0 w-2 top-0 bottom-0 absolute h-full" />
//         <p className="text-2xl transition-all sm:text-4xl font-bold">
//           عندما كانت طابعة عندما كانت طابعة عندما كانت طا بعة عندما كا نت طابعة
//         </p>
//         <p className="mt-2 transition-all text-sm sm:text-base max-w-[45em]">
//           كان Lorem Ipsum هو النص الوهمي القياسي في الصناعة الوهمي القياسي في
//           الصناعة الصناعة الوهمي القيا سي في
//           الصناعة  الوهمي القياسي في الصناعة{" "}
//         </p>
//         <Link
//           className="bg-fourth w-max py-2 px-3 text-first rounded active:scale-95 transition-all font-bold mt-10"
//           href="/portfolio"
//         >
//           مشاريعنا
//         </Link>
//       </div>
//     </div>
//   );
// }
