import Footer from "@components/Footer";
import Header from "@components/Header";
import Marquee from "react-fast-marquee";

const skill = [
  "Urbit applications",
  "front-end development",
  "video game development",
  "music and soundtrack production",
  "art collage",
  "Tezos",
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
];

export default function About() {
  const direction = (i) => (i % 2 ? "" : "-");
  return (
    <>
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
            href="https://timeflayer.com"
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
        className="flex flex-wrap h-screen justify-between items-center"
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
