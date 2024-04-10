import Link from "next/link";

//  "Quickly find your next designer",
//"Post a job"
// "The 1# job board for design talent",

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
    <nav>
      <ul>
        {MENU_ITEMS.map((item) => (
          <li>
            <Link href="/">{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
