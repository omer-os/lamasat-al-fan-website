import {
  CTAcard,
  LandingCarousel,
  LandingServices,
  LandingWorkProccess,
  MainLayout,
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

        <div className="my-10">
          <CTAcard />
        </div>
      </div>
    </>
  );
}
