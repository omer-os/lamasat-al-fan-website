import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function LoadingImage({ src, alt }) {
  const [Loading, setLoaded] = useState(true);
  return (
    <>
      <Image
        src={src}
        className={`w-full h-full  object-cover rounded-xl ${
          Loading && "animate-pulse bg-zinc-400"
        }`}
        alt={alt}
        fill
        onLoadingComplete={() => setLoaded(false)}
        //   placeholder="blur"
        //   blurDataURL="/images/bluredImage.jpg"
      />
    </>
  );
}
