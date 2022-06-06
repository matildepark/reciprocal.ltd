import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useRef, useEffect } from "react";
import Parallax from "parallax-js";
import Marquee from "react-fast-marquee";

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Reciprocal Ltd. - Portfolio</title>
        <meta name="theme-color" content="black" />
      </Head>
      <div className="bg-white text-black overflow-hidden">
        <Header black />
        <div className="overflow-hidden checkerboard grid">
          <div
            className="rotate-12 overflow-hidden"
            style={{ width: "calc(100vw + 200px)" }}
          >
            <Marquee
              gradient={false}
              speed={100}
              className="invisible md:visible z-0"
            >
              <img
                style={{ maxHeight: "100vh" }}
                className="pr-4"
                src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.05..05.05.10-collage1.jpg"
              />
              <img
                style={{ maxHeight: "100vh" }}
                className="pr-4"
                src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.05..05.05.10-collage1.jpg"
              />
              <img
                style={{ maxHeight: "100vh" }}
                className="pr-4"
                src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.05..05.05.10-collage1.jpg"
              />
            </Marquee>
          </div>
        </div>
        <div className="fixed -top-4 -right-2 text-8xl steps portfolio">
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
        </div>
        <div className="w-full max-w-screen-sm h-screen absolute pt-16 bg-black mx-auto top-0 overflow-y-auto">
          <div className="text-white p-6 font-sans list-none flex flex-col space-y-8 pb-16">
            <h2 className="steps text-2xl">Current work</h2>
            <a target="_blank" href="https://banyan.computer">
              <li className="block bg-white text-black p-2 rounded-lg border-4 border-double border-black hover:bg-magenta cursor-pointer">
                <p className="font-semibold">Banyan Storage Inc.</p>
                <p>
                  Consultancy on front-end management, specification, hiring
                  process; graphic design and brand.
                </p>
              </li>
            </a>

            <li className="block bg-white text-black p-2 rounded-lg border-4 border-double border-black hover:bg-magenta">
              <a
                className="font-semibold"
                target="_blank"
                href="https://interchain.io"
              >
                Interchain Foundation
              </a>
              <p>
                Working alongside{" "}
                <a
                  className="border-b"
                  target="_blank"
                  href="https://otherinter.net"
                >
                  Other Internet
                </a>{" "}
                and{" "}
                <a
                  className="border-b"
                  target="_blank"
                  href="https://www.toluwalashe.com/"
                >
                  Zahir Ramos
                </a>{" "}
                for product and UI discovery, renovation and architecture for an
                incoming governance application. Stakeholders include{" "}
                <a
                  className="border-b"
                  target="_blank"
                  href="https://hypha.coop/"
                >
                  Hypha Co-operative
                </a>{" "}
                and the{" "}
                <a
                  className="border-b"
                  target="_blank"
                  href="https://www.cosmosbuilders.org/"
                >
                  Cosmos Builders Foundation
                </a>
                .
              </p>
            </li>
            <a target="_blank" href="https://urbit.org">
              <li className="block bg-white text-black p-2 rounded-lg border-4 border-double border-black hover:bg-magenta cursor-pointer">
                <p className="font-semibold">Urbit Foundation</p>
                <p>
                  Stewarding developer outreach products (clearnet, ecosystem,
                  network utilities, developer experience), mentoring incoming
                  developers.
                </p>
              </li>
            </a>

            <p>
              As Reciprocal Ltd. was recently founded, all preceding work is
              sourced from our individual portfolios.
            </p>
            <h2 className="steps text-2xl">Software development</h2>
            <div className="flex flex-wrap portfolio">
              <a target="_blank" href="/portfolio/landscape">
                <img
                  className="w-24 h-24 rounded-xl object-cover"
                  src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.05..15.57.56-original_5ef5d6892515506a74e95258f3168f2a.png"
                />
              </a>
            </div>
            <h2 className="steps text-2xl">Graphic design</h2>
            <p className="font-semibold">Album covers</p>
            <div className="flex flex-wrap portfolio">
              <a
                target="_blank"
                href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.05..21.52.26-fortress.png"
              >
                <img
                  className="w-24 h-24 rounded-xl object-cover"
                  src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.05..21.52.26-fortress.png"
                />
              </a>
              <a
                target="_blank"
                href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.05..21.52.26-gaming.png"
              >
                <img
                  className="w-24 h-24 rounded-xl object-cover"
                  src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.05..21.52.26-gaming.png"
                />
              </a>
              <a
                target="_blank"
                href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.05..21.52.26-shitpost.png"
              >
                <img
                  className="w-24 h-24 rounded-xl object-cover"
                  src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.05..21.52.26-shitpost.png"
                />
              </a>
              <a
                target="_blank"
                href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.06..00.05.30-diameter2.png"
              >
                <img
                  className="w-24 h-24 rounded-xl object-cover"
                  src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.06..00.05.30-diameter2.png"
                />
              </a>
              <a
                target="_blank"
                href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.06..00.05.30-posiwid.png"
              >
                <img
                  className="w-24 h-24 rounded-xl object-cover"
                  src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.6.06..00.05.30-posiwid.png"
                />
              </a>
            </div>
            <h2 className="steps text-2xl">
              Interactive media and video games
            </h2>
            <div className="flex flex-wrap portfolio">
              <a
                target="_blank"
                href="http://aetherinteractive.itch.io/localhost"
              >
                <img
                  className="w-24 h-24 rounded-xl"
                  src="https://aether.in.net/img/local-itch.jpg"
                />
              </a>
              <a
                target="_blank"
                href="http://aetherinteractive.itch.io/subserial-network"
              >
                <img
                  className="w-24 h-24 rounded-xl"
                  src="https://aether.in.net/img/subserial.jpg"
                />
              </a>
            </div>
            <h2 className="steps text-2xl">Cybersecurity work</h2>
            <h2 className="steps text-2xl">Art installations</h2>
            <h2 className="steps text-2xl">Desktop publishing</h2>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
