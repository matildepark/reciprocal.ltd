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
    <div className="container h-screen bg-black text-white">
      <div className="z-0 absolute top-0 left-0" ref={sceneEl}>
        <img
          className="absolute top-0 left-0 object-cover"
          data-depth="0.05"
          style={{
            height: "100vh",
            width: "150vw",
          }}
          src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.21..22.28.25-reciprocal0-dither.png"
        />
        <img
          className="absolute top-0 left-0 object-cover"
          data-depth="0.1"
          style={{
            height: "100vh",
            width: "150vw",
          }}
          src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.21..22.28.25-reciprocal1-dither.png"
        />
        <img
          className="absolute top-0 left-0 object-cover"
          data-depth="0.15"
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
          href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.20..19.52.50-B137D4AA-DA9E-4B07-98CE-C001C576C7CA_1_201_a.jpeg"
        />
      </Head>

      <h2 className="text-center hidden md:flex items-center text-4xl z-10 bg-black pr-2 fixed">
        <img
          className="w-24 pr-4"
          src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.20..19.52.50-B137D4AA-DA9E-4B07-98CE-C001C576C7CA_1_201_a.jpeg"
        />{" "}
        is an interactive design and development studio.
      </h2>

      <Footer black />
    </div>
  );
}
