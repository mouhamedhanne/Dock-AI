import Link from "next/link";
import Header from "@/app/components/Header";
import Herotop from "@/app/components/Herotop";

export default function Layout({ children }: any) {
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
      {children}
    </div>
  );
}
