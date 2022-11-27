import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { Navigation } from "swiper";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
export default function LandingCarousel({ data }) {
  const [ActiveSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef();

  return (
    <div className="flex mt-[8em] flex-col gap-10">
      <div className="flex px-7 mx-auto max-w-[40em] flex-col">
        <div className="md:text-5xl text-4xl font-bold text-center text-first">
          هناك حقيقة مثبتة منذ زمن طويل زمن طويل
        </div>
        <div className=" text-center mt-6 sm:mt-8  text-first max-w-[30em] mx-auto sm:text-base text-sm">
          مرحبًا بكم في Vennea شريك تجاري موثوق به في طريقك لبناء مستقبل أفضل
          للجميع
        </div>

        <div className="flex mx-auto mt-10 gap-10">
          <Link
            href="/portfolio"
            className="px-4 rounded py-2 bg-first transition-all active:scale-95 text-white"
          >
            اهم مشاريعنا
          </Link>
          <Link
            href="/contact"
            className="px-4 active:scale-95 scale-1 transition-all py-2 "
          >
            تواصل معنا
          </Link>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-screen bg-third -z-10"></div>

      <div className="my-7">
        <div className="sm:flex mx-7 sm:mx-0 transition-all hidden">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 35 },
              1024: { slidesPerView: 3, spaceBetween: 35 },
            }}
            grabCursor={true}
            effect={"coverflow"}
            onSlideChange={(s) => {
              setActiveSlide(s.activeIndex);
            }}
          >
            {data.landingPages[0].heroImages.map((i, index) => (
              <SwiperSlide key={index}>
                <img
                  loading="lazy"
                  src={i.url}
                  className="w-full h-[26em] object-cover  rounded"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="sm:flex hidden items-center mx-auto w-max gap-2 mt-8 flex-col">
          <div className="flex gap-3">
            {data.landingPages[0].heroImages.map((i, index) => (
              <motion.div
                key={index}
                animate={{
                  borderWidth: index === ActiveSlide ? 0 : 2,
                  transition: {
                    delay: 0.2,
                  },
                }}
                onClick={() => swiper.slideNext()}
                className="rounded-full md:last:hidden lg:[&:nth-last-child(2)]:hidden w-5 border-first h-5 bg-white flex items-center justify-center"
              >
                {index === ActiveSlide && (
                  <motion.div
                    key={index}
                    layoutId="BlackBgDot"
                    className="w-full scale-[1.09] h-full bg-first rounded-full"
                  />
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-2 flex items-center gap-5">
            <button
              className="active:scale-95 transition-all flex items-center justify-center bg-first py-1 px-2 rounded"
              onClick={() => swiperRef.current.slidePrev()}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
            <button
              className="active:scale-95 transition-all rotate-180 flex items-center justify-center bg-first py-1 px-2 rounded"
              onClick={() => swiperRef.current.slideNext()}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex sm:hidden overflow-x-scroll snap-mandatory px-5 snap-display-none gap-3 snap-x">
          {data.landingPages[0].heroImages.map((i, index) => (
            <div key={index} className="h-[20em] min-w-full snap-center">
              <motion.img
                whileInView={() => console.log(index)}
                loading="lazy"
                src={i.url}
                className="min-w-full snap-center h-full object-cover rounded"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
