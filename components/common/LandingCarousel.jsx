import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";

export default function LandingCarousel({ data }) {
  const [ActiveSlide, setActiveSlide] = useState(0);

  return (
    <div className="flex mt-[8em] flex-col gap-10">
      <div className="flex px-7 mx-auto max-w-[40em] flex-col">
        <div className="md:text-5xl text-4xl font-bold text-center">
          هناك حقيقة مثبتة منذ زمن طويل زمن طويل
        </div>
        <div className=" text-center mt-6 sm:mt-8 text-zinc-600  max-w-[30em] mx-auto sm:text-base text-sm">
          مرحبًا بكم في Vennea شريك تجاري موثوق به في طريقك لبناء مستقبل أفضل
          للجميع
        </div>

        <div className="flex mx-auto mt-10 gap-10">
          <Link
            href="/portfolio"
            className="px-4 rounded py-1 border-black border-[.09em] active:bg-black bg-white transition-all active:scale-95 active:text-white"
          >
            اهم مشاريعنا
          </Link>
          <Link
            href="/contact"
            className="px-4 active:scale-95 scale-1 transition-all py-1 "
          >
            تواصل معنا
          </Link>
        </div>
      </div>
      <div className=" my-7">
        <div className="sm:flex mx-7 sm:mx-0 transition-all hidden">
          <Swiper
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

        <div className="flex sm:hidden overflow-x-scroll snap-mandatory px-5 snap-display-none gap-3 snap-x">
          {data.landingPages[0].heroImages.map((i, index) => (
            <div key={index} className="h-[20em] min-w-full snap-center">
              <img
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
