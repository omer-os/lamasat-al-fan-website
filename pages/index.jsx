import {
  CTAcard,
  LandingCarousel,
  LandingServices,
  LandingWorkProccess,
  MainLayout,
  DropDown,
} from "../components/Files";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
export default function Index() {
  const [SelectedCard, setSelectedCard] = useState(0);
  const cards = ["blue", "red", "blue"];
  const TheCard = useRef(null);

  const executeScroll = () => TheCard.current.scrollIntoView();

  // useLayoutEffect(() => {
  //   executeScroll();
  // }, []);

  return (
    <>
      <div>
        <LandingCarousel />
        <LandingServices />
        <LandingWorkProccess />
        <div className="h-1 mx-auto rounded bg-black w-4/6 my-10" />
        <div className="flex flex-col">
          <div className="text-center text-3xl font-bold">اسئلة الشائعة</div>

          <div className="mx-auto flex flex-col md:w-3/6 sm:w-4/6 px-10 mt-3">
            <DropDown
              Ques={"أحياناً عن طريق الصدفة، وأحياناً عن عمد"}
              Ans="أحياناً عن طريق الصدفة، وأحياناً عن عمدأحياناً عن طريق الصدفة، وأحياناً عن عمد"
            />
            <DropDown
              Ques={"أحياناً عن طريق الصدفة، وأحياناً عن عمد"}
              Ans="أحياناً عن طريق الصدفة، وأحياناً عن عمدأحياناً عن طريق الصدفة، وأحياناً عن عمد"
            />
            <DropDown
              Ques={"أحياناً عن طريق الصدفة، وأحياناً عن عمد"}
              Ans="أحياناً عن طريق الصدفة، وأحياناً عن عمدأحياناً عن طريق الصدفة، وأحياناً عن عمد"
            />
            <DropDown
              Ques={"أحياناً عن طريق الصدفة، وأحياناً عن عمد"}
              Ans="أحياناً عن طريق الصدفة، وأحياناً عن عمدأحياناً عن طريق الصدفة، وأحياناً عن عمد"
            />
          </div>
        </div>
        <div className="my-10">
          <CTAcard />
        </div>
        <div class=" my-24 px-6 mx-auto">
          <section class="mb-32 text-gray-800">
            <div class="block rounded-lg  bg-white">
              <div class="flex flex-wrap items-center">
                <div class="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                  <div class="map-container-2 w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.6887374815315!2d44.37917021520217!3d35.41296508025767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1554d71cc5c27b43%3A0xece3b128ef79bd20!2sMelo%20Production!5e0!3m2!1sen!2siq!4v1669384725010!5m2!1sen!2siq"
                      width="100%"
                      height="500"
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>{" "}
                  </div>
                </div>
                <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                  <div class="flex flex-wrap pt-12 lg:pt-0">
                    <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                      <div class="flex items-start">
                        <div class="shrink-0">
                          <div class="p-4 bg-black rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <img src="/icons/gmail.png" alt="" />
                          </div>
                        </div>
                        <div class="grow mr-6">
                          <p class="font-bold mb-1">عنوان البريد الالكتروني</p>
                          <p class="text-gray-500">support@example.com</p>
                        </div>
                      </div>
                    </div>
                    <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                      <div class="flex items-start">
                        <div class="shrink-0">
                          <div class="p-4 bg-black rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <img src="/icons/phone.png" alt="" />
                          </div>
                        </div>
                        <div class="grow mr-6">
                          <p class="font-bold mb-1">رقم الهاتف</p>
                          <p class="text-gray-500">+1 234-567-89</p>
                        </div>
                      </div>
                    </div>
                    <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                      <div class="flex align-start">
                        <div class="shrink-0">
                          <div class="p-4 bg-black rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <img src="/icons/location.png" alt="" />
                          </div>
                        </div>
                        <div class="grow mr-6">
                          <p class="font-bold mb-1">موقعنا</p>
                          <p class="text-gray-500">
                            كركوك, طريق بغداد زز خحصةث صثخهىحخ ثىةحث ثحةى
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="mb-12 lg:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                      <div class="flex align-start">
                        <div class="shrink-0">
                          <div class="p-4 bg-black rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <img src="/icons/social-media.png" alt="" />
                          </div>
                        </div>
                        <div class="grow mr-6">
                          <p class="font-bold mb-1">تواصل الاجتماعي</p>
                          <p class="text-gray-500">instagram</p>
                          <p class="text-gray-500">facebook</p>
                          <p class="text-gray-500">twitter</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>{" "}
      </div>
    </>
  );
}
