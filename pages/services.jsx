import Link from "next/link";
import React from "react";
import { CTAcard } from "../components/";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Services() {
  return (
    <main>
      <Head>
        <title>خدماتنا</title>
      </Head>
      <div className="flex md:flex-row flex-col items-center px-6 sm:px-10 mt-20 gap-10 lg:w-4/6 mx-auto sm:mt-28">
        <motion.div
          animate={{
            right: [-10, 0],
            opacity: [0, 1],
            transition: {
              delay: 0,
            },
          }}
          className="flex-col min-w-[17em] flex"
        >
          <div className="text-zinc-400">خدماتنا</div>
          <div className="font-bold text-first md:text-3xl text-2xl">
            عبارة تسويقية لطيفة هنا تسويقية لطيفة هنا
          </div>

          <div className="md:text-xl text-zinc-400">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء.
          </div>

          <Link
            className="py-2 px-4 bg-first mt-4 sm:mt-10 text-white w-max"
            href="/portfolio"
          >
            اهم مشاريعنا
          </Link>
        </motion.div>
        <div className="flex-col flex gap-4 max-w-[28em]">
          {[
            {
              title: "تصاميم الهندسية",
              subtitle:
                "تصميم مباني حضرية, معمارية, انشائية, ميكانيكية و كهربائية.",
              img: "design",
            },
            {
              title: "الاستشارات الهندسية",
              subtitle:
                "إشراف سلامة عام (HSE) خلال فترة العمل اقتراحات أو تعديلات على التصاميم الهندسية الموجودة تقديم الحلول الهندسية للمشاكل الهندسية الكبرى",
              img: "consulting",
            },
            {
              title: "التنفيذ",
              subtitle:
                "تنفيذ المشاريع الهندسية (بيوت، طرق، مجمعات سكنية، عمارات، أبراج سكنية… وغيرها).",
              img: "implement",
            },
          ].map((service, index) => (
            <motion.div
              animate={{
                bottom: [-10, 0],
                opacity: [0, 1],
                transition: {
                  delay: index * 0.5 + 0.2,
                },
              }}
              key={index}
              className="px-3 py-4 relative flex flex-col bg-zinc-100 pr-[8em]"
            >
              <div className=" font-bold">{service.title}</div>
              <div className="text-zinc-600 text-sm">{service.subtitle}</div>
              <div className="absolute h-full bg-zinc-300 top-0 right-0 flex items-center justify-center py-3 px-6">
                <img
                  src={`/icons/${service.img}.png`}
                  className="object-contain w-14 h-14"
                  alt="z"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <CTAcard />
      </div>
    </main>
  );
}
