import Head from "next/head";
import Header from "@components/Header";
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
    <div className="container h-screen bg-black text-white overflow-hidden">
      <div className="z-0 absolute top-0 left-0 overflow-hidden" ref={sceneEl}>
        <img
          className="absolute top-0 left-0 object-cover"
          data-depth="0.05"
          style={{
            height: "100vh",
            width: "150vw",
          }}
          src="https://rift.reciprocal.ltd/reciprocal.ltd/2022.7.27..21.27.34-reciprocal0-dither.png"
        />
        <img
          className="absolute top-0 left-0 object-cover"
          data-depth="0.1"
          style={{
            height: "100vh",
            width: "150vw",
          }}
          src="https://rift.reciprocal.ltd/reciprocal.ltd/2022.7.27..21.27.40-reciprocal1-dither.png"
        />
        <img
          className="absolute top-0 left-0 object-cover"
          data-depth="0.15"
          style={{
            height: "100vh",
            width: "150vw",
          }}
          src="https://nyc3.digitaloceanspaces.com/reciprocal-rift/reciprocal.ltd/2022.7.27..21.27.52-reciprocal2-weboptimized.png"
        />
      </div>
      <Head>
        <title>Reciprocal Ltd.</title>
        <link
          rel="icon"
          href="https://rift.reciprocal.ltd/reciprocal.ltd/2022.7.27..21.24.32-icon.jpeg"
        />
        <meta name="theme-color" content="#da2f20" />
      </Head>
      <img
        className="flex items-center z-10 md:hidden px-12 mix-blend-multiply object-contain"
        src="https://rift.reciprocal.ltd/reciprocal.ltd/2022.7.27..21.24.32-icon.jpeg"
      />
      <p className="text-8xl mt-8 md:hidden z-10 text-black font-sans">ꜜ</p>
      <div className="inplace text-center flex fixed">
        <img
          className="w-24 mix-blend-darken hidden md:flex"
          src="https://rift.reciprocal.ltd/reciprocal.ltd/2022.7.27..21.24.32-icon.jpeg"
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
  );
}
