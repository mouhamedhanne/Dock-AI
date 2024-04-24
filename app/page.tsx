import Header from "@/app/components/Header";
import Herotop from "@/app/components/Herotop";
import Tabs from "@/components/Tabs";
import Booking from "@/app/components/Booking";
import FAQ from "@/app/components/FAQ";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <div className="px-6 ">
        <Herotop />
      </div>
      <div className="mt-10">
        <Tabs />
      </div>
      <div>
        <Booking />
        <FAQ />
      </div>
    </main>
  );
}
