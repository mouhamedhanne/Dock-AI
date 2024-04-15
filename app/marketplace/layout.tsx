import Link from "next/link";

export default function Layout({ children }: any) {
  return (
    <div>
      <div className="flex space-x-4">
        <div>
          <Link href="/vedette">En Vedette</Link>
        </div>
        <div>
          <Link href="marketplace/popular">Populaire</Link>
        </div>
        <div>
          <Link href="/">New</Link>
        </div>
      </div>
      {children}
    </div>
  );
}

//{ children: React.ReactNode }
