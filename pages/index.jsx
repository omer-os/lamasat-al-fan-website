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
export default function Index() {
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
        <title>الرئيسية</title>
      </Head>
      <LandingCarousel />
      <LandingServices />
      <LandingWorkProccess />
      <div className="h-1 mx-auto rounded bg-black w-4/6 my-10" />
      <LandingQAndA />
      <div className="my-10">
        <CTAcard />
      </div>
      <ContactUs />
    </motion.div>
  );
}
