import Header from "@/app/components/Header";
import Herotop from "@/app/components/Herotop";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="px-6 ">
        <Herotop />
      </div>
      <div className="mt-10">
        <Tabs />
      </div>
    </main>
  );
}
