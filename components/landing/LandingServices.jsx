import Link from "next/link";
import { LandingServicesCard } from "..";
import { motion } from "framer-motion";
import useTranslation from 'next-translate/useTranslation';

export default function LandingServices() {
  const { t, lang } = useTranslation('common', 'landing');
  const headline = t('landing:headline');
  return (
    <section className=" sm:mt-4 mt-10">
      <div className="text-center text-first">
        <h2 className="text-3xl font-extrabold">{t('landing:section1_title')}</h2>
        <p className="text-lg text-gray-500 font-semibold">{t('landing:section1_subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 py-10 items-center sm:px-12 px-7 lg:px-[10em]">
        <LandingServicesCard
          title="عبارة تسويقية لطيفة هنا"
          subtitle="أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات
            أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات"
          category="سكني"
          img="https://images.unsplash.com/photo-1669277951229-29564e1caa95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          link="/portfolio?category=سكني"
          dir="rtl"
        />
        <LandingServicesCard
          title="عبارة تسويقية لطيفة هنا"
          subtitle="أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات
            أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات"
          category="تجاري"
          img="https://images.unsplash.com/photo-1669562022711-a6f27b26a5ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          link="/portfolio?category=تجاري"
          dir="ltr"
        />
        <LandingServicesCard
          title="عبارة تسويقية لطيفة هنا"
          subtitle="أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات
            أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات"
          category="حكومي"
          img="https://images.unsplash.com/photo-1669934378104-5336b59afd93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          link="/portfolio?category=حكومي"
          dir="rtl"
        />

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
              {t('landing:CTA_projects_headline')}
            </div>
            <div className="text-zinc-500">
              {t('landing:CTA_projects_subheadline')}
            </div>

            <Link
              href="/portfolio"
              className="rounded-xl py-3 mt-4 bg-black text-white font-bold active:scale-95 transition-all active:bg-black/80"
            >
              {t('landing:CTA_projects_button')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
