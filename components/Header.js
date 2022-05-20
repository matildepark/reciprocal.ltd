import Link from "next/link";

export default function Header({ ...props }) {
  return (
    <Link href="/">
      <p
        {...props}
        className="text-3xl mix-blend-difference fixed top-4 left-4 cursor-pointer hover:text-red-600"
      >
        ←
      </p>
    </Link>
  );
}
