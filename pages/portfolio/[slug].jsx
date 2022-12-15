import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Head from "next/head";
import { SanityClient, urlFor } from "../../dta";
import useTranslation from "next-translate/useTranslation";
import FsLightbox from "fslightbox-react";
import { useState } from "react";
import Link from "next/link";
import { CTAcard } from "../../components";
import LoadingImage from "../../components/common/LoadingImage";

export default function ProjectDetails({ data }) {
  const { t, lang } = useTranslation("common");
  const [FlashImage, setFlashImage] = useState(false);
  const router = useRouter();

  let images = [];

  const status = [
    {
      en: "design",
      value: {
        ar: "الحالة: تصميم",
        en: "status: design",
      },
    },
    {
      en: "progress",

      value: {
        ar: "الحالة: قيد الانشاء",
        en: "status: in progress",
      },
    },
    {
      en: "done",
      value: {
        ar: "الحالة: منجز",
        en: "status: done",
      },
    },
  ];
  data && data[0].ProjectImages.map((i) => images.push(urlFor(i).url()));

  return (
    <>
      <div
        animate={{
          opacity: [0, 1],
          transition: {
            delay: 0.2,
          },
        }}
        className="md:w-4/6 w-full px-6 sm:w-5/6 transition-all sm:mt-[5em] mx-auto mb-10"
      >
        <Head>
          <title>
            {data && data[0].ProjectName && data[0].ProjectName[lang]}
          </title>
        </Head>
        <div className="sm:relative absolute top-[3.5em] left-0 right-0 h-[25em] w-full -z-10 ">
          {data && data[0].ProjectCover && (
            <LoadingImage
              src={urlFor(data[0].ProjectCover).url()}
              alt={data[0].ProjectName[lang]}
            />
          )}

          <div className="absolute sm:flex hidden -top-6 -right-6 w-[8em] h-[7em] bg-zinc-300 -z-10"></div>
          <div className="absolute  bottom-0 sm:-bottom-6 left-0 sm:-left-6 sm:flex hidden sm:w-[8em] h-[7em] sm:bg-zinc-300 sm:-z-10"></div>
          <div className="absolute sm:hidden -bottom-1 left-0 w-full h-[8em] bg-gradient-to-t from-white "></div>
        </div>

        <button
          onClick={() => {
            // router.push("/portfolio");
            console.log(router.pathname);
          }}
          className="rounded-full flex items-center justify-center w-12 h-12 fixed sm:right-10  sm:hidden z-30 top-24 right-2 bg-white/80 scale-[.8] active:scale-[.6] transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="16px"
            height="16px"
            viewBox="0 0 94.926 94.926"
          >
            <g>
              <path d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0   c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096   c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476   c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62   s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z" />
            </g>
          </svg>
        </button>

        <div className="mt-[24em] z-20 relative sm:mt-0 transition-all">
          <div
            dir={lang === "ar" ? "rtl" : "ltr"}
            className="w-full flex sm:gap-4 gap-1 sm:px-3 justify-start sm:mt-3"
          >
            {data && data[0].ProjectStatus && (
              <div className="rounded-full py-1 px-4 text-zinc-500 sm:text-sm text-xs bg-zinc-200 border border-zinc-300">
                {
                  status.filter((i) => i.en === data[0].ProjectStatus)[0].value[
                    lang
                  ]
                }
              </div>
            )}

            {data && data[0].ProjectLocation && (
              <div className=" rounded-full py-1 px-4 text-zinc-500 sm:text-sm text-xs bg-zinc-200 border border-zinc-300">
                {lang === "ar" ? "الموقع:" : "location:"}
                {data[0].ProjectLocation.location[lang]}
              </div>
            )}
          </div>

          <div
            className={`
        flex mt-2 sm:mt-[6em] flex-col ${
          lang === "ar" ? "text-right" : "text-left"
        }
        `}
          >
            <Link
              href="/portfolio"
              className="font-bold w-max hover:underline sm:flex hidden text-sm mb-2"
            >
              {lang === "ar" ? "صفحة السابقة" : "Go Back"}
            </Link>

            <div className="text-2xl sm:text-3xl font-bold">
              {data && data[0].ProjectName[lang]}
            </div>
            <div className="sm:text-xl text-zinc-500 sm:mt-5 mt-2">
              {data && data[0].description && data[0].description[lang]}
            </div>
          </div>

          <div className="grid mt-10  sm:grid-cols-3 w-full gap-6 sm:gap-10 sm:auto-rows-[10em] auto-rows-[15em]">
            {data &&
              data[0].ProjectImages &&
              data[0].ProjectImages.map((i, index) => (
                <div key={index} className="rounded-xl">
                  <img
                    src={urlFor(i)}
                    className="w-full cursor-pointer active:scale-95 transition-all h-full rounded-xl object-cover"
                    alt=""
                    onClick={() => setFlashImage(!FlashImage)}
                  />
                </div>
              ))}
          </div>
        </div>

        {images && (
          <FsLightbox
            toggler={FlashImage}
            sources={images}
            types={[...new Array(images.length).fill("image")]}
          />
        )}
        <div className="h-1 bg-zinc-400 rounded-full w-full mt-8"></div>
      </div>
      <CTAcard contact />
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await SanityClient.fetch(`*[_type=="projects"]{
      slug{
        current
      }
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
    ProjectName,
    ProjectCover,
    ProjectImages,
    ProjectStatus,
    ProjectLocation->{location{en,ar}},
    description,
    slug
  }
  
  `);

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
