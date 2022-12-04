// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import "swiper/css";
// import Link from "next/link";
// import { Navigation } from "swiper";
// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// export default function LandingCarousel({ data }) {
//   const [ActiveSlide, setActiveSlide] = useState(0);
//   const swiperRef = useRef();

//   return (
//     <div className="flex mt-[8em] flex-col gap-10">
//       <div className="flex px-7 mx-auto max-w-[40em] flex-col">
//         <div className="md:text-5xl text-4xl font-bold relative text-center text-first">
//           هناك حقيقة مثبتة منذ زمن طويل زمن طويل
//         </div>
//         <div className=" text-center mt-6 sm:mt-8  text-first max-w-[30em] mx-auto sm:text-base text-sm">
//           مرحبًا بكم في Vennea شريك تجاري موثوق به في طريقك لبناء مستقبل أفضل
//           للجميع
//         </div>

//         <div className="flex mx-auto mt-10 gap-10">
//           <Link
//             href="/portfolio"
//             className="px-4 rounded py-2 bg-gradient-to-br to-indigo-600 from-indigo-700 transition-all active:scale-95 text-white"
//           >
//             اهم مشاريعنا
//           </Link>
//           <Link
//             href="/contact"
//             className="px-4 active:scale-95 scale-1 transition-all py-2 "
//           >
//             تواصل معنا
//           </Link>
//         </div>
//       </div>

//       <div className="absolute top-0 left-0 w-full h-screen bg-third -z-10"></div>

