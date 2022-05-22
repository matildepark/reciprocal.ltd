import Link from "next/link";

export default function Footer({ black, ...props }) {
  return (
    <footer
      {...props}
      className={
        "fixed bottom-0 left-0 flex items-center " +
        (black ? "bg-black" : "mix-blend-difference")
      }
    >
      <img
        className="w-48 pr-8 invert"
        src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2022.5.20..16.59.22-reciprocal tweak - simone.png"
      />
      <Link href="/about" passHref>
        <a className="text-2xl text-white pr-8 hover:text-magenta">/about</a>
      </Link>
      {/* <p className="text-2xl text-white">PORTFOLIO</p> */}
    </footer>
  );
}
