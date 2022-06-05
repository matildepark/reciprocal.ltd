import Link from "next/link";

export default function Header({ black, ...props }) {
  return (
    <Link href="/">
      <p
        {...props}
        className={
          "text-4xl z-20 font-sans mix-blend-difference fixed top-4 left-4 cursor-pointer hover:text-magenta " +
          (black ? "text-white" : "")
        }
      >
        ←
      </p>
    </Link>
  );
}
