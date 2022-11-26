import { gql } from "@apollo/client";
import React from "react";
import client from "../../data";

export default function ProjectDetails({ data }) {
  console.log(data);
  return (
    <div className="md:w-4/6 w-full px-8 sm:w-5/6 transition-all mt-[8em]  mx-auto">
      <div className="sm:relative absolute top-[3.8em] left-0 right-0 h-[25em] w-full -z-10 ">
        <img
          src="https://images.unsplash.com/photo-1669255034440-7d293acdd207?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80"
          className="w-full h-full object-cover"
          alt=""
        />

        <div className="absolute sm:flex hidden -top-6 -right-6 w-[8em] h-[7em] bg-zinc-200 -z-10"></div>
        <div className="absolute  bottom-0 sm:-bottom-6 left-0  sm:-left-6 sm:flex hidden sm:w-[8em] h-[7em]  sm:bg-zinc-200 sm:-z-10"></div>
        <div className="absolute  sm:hidden bottom-0 left-0   w-full h-[7em] bg-gradient-to-t from-white "></div>
      </div>

      <div className="mt-[24em] sm:mt-0 transition-all">
        <div className="w-full flex sm:gap-10 gap-2 justify-start sm:mt-3">
          <div className="rounded-full py-1 px-4 text-zinc-500 text-sm bg-zinc-200 border border-zinc-300">
            الموقع: كركوك
          </div>
          <div className="rounded-full py-1 px-4 text-zinc-500 text-sm bg-zinc-200 border border-zinc-300">
            الحالة: منجز
          </div>
        </div>

        <div className="flex mt-4 sm:mt-8 flex-col">
          <div className="text-2xl sm:text-3xl font-bold">
            ما هو "لوريم إيبسوم" ؟
          </div>
          <div className="sm:text-xl text-zinc-500 sm:mt-2 mt-2">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
          </div>
        </div>

        <div className="grid mt-10  sm:grid-cols-3 w-full gap-6 sm:gap-10 sm:auto-rows-[10em] auto-rows-[15em]">
          <div className="rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1669255034440-7d293acdd207?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80"
              className="w-full h-full rounded-xl object-cover"
              alt=""
            />
          </div>
          <div className="rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1669255034440-7d293acdd207?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80"
              className="w-full h-full rounded-xl object-cover"
              alt=""
            />
          </div>
          <div className="rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1669255034440-7d293acdd207?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80"
              className="w-full h-full rounded-xl object-cover"
              alt=""
            />
          </div>
          <div className="rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1669255034440-7d293acdd207?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80"
              className="w-full h-full rounded-xl object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
