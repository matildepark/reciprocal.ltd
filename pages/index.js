import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container h-screen bg-black text-white">
      <Head>
        <title>Reciprocal Ltd.</title>
        <link
          rel="icon"
          href="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.20..19.52.50-B137D4AA-DA9E-4B07-98CE-C001C576C7CA_1_201_a.jpeg"
        />
      </Head>

      <p className="text-center text-4xl">
        Reciprocal Ltd. is an interactive design and development studio.
      </p>

      <Footer />
    </div>
  );
}
