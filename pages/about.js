import Footer from "@components/Footer";
import Head from "next/head";
import Header from "@components/Header";
import Marquee from "react-fast-marquee";

const skill = [
  "Urbit applications",
  "front-end development",
  "video game development",
  "music and soundtrack production",
  "art collage",
  "Tezos",
  "APL",
  "J",
  "K",
  "Chialisp",
  "Postscript",
  "security consulting and research",
  "weird machines",
  "creepypasta",
  "p2p and blockchain systems",
  "wolves",
  "software archeology",
  "Doom modding",
  "esoteric programming languages",
  "machine learning",
];

export default function About() {
  const direction = (i) => (i % 2 ? "" : "-");
  return (
    <>
      <Head>
        <title>Reciprocal Ltd. - About</title>
        <link
          rel="icon"
          href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.20..19.52.50-B137D4AA-DA9E-4B07-98CE-C001C576C7CA_1_201_a.jpeg"
        />
      </Head>
      <div className="pt-16 p-4 bg-black text-white">
        <Header />
        <p>Staff</p>
        <Marquee gradient={false} speed={250} pauseOnHover>
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
        <p className="pt-16">Ask us about...</p>
      </div>
      <div
        className="flex flex-wrap min-h-screen justify-between items-center"
        style={{ backgroundColor: "magenta" }}
      >
        {skill
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map((e) => e.value)
          .map((e, i) => (
            <p
              className="basis-1/4 text-2xl p-4 border-b border-transparent hover:border-black cursor-help"
              id="entry"
              style={{ transform: `rotate(${direction(i)}${i + 1 / 5}deg)` }}
            >
              {e}
            </p>
          ))}
      </div>
      <Footer />
    </>
  );
}
