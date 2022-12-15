import {
  CTAcard,
  LandingCarousel,
  LandingServices,
  ContactUs,
  LandingQAndA,
} from "../components";
import { SanityClient } from "../dta";
import { motion } from "framer-motion";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
export default function Index({ data }) {
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

      <LandingCarousel data={data.FeaturedProjects} />
      <LandingServices />
      <div className="h-1 mx-auto rounded bg-black w-4/6 mt-11" />
      {/* <LandingQAndA data={data.questions} lang={lang} /> */}
      <div className="mb-5">
        <CTAcard projects />
      </div>
      <ContactUs />
    </motion.div>
  );
}

export async function getStaticProps() {
  const data =
    await SanityClient.fetch(`*[_type in ["FeaturedProjects", "questions"]][0]{
    "FeaturedProjects":*[_type == 'FeaturedProjects']{
       project->{
       slug,
       ProjectName,
       description,
       ProjectCover,
       category->{
       title{
       en,ar
     }
     }
     }
     },
   "questions":*[_type == 'questions']{
   q{ar,en},
   a{ar,en}
 }
 }`);

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
