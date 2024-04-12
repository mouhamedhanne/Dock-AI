import Link from "next/link";
import Logo from "@/components/Logo";

const MENU_ITEMS = [
  "Find designer",
  "Designer search",
  "Inspiration",
  "Courses",
  "Jobs",
  "Go Pro",
];

export default function Header() {
  return (
    <nav className="px-10 flex justify-between items-center">
      <ul className="text-sm font-semibold flex space-x-4">
        {MENU_ITEMS.map((item) => (
          <li>
            <Link href="/">{item}</Link>
          </li>
        ))}
      </ul>
      <Logo width={100} className="" />
      <div className="space-x-3">
        <button>Log In</button>
        <button
          className="text-sm text-white font-semibold bg-custom-black px-6 py-4 
          rounded-full shadow-lg"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
}
