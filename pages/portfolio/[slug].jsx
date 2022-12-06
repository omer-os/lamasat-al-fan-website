import { gql } from "@apollo/client";
import Router, { useRouter } from "next/router";
import React from "react";
import client from "../../data";
import { motion } from "framer-motion";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import Head from "next/head";
import { SanityClient, urlFor } from "../../dta";

export default function ProjectDetails({ data }) {
  const router = useRouter();

  return (
    <motion.div
      animate={{
        opacity: [0, 1],
      }}
      className="md:w-4/6 w-full px-6 sm:w-5/6 transition-all sm:mt-[5em] mx-auto mb-20"
    >
      <Head>
        <title>{data[0].ProjectName}</title>
      </Head>
      <div className="sm:relative absolute top-[3.5em] left-0 right-0 h-[25em] w-full -z-10 ">
        <motion.img
          src={urlFor(data[0].ProjectCover)}
          className="w-full h-full object-cover"
          alt=""
        />

        <div className="absolute sm:flex hidden -top-6 -right-6 w-[8em] h-[7em] bg-first -z-10"></div>
        <div className="absolute  bottom-0 sm:-bottom-6 left-0 sm:-left-6 sm:flex hidden sm:w-[8em] h-[7em] sm:bg-first sm:-z-10"></div>
        <div className="absolute  sm:hidden -bottom-1 left-0  w-full h-[7em] bg-gradient-to-t from-white "></div>
      </div>

      <button
        onClick={() => {
          router.push("/portfolio");
        }}
        className="rounded-full flex items-center justify-center w-12 h-12 fixed sm:hidden z-30 top-20 left-2 bg-zinc-200 scale-1 active:scale-95 transition-all"
      >
        <img
          src="/icons/down-arrow.png"
          alt="go back arrow - الرجوع الى الصفحة السابقة"
          className="rotate-90 mr-1"
        />
      </button>

      <div className="mt-[24em] z-20 relative sm:mt-0 transition-all">
        <div className="w-full flex sm:gap-10 gap-2 justify-start sm:mt-3">
          {data[0].Location && (
            <div className="rounded-full py-1 px-4 text-zinc-500 sm:text-sm text-xs bg-zinc-200 border border-zinc-300">
              الموقع: {data[0].Location}
            </div>
          )}
          {data[0].Status && (
            <div className="rounded-full py-1 px-4 text-zinc-500 sm:text-sm text-xs bg-zinc-200 border border-zinc-300">
              الحالة: {data[0].Status}
            </div>
          )}
        </div>

        <div className="flex mt-2 sm:mt-[6em] flex-col">
          <div className="text-2xl sm:text-3xl font-bold">
            {data[0].ProjectName}{" "}
          </div>
          <div className="sm:text-xl text-zinc-500 sm:mt-5 mt-2">
            {data[0].description && data[0].description}{" "}
          </div>
        </div>

        <div className="grid mt-10  sm:grid-cols-3 w-full gap-6 sm:gap-10 sm:auto-rows-[10em] auto-rows-[15em]">
          {data[0].ProjectImages.map((i, index) => (
            <div key={index} className="rounded-xl">
              <img
                src={urlFor(i)}
                className="w-full h-full rounded-xl object-cover"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export const getStaticPaths = async () => {
  const data = await SanityClient.fetch(`*[_type=="projects"]{
    slug
  }
  `);

  const paths = data.map((i) => {
    return {
      params: {
        slug: i.slug.current,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;

  const data =
    await SanityClient.fetch(`*[_type == 'projects' && slug.current == "${slug}"]{
    slug,
    ProjectName,
    ProjectCover,
    ProjectImages,
    Status,
    Location,
    description
  }
  
  `);

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
