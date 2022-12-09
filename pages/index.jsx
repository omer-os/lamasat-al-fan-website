import {
  CTAcard,
  LandingCarousel,
  LandingServices,
  LandingWorkProccess,
  ContactUs,
  LandingQAndA,
} from "../components";
import { motion } from "framer-motion";
import Head from "next/head";
import { useTransition } from "react";
import useTranslation from "next-translate/useTranslation";
export default function Index() {
  const { t, lang } = useTranslation("common");

  return (
    <motion.div
      animate={{
        opacity: [0, 1],
      }}
      exit={{
        opacity: [1, 0],
      }}
    >
      <Head>
        <title>{t(`page_titles.home`)}</title>
      </Head>

      <LandingCarousel />
      <LandingServices />
      {/* <LandingWorkProccess /> */}
      <div className="h-1 mx-auto rounded bg-black w-4/6 my-11" />
      <LandingQAndA />
      <div className="my-10">
        <CTAcard />
      </div>
      <ContactUs />
    </motion.div>
  );
}
