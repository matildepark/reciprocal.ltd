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
        <p className="pt-16">Ask us about...</p>
      </div>
      <div
        style={{
          background:
            "repeating-conic-gradient(magenta 0% 25%, black 0% 50%) 50% / 50px 50px",
        }}
      >
        <div
          className="flex flex-wrap min-h-screen mx-auto justify-between items-center rotate-3 mt-24"
          style={{ backgroundColor: "magenta", maxWidth: "90vw" }}
        >
          {skill
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map((e) => e.value)
            .map((e, i) => (
              <p
                className="basis-1/4 text-2xl text-center p-4 border-b border-transparent hover:border-black cursor-help"
                id="entry"
                style={{ transform: `rotate(${direction(i)}${i + 1 / 5}deg)` }}
              >
                {e}
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
