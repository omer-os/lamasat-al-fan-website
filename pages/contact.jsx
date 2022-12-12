import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";
import { ContactUs } from "../components";

export default function ContectUs() {
  const { t, lang } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>{t(`page_titles.contact`)}</title>
      </Head>

      <ContactUs  />
    </div>
  );
}
