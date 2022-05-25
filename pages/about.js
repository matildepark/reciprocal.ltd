import Footer from "@components/Footer";
import Head from "next/head";
import Header from "@components/Header";
import Marquee from "react-fast-marquee";
import { Rnd } from "react-rnd";
import { useState } from "react";

const skill = [
  { name: "Urbit applications", content: "" },
  { name: "front-end development", content: "" },
  { name: "video game development", content: "" },
  { name: "music and soundtrack production", content: "" },
  { name: "art collage", content: "" },
  { name: "Tezos", content: "" },
  { name: "APL", content: "" },
  { name: "J", content: "" },
  { name: "K", content: "" },
  { name: "Chialisp", content: "" },
  { name: "Postscript", content: "" },
  { name: "security consulting and research", content: "" },
  { name: "weird machines", content: "" },
  { name: "creepypasta", content: "" },
  { name: "p2p and blockchain systems", content: "" },
  { name: "wolves", content: "" },
  { name: "software archeology", content: "" },
  { name: "Doom modding", content: "" },
  { name: "esoteric programming languages", content: "" },
  { name: "machine learning", content: "" },
];

export default function About() {
  const direction = (i) => (i % 2 ? "" : "-");
  const [displayed, setDisplayed] = useState([]);
  return (
    <>
      <Head>
        <title>Reciprocal Ltd. - About</title>
      </Head>
      <div className="pt-16 p-4 bg-black text-white">
        <Header />
        <p className="flex flex-col md:flex-row justify-between">
          <span>Staff</span>
          <span className="uppercase text-xs">
            Do we not, after all, deeply regret our individuation?
          </span>
        </p>
        <Marquee
          gradient={false}
          speed={250}
          pauseOnHover
          style={{ overflow: "hidden" }}
        >
          <a
            className="text-4xl px-64 hover:underline cursor-pointer"
            href="https://matildepark.ca"
            target="_blank"
          >
            <span>MATILDE PARK</span>
          </a>
          <a
            className="text-4xl px-64 hover:underline cursor-pointer"
            href="https://civ.rip"
            target="_blank"
          >
            <span>PHOEBE JENKINS</span>
          </a>
          <a
            className="text-4xl px-64 hover:underline cursor-pointer"
            href="http://tilde.town/~brainfunnel/"
            target="_blank"
          >
            <span>SIMONE IVANISH</span>
          </a>
        </Marquee>
      </div>
      <div className="pt-16 p-4 bg-black text-white">
        <p className="flex flex-col md:flex-row justify-between">
          <span>Advisory Board</span>
          <span className="uppercase text-xs">
            Though I walk through the valley of the shadow of death...
          </span>
        </p>
        <Marquee
          gradient={false}
          speed={100}
          pauseOnHover
          style={{ overflow: "hidden" }}
        >
          <a
            className="text-4xl px-64 hover:underline cursor-pointer"
            href="https://rhea.art"
            target="_blank"
          >
            <span>RHEA MYERS</span>
          </a>
          <a
            className="text-4xl px-64 hover:underline cursor-pointer"
            href="https://tobyshorin.com"
            target="_blank"
          >
            <span>TOBY SHORIN</span>
          </a>
        </Marquee>
      </div>
      <div id="checkerboard">
        {displayed.map((e, i) => (
          <Rnd
            style={{
              zIndex: i + 2,
              background: "blue",
              border: "3px solid orange",
            }}
            className="text-white"
            key={`rnd-${i}`}
            default={{
              width: 200,
              height: 200,
              x: (i + 1) * 100,
              y: (i + 1) * 100,
            }}
          >
            {e.content}
          </Rnd>
        ))}
        <div
          className="flex flex-wrap min-h-screen mx-auto justify-between items-center rotate-3 mt-24 bg-white shadow-2xl shadow-black"
          style={{ maxWidth: "90vw" }}
        >
          <div className="shrink-0 w-full flex items-center justify-center">
            <img
              className="w-48 basis-1/4 grow-0"
              src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.20..16.59.22-reciprocal tweak - simone.png"
            />
          </div>
          {skill
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map((e) => e.value)
            .map((e, i) => (
              <p
                className="basis-1/4 text-2xl text-center p-4 border-b border-transparent hover:border-black cursor-help"
                id="entry"
                onClick={() => setDisplayed([...displayed, e])}
                style={{ transform: `rotate(${direction(i)}${i + 1 / 5}deg)` }}
              >
                {e.name}
              </p>
            ))}
        </div>
      </div>
      <div className="py-32 text-6xl text-center">
        <a className="inline-block spin" href="mailto:mp@reciprocal.ltd">
          ✉️
        </a>
      </div>
      <Footer />
    </>
  );
}
