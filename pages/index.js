import Head from "next/head";
import Footer from "@components/Footer";
import { useRef, useEffect } from "react";
import Parallax from "parallax-js";

export default function Home() {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {});

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  return (
    <>
      <Head>
        <title>Reciprocal Ltd.</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@reciprocal-ltd" />
        <meta name="twitter:title" content="Reciprocal Ltd." />
        <meta
          name="twitter:description"
          content="Reciprocal is an interactive design and development studio."
        />
        <meta
          name="description"
          content="Reciprocal is an interactive design and development studio based out of Vancouver, Canada. We create interactive media, video games, and provide full development service and management to external clients."
        />
        <meta
          name="twitter:image"
          content="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.23..13.45.18-twit-card.png"
        />
      </Head>
      <div className="container h-screen bg-black text-white overflow-hidden">
        <div
          className="z-0 absolute top-0 left-0 overflow-hidden"
          ref={sceneEl}
        >
          <img
            className="absolute top-0 left-0 object-cover"
            data-depth="0.01"
            style={{
              height: "100vh",
              width: "150vw",
            }}
            src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.21..22.28.25-reciprocal0-dither.png"
          />
          <img
            className="absolute top-0 left-0 object-cover"
            data-depth="0.02"
            style={{
              height: "100vh",
              width: "150vw",
            }}
            src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.21..22.28.25-reciprocal1-dither.png"
          />
          <img
            className="absolute top-0 left-0 object-cover"
            data-depth="0.25"
            style={{
              height: "100vh",
              width: "150vw",
            }}
            src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.21..22.28.25-reciprocal2-weboptimized.png"
          />
        </div>
        <Head>
          <title>Reciprocal Ltd.</title>
          <link
            rel="icon"
            href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.09..23.54.59-2022.7.27..21.24.32-icon.jpeg"
          />
          <meta name="theme-color" content="#da2f20" />
        </Head>
        <img
          className="flex items-center z-10 md:hidden px-12 mix-blend-multiply object-contain"
          src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.09..23.54.59-2022.7.27..21.24.32-icon.jpeg"
        />
        <p className="text-8xl mt-8 md:hidden z-10 text-black font-sans">ꜜ</p>
        <div className="inplace text-center flex fixed">
          <img
            className="w-24 mix-blend-darken hidden md:flex"
            src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.09..23.54.59-2022.7.27..21.24.32-icon.jpeg"
          />
          <span className="text-center pl-4 hidden md:flex items-center text-4xl z-10 bg-black">
            is an
          </span>
          <span className="text-center pl-4 hidden md:flex items-center text-4xl z-10 bg-black">
            interactive design
          </span>
          <span className="text-center pl-4 hidden md:flex items-center text-4xl z-10 bg-black">
            and development
          </span>
          <span className="text-center pl-4 hidden md:flex items-center text-4xl z-10 bg-black">
            studio.
          </span>
        </div>

        <Footer black />
      </div>
    </>
  );
}
