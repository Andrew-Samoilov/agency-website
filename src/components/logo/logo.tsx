import Link from "next/link"

export default function Logo() {
  return (
    <Link
      href={'/'}
      className="leading-3 text-main-sky">
        <div className="text-md">Tech Vibe</div>
        <div className="font-bold text-lg">Agency</div>
    </Link>
  );
}
