import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Reciprocal Ltd. - Contact</title>
        <meta name="theme-color" content="yellow" />
      </Head>
      <div className="bg-white grid gradient-anim z-0">
        <Header black />
        <div className="pt-16 p-4 bg-black text-white flex flex-col space-y-4 font-sans w-full max-w-screen-sm min-h-screen z-10">
          <h2 className="pt-6 steps text-2xl">About Reciprocal</h2>
          <p>
            Reciprocal Technologies Ltd. is a privately-owned legal corporation
            based in the province of British Columbia, Canada.
          </p>
          <h2 className="steps pt-6 text-2xl">Working with Reciprocal</h2>
          <p>
            Reciprocal Ltd. is available on a limited basis for external
            contracts and partners. Prospective clients (and all other
            inquiries) may be submitted to{" "}
            <a
              className="border-b hover:text-magenta"
              href="mailto:mp@reciprocal.ltd"
            >
              Matilde Park
            </a>
            .
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}
