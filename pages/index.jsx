import {
  CTAcard,
  LandingCarousel,
  LandingServices,
  LandingWorkProccess,
  MainLayout,
  DropDown,
  ContactUs,
} from "../components/Files";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
export default function Index() {
  const [SelectedCard, setSelectedCard] = useState(0);
  const cards = ["blue", "red", "blue"];
  const TheCard = useRef(null);

  const executeScroll = () => TheCard.current.scrollIntoView();

  // useLayoutEffect(() => {
  //   executeScroll();
  // }, []);

  return (
    <>
      <div>
        <LandingCarousel />
        <LandingServices />
        <LandingWorkProccess />
        <div className="h-1 mx-auto rounded bg-black w-4/6 my-10" />
        <div className="flex flex-col">
          <div className="text-center text-3xl font-bold">اسئلة الشائعة</div>

          <div className="mx-auto flex flex-col md:w-3/6 sm:w-4/6 px-10 mt-3">
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
