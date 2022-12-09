import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function ContactUs() {
  const { t, lang } = useTranslation("common");

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className=" my-24 px-6 mx-auto">
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
                    <div className={`grow ${lang === "ar" ? "mr-6" : "ml-6"}`}>
                      <p className="font-bold mb-1 capitalize">{t("email")}</p>
                      <p className="text-gray-700 font-bold">
                        info@lmsatarchi.com
                      </p>
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
                    <div className={`grow ${lang === "ar" ? "mr-6" : "ml-6"}`}>
                      <p className="font-bold mb-1 capitalize">{t("phone")}</p>
                      <p className="text-gray-700 font-bold">
                        <span dir="ltr">+964 770 815 5551</span>
                      </p>
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
                    <div className={`grow ${lang === "ar" ? "mr-6" : "ml-6"}`}>
                      <p className="font-bold mb-1 capitalize">
                        {t("address")}
                      </p>
                      <p className="text-gray-700 font-bold">
                        {t("text_address")}
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
                    <div className={`grow ${lang === "ar" ? "mr-6" : "ml-6"}`}>
                      <p className="font-bold mb-1 capitalize">
                        {t("socials")}
                      </p>
                      <div className="flex gap-5 items-center mt-2">
                        <Link
                          href="https://facebook.com/lmsatarchi/"
                          target="_blank"
                        >
                          <img
                            className="hover:scale-95 transition-all fill-white"
                            src="/icons/facebook.svg"
                            alt=""
                          />
                        </Link>
                        <Link
                          href="https://instagram.com/lmsatarchi/"
                          target="_blank"
                        >
                          <img
                            className="hover:scale-95 transition-all"
                            src="/icons/instagram.svg"
                            alt=""
                          />
                        </Link>
                      </div>
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
