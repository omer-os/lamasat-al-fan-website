import {
  CTAcard,
  LandingCarousel,
  LandingServices,
  LandingWorkProccess,
  DropDown,
  ContactUs,
} from "../components";
import { gql } from "@apollo/client";
import client from "../data";

export default function Index({ data }) {
  return (
    <>
      <div>
        <LandingCarousel data={data} />
        <LandingServices />
        <LandingWorkProccess />
        <div className="h-1 mx-auto rounded bg-black w-4/6 my-10" />
        <div className="flex flex-col">
          <div className="text-center text-3xl font-bold">اسئلة الشائعة</div>

          <div className="mx-auto flex flex-col md:w-3/6 sm:w-4/6 px-7 mt-3">
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
        <ContactUs />
      </div>
    </>
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