//       <div className="my-7">
//         <div className="sm:flex md:mx-20 transition-all hidden">
//           <Swiper
//             onSwiper={(swiper) => {
//               swiperRef.current = swiper;
//             }}
//             breakpoints={{
//               0: { slidesPerView: 1, spaceBetween: 10 },
//               768: { slidesPerView: 2, spaceBetween: 35 },
//               1024: { slidesPerView: 3, spaceBetween: 35 },
//             }}
//             grabCursor={true}
//             effect={"coverflow"}
//             onSlideChange={(s) => {
//               setActiveSlide(s.activeIndex);
//             }}
//           >
//             {data.landingPages[0].heroImages.map((i, index) => (
//               <SwiperSlide key={index}>
//                 <img
//                   loading="lazy"
//                   src={i.url}
//                   className="w-full h-[26em] object-cover  rounded"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//         <div className="sm:flex hidden items-center mx-auto w-max gap-1 mt-8 flex-col">
//           <div className="flex gap-3">
//             {data.landingPages[0].heroImages.map((i, index) => (
//               <motion.div
//                 key={index}
//                 animate={{
//                   borderWidth: index === ActiveSlide ? 0 : 2,
//                   transition: {
//                     delay: 0.2,
//                   },
//                 }}
//                 onClick={() => swiper.slideNext()}
//                 className="rounded-full md:last:hidden lg:[&:nth-last-child(2)]:hidden w-5 border-first h-5 bg-white flex items-center justify-center"
//               >
//                 {index === ActiveSlide && (
//                   <motion.div
//                     key={index}
//                     layoutId="BlackBgDot"
//                     className="w-full scale-[1.09] h-full bg-first rounded-full"
//                   />
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           <div className="mt-2 flex items-center gap-5">
//             <button
//               className="active:scale-95 transition-all flex items-center justify-center bg-first py-1 px-2 rounded"
//               onClick={() => swiperRef.current.slidePrev()}
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="white"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 5l7 7-7 7"
//                 ></path>
//               </svg>
//             </button>
//             <button
//               className="active:scale-95 transition-all rotate-180 flex items-center justify-center bg-first py-1 px-2 rounded"
//               onClick={() => swiperRef.current.slideNext()}
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="white"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 5l7 7-7 7"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//         <div className="flex sm:hidden overflow-x-scroll snap-mandatory px-5 snap-display-none gap-3 snap-x">
//           {data.landingPages[0].heroImages.map((i, index) => (
//             <div key={index} className="h-[20em] min-w-full snap-center">
//               <motion.img
//                 loading="lazy"
//                 src={i.url}
//                 className="min-w-full snap-center h-full object-cover rounded"
//                 alt=""
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Link from "next/link";
export default function LandingCarousel() {
  const [SelectedTap, setSelectedTap] = useState(1);

  const dta = [
    {
      title: " تصميم الداخلي",
      text: "مرحبًا  موثوق به في طريقك لبناء مستقبل أفضل للجميع",
      bg: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80",
    },
    {
      title: "في الصفحة التي ",
      text: "مرحبًا بكم في Vennea مرحبًا بكم في Vennea شريك به في طريقك لبناء مستقب به في طريقك لبناء مستقبل أفضل للجميع",
      bg: "https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "في الصفحة لوريم",
      text: "مرحبًا بكم في Vennea مرحبًا بكم في Vennea شريك به في طريقك لبناء مستقبل شريك تجاري موثوق به في طريقك لبناء مستقبل أفضل للجميع",
      bg: "https://images.unsplash.com/photo-1506749841726-3df2e72b9564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="sm:-z-10 sm:absolute relative top-0 left-0 sm:h-full sm:rounded-none rounded-xl sm:overflow-hidden sm:w-[50%] sm:mt-0 mt-20 sm:mx-0  mx-0">
        <div className="sm:block hidden">
          {dta.map((i, index) => (
            <motion.img
              key={index}
              animate={{
                opacity: SelectedTap === index ? 1 : 0,
                scale: SelectedTap === index ? 1 : 1.1,
                transition: {
                  type: "just",
                  duration: 1,
                },
              }}
              className={`w-full h-full  absolute top-0 left-0 z-10  object-cover `}
              src={dta[index].bg}
            ></motion.img>
          ))}
        </div>

        <div className="flex overflow-x-scroll snap-display-none snap-x snap-mandatory gap-4 sm:hidden px-8">
          {dta.map((i, index) => (
            <div key={index} className="relative">
              <motion.img
                className={`snap-center min-w-[19em] rounded-xl h-[23em] brightness-75 top-0 left-0 z-10 object-cover`}
                src={dta[index].bg}
              />

              <div className="absolute bottom-5 right-5 text-2xl text-white sm:hidden font-bold">
                {i.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="sm:mt-[8em]  
      lg:right-[12em] md:right-[5em] sm:right-[3em] transition-all sm:mx-0 mx-7 relative flex flex-col mt-4 gap-2 sm:w-[25em]"
      >
        <div className="sm:text-5xl text-2xl font-extrabold">
          هناك حقيقة مثبتة منذ طويل زمن طويل
        </div>
        <div className="text-sm sm:hidden text-zinc-400">
          الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام إيبسوم لأنها تعطي
          توزيعاَ.
        </div>
        <Link
          href="/portfolio"
          className="bg-black text-white active:bg-black/90 group active:scale-95 transition-all py-4 px-6 font-bold sm:w-max justify-center mt-5 sm:mt-10 sm:rounded-0 rounded-xl flex gap-7 flex-row"
        >
          <span className="min-w-max">اهم مشاريعنا</span>

          <svg
            className="w-6 h-6 sm:flex hidden rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </Link>

        <div className="sm:flex hidden mt-6 flex-col ">
          <div className="flex flex-row w-full z-30">
            {["تصميم داخلي", "تصميم خارجي", "تنفيذ"].map((i, index) => (
              <div
                key={index}
                onClick={() => setSelectedTap(index)}
                className="relative py-4 active:bg-zinc-200 transition-all cursor-pointer px-6"
              >
                {i}

                {index === SelectedTap && (
                  <motion.div
                    layoutId="bottom-b"
                    className="h-[.1em] w-full bg-black absolute bottom-0 z-20 left-0"
                  />
                )}
              </div>
            ))}
          </div>
          <>
            {dta.map((i, index) => {
              if (index === SelectedTap) {
                return (
                  <motion.div
                    key={index}
                    animate={{
                      opacity: [0, 1],
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="text-sm text-zinc-400 mt-5"
                  >
                    {i.text}
                  </motion.div>
                );
              }
            })}
          </>
        </div>
      </div>
    </div>
  );
}
