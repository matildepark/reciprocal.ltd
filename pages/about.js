import Footer from "@components/Footer";
import Head from "next/head";
import Header from "@components/Header";
import Marquee from "react-fast-marquee";
import { Rnd } from "react-rnd";
import React, { useState, useEffect } from "react";
import skill from "content/skill";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function About() {
  const direction = (i) => (i % 2 ? "" : "-");
  const [displayed, setDisplayed] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(
    () =>
      setSkills(
        skill
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map((e) => e.value)
      ),
    [skill]
  );

  return (
    <>
      <Head>
        <title>Reciprocal Ltd. - About</title>
        <meta name="theme-color" content="magenta" />
      </Head>
      <div className="pt-16 p-4 bg-black text-white">
        <Header />
        <div className="py-2 pb-16 md:py-32 max-w-screen-md mx-auto">
          <h2 className="font-sans text-center text-3xl pb-16">
            Reciprocal Ltd. is an interactive design and development studio.
          </h2>
          <p className="py-4">
            We provide full development service (product management and
            specification, development, design and deployment) for web and
            esoteric applications; graphic and product design, music and sound
            design, as well as serve as a consultancy for cybersecurity.
          </p>
          <p>
            Our internal projects are geared toward formal experiments in
            digital art, interactive media, cryptographic technologies, and
            video games.
          </p>
        </div>
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
              background: "#004d9c",
              border: "4px solid #004d9c",
              boxShadow: "2px 2px 0px 0px #000000",
              maxWidth: "300px",
            }}
            className="text-white font-topaz antialiased overflow-y-auto overflow-x-hidden no-scrollbar"
            key={e.name}
            default={{
              width: 350,
              height: "fit-content",
              x: (i + 1) * 100,
              y: (i + 1) * 100,
            }}
          >
            <div
              className="w-full bg-white px-1 flex justify-between sticky top-0 z-10"
              style={{ color: "#004d9c" }}
            >
              {e.name}
              <span
                className="cursor-pointer"
                onClick={() =>
                  setDisplayed(displayed.filter((prompt) => prompt !== e))
                }
              >
                x
              </span>
            </div>
            <ReactMarkdown
              className="markdown"
              children={e.content}
              linkTarget="_blank"
              rehypePlugins={[rehypeRaw]}
            ></ReactMarkdown>
          </Rnd>
        ))}
        <div
          className="flex flex-wrap min-h-screen mx-auto justify-between items-center rotate-1 md:rotate-3 mt-24 bg-white shadow-2xl shadow-black"
          style={{ maxWidth: "90vw" }}
        >
          <div className="shrink-0 w-full flex items-center justify-center">
            <img
              className="w-48 basis-1/4 grow-0"
              src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.20..16.59.22-reciprocal tweak - simone.png"
            />
          </div>
          {skills.map((e, i) => (
            <p
              className="basis-1/4 text-2xl text-center p-4 border-b-4 border-double border-transparent hover:border-black cursor-pointer"
              id="entry"
              key={e.name}
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
