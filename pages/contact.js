import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Reciprocal Ltd. - Contact</title>
        <meta name="theme-color" content="green" />
      </Head>
      <div className="bg-white checker-grid grid gradient-anim z-0">
        <Header black />
        <div className="pt-16 p-4 bg-black text-white flex flex-col space-y-4 font-sans w-full max-w-screen-sm min-h-screen z-10">
          <h2 className="pt-6 steps text-2xl">About Reciprocal</h2>
          <p>
            Reciprocal Technologies Ltd. was a privately-owned legal corporation
            based in the province of British Columbia, Canada from 2022-2023. It went defunct in 2023.
          </p>
          <h2 className="steps pt-6 text-2xl">Working with Reciprocal</h2>
          <p>
            Inquiries about Reciprocal and its work may be submitted to <a href="mailto:matilde@park.net">Matilde Park</a>.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}
