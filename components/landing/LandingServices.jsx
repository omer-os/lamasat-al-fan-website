import Link from "next/link";
import { LandingServicesCard } from "..";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

export default function LandingServices() {
  const { t, lang } = useTranslation("common", "landing");
  return (
    <section className=" sm:mt-4 mt-10">
      <div className="text-center text-first">
        <h2 className="text-3xl font-extrabold">
          {t("landing:section1_title")}
        </h2>
        <p className="text-lg text-gray-500 font-semibold">
          {t("landing:section1_subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 py-10 items-center sm:px-12 px-7 lg:px-[10em]">
        {[0, 1, 2].map((i, index) => (
          <LandingServicesCard
            key={index}
            title={t(`landing:landing_services_list.${index}.title`)}
            subtitle={t(`landing:landing_services_list.${index}.subtitle`)}
            category={t(`landing:landing_services_list.${index}.category`)}
            img={t(`landing:landing_services_list.${index}.bg`)}
          />
        ))}

        <motion.div
          initial={{
            bottom: -100,
            opacity: 0,
          }}
          whileInView={{
            bottom: 0,
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.4,
            },
          }}
          viewport={{
            once: true,
          }}
          className="w-full relative py-10 h-full rounded-xl bg-zinc-50 flex border-zinc-200 border-1 shadow-md items-center justify-center"
        >
          <div className="flex flex-col w-10/12 text-center">
            <div className="text-2xl font-bold">
              {t("landing:CTA_projects_headline")}
            </div>
            <div className="text-zinc-500">
              {t("landing:CTA_projects_subheadline")}
            </div>

            <Link
              href="/portfolio"
              className="rounded-xl py-3 mt-4 bg-black text-white font-bold active:scale-95 transition-all active:bg-black/80"
            >
              {t("landing:CTA_projects_button")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
