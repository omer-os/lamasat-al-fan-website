import React from "react";

export default function ContactUs() {
  return (
    <div className=" my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <div className="block rounded-lg  bg-white">
          <div className="flex flex-wrap items-center">
            <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
              <div className="map-container-2 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.956563764727!2d44.35285599999999!3d35.43110599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMzXCsDI1JzUyLjAiTiA0NMKwMjEnMTAuMyJF!5e0!3m2!1sen!2siq!4v1669462202702!5m2!1sen!2siq"
                  width="100%"
                  height="500"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>{" "}
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div className="flex flex-wrap pt-12 lg:pt-0">
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="p-4 bg-black rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <img src="/icons/gmail.png" alt="" />
                      </div>
                    </div>
                    <div className="grow mr-6">
                      <p className="font-bold mb-1">عنوان البريد الالكتروني</p>
                      <p className="text-gray-500">info@lmsatarchi.com</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="p-4 bg-black rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <img src="/icons/phone.png" alt="" />
                      </div>
                    </div>
                    <div className="grow mr-6">
                      <p className="font-bold mb-1">رقم الهاتف</p>
                      <p className="text-gray-500">+1 234-567-89</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                  <div className="flex align-start">
                    <div className="shrink-0">
                      <div className="p-4 bg-black rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <img src="/icons/location.png" alt="" />
                      </div>
                    </div>
                    <div className="grow mr-6">
                      <p className="font-bold mb-1">موقعنا</p>
                      <p className="text-gray-500">
                        كركوك، بداية شارع المعارض
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 lg:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                  <div className="flex align-start">
                    <div className="shrink-0">
                      <div className="p-4 bg-black rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <img src="/icons/social-media.png" alt="" />
                      </div>
                    </div>
                    <div className="grow mr-6">
                      <p className="font-bold mb-1">تواصل الاجتماعي</p>
                      <p className="text-gray-500">instagram</p>
                      <p className="text-gray-500">facebook</p>
                      <p className="text-gray-500">twitter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
