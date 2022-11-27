import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function Test() {
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
          <div className="px-4 rounded py-1 border-black border-[.09em]">
            اهم مشاريعنا
          </div>
          <div className="px-4 py-1 ">تواصل معنا</div>
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
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1669432007966-ab0c73488325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                className="w-full h-[26em] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1669432007966-ab0c73488325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                className="w-full h-[26em] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1669432007966-ab0c73488325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                className="w-full h-[26em] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1669432007966-ab0c73488325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                className="w-full h-[26em] object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex sm:hidden overflow-x-scroll snap-mandatory px-5 snap-display-none gap-3 snap-x">
          <div className="h-[20em] min-w-full snap-center">
            <img
              src="https://images.unsplash.com/photo-1669432007966-ab0c73488325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              className="min-w-full snap-center h-full object-cover"
              alt=""
            />
          </div>
          <div className="h-[20em] min-w-full snap-center">
            <img
              src="https://images.unsplash.com/photo-1669432007966-ab0c73488325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              className="min-w-full snap-center h-full object-cover"
              alt=""
            />
          </div>
          <div className="h-[20em] min-w-full snap-center">
            <img
              src="https://images.unsplash.com/photo-1669432007966-ab0c73488325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
