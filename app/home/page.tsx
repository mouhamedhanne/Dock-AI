import Header from "@/app/components/Header";
import Herotop from "@/app/components/Herotop";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Header />
      <div className="px-6 ">
        <Herotop />
      </div>
      <div className="flex space-x-4 px-6">
        <div>
          <Link href="home/vedette">En Vedette</Link>
        </div>
        <div>
          <Link href="home/popular">Populaire</Link>
        </div>
        <div>
          <Link href="/">New</Link>
        </div>
      </div>
    </div>
  );
}
