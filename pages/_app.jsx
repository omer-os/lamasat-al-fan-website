import "../styles/globals.css";
import { MainLayout } from "../components";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <MainLayout>
      <AnimatePresence exit>
        <motion.div
          key={router.route}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ 
            duration: .4}}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

      <Analytics />
    </MainLayout>
  );
}
