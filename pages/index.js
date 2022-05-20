import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container h-screen bg-black text-white">
      <Head>
        <title>Reciprocal Ltd.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p className="text-center text-4xl">
        Reciprocal Ltd. is an interactive design and development studio.
      </p>

      <Footer />
    </div>
  );
}
