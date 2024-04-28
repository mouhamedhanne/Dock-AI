"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { SearchHeader } from "@/components/Search";
import { Menu, X, Moon, SunMoon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth/actions";

const MENU_ITEMS = [
  "Categories AI",
  "Offres",
  "Soumettre une AI",
  "Nous soutenir",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  return (
    <header className="">
      <div className="px-10 flex justify-between items-center">
        <nav className="hidden md:block">
          <div className="flex items-center space-x-5">
            <ul className="text-sm font-semibold flex space-x-4">
              {MENU_ITEMS.map((item) => (
                <li>
                  <Link href="/" className="hover:text-text_primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <button onClick={() => setLightMode(!lightMode)}>
              {!lightMode ? <Moon /> : <SunMoon />}
            </button>
          </div>
        </nav>
        <Logo width={100} className="" />

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <SearchHeader />
          </div>
          <div className="space-x-3 hidden md:block">
            <form>
              <Button formAction={signOut}>Deconnexion</Button>
            </form>
          </div>
          <button
            className="block md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {!menuOpen ? <Menu size="24" className="h-6 " /> : <X size="24" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className="md:hidden py-4 px-8 absolute z-20 w-full bg-[#0D1117]
          text-white"
        >
          <div className="flex justify-between items-start">
            <nav>
              <ul className="text-sm font-semibold space-y-4">
                {MENU_ITEMS.map((item) => (
                  <li>
                    <Link href="/" className="hover:text-text_primary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button onClick={() => setLightMode(!lightMode)}>
              {!lightMode ? (
                <Moon />
              ) : (
                <SunMoon className="hover:animate-spin" />
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

{
  /**
 <button className="font-bold">Log In</button>
            <button
              className="text-sm text-white font-semibold bg-custom-black px-6 py-4 
          rounded-full shadow-lg"
            >
              Sign up
            </button>
 */
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
