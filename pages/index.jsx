import {
  CTAcard,
  LandingCarousel,
  LandingServices,
  LandingWorkProccess,
  ContactUs,
  LandingQAndA,
} from "../components";
import { gql } from "@apollo/client";
import client from "../data";
import { motion } from "framer-motion";
export default function Index({ data }) {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
      }}
      exit={{
        opacity: [1, 0],
      }}
    >
      <LandingCarousel data={data} />
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

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        landingPages {
          heroImages {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      data: data,
    },
    revalidate: 10,
  };
}
