import Header from "@/app/components/Header";
import Herotop from "@/app/components/Herotop";
import Tabs from "@/components/Tabs";
import Booking from "@/app/components/Booking";
import FAQ from "@/app/components/FAQ";
import Creator from "@/app/components/Creator";
import Footer from "@/app/components/Footer";
import { supabase } from "@/lib/supabase/server";

const gestSignets = async () => {
  const { data } = await supabase.from("signet").select();
  return data;
};

export default async function Home() {
  const signets = await gestSignets();
  console.log(signets);

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
        <Creator />
        <Footer />
      </div>
    </main>
  );
}
