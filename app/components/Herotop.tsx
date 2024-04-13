import { SearchHero } from "@/components/Search";

export default function Herotop() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-[1200px] mx-auto">
        <div className=" text-center">
          <div className="max-w-5xl mx-auto">
            <h1
              className="font-outfit font-bold text-5xl md:text-6xl text-zinc-800 
              dark:text-zinc-100 tracking-[-.008em] mb-4"
            >
              SaaS landing page examples
            </h1>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg max-sm:px-4">
              Discover the best 790 landing page examples created by top-class
              SaaS companies and get ideas and inspiration for your next design
              project
            </p>
          </div>
        </div>
        <SearchHero />
      </div>
    </div>
  );
}
