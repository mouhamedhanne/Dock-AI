import Link from "next/link";
import Header from "@/app/components/Header";
import Herotop from "@/app/components/Herotop";

export default function Layout({ children }: any) {
  return (
    <div>
      <Header />

      {children}
    </div>
  );
}
