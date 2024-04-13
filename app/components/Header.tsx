import Link from "next/link";
import Logo from "@/components/Logo";
import { SearchHeader } from "@/components/Search";

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
    <header className="px-10 flex justify-between items-center">
      <nav>
        <ul className="text-sm font-semibold flex space-x-4">
          {MENU_ITEMS.map((item) => (
            <li>
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Logo width={100} className="" />
      <div className="flex items-center space-x-4">
        <div className="">
          <SearchHeader />
        </div>
        <div className="space-x-3">
          <button className="font-bold">Log In</button>
          <button
            className="text-sm text-white font-semibold bg-custom-black px-6 py-4 
          rounded-full shadow-lg"
          >
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}

{
  /**
 <button
            className="inline-flex items-center whitespace-nowrap transition-colors 
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
          disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent 
          hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start 
          rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground 
          shadow-none sm:pr-12 md:w-40 lg:w-64"
          >
            <span>Search documentation...</span>
          </button>
 */
}
