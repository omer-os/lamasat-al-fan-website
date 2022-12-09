import "../styles/globals.css";
import { MainLayout } from "../components";
import { Analytics } from "@vercel/analytics/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
      <Analytics />
    </MainLayout>
  );
}
