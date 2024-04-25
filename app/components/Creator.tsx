import Image from "next/image";
import DockAI from "@/public/images/png/Dock AI.png";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text="hover" />

      <h2 className=" text-black mt-4 text-sm font-bold">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2>
      <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        Watch me hover
      </p>
    </div>
  );
}

export default function Creator() {
  return (
    <div
      className="m-auto px-4 py-20 lg:py-28 max-w-5xl flex max-lg:flex-col
      max-lg:items-center max-lg:gap-16"
    >
      <div className="max-w-xl flex-1 space-y-2">
        <p className="font-extrabold uppercase text-text_primary">
          CRÉÉ DE A À Z PAR...
        </p>
        <h2
          className="scroll-m-20 font-semibold tracking-tight transition-colors
          first:mt-0 text-5xl"
        >
          Mouhamed E.M.H.
        </h2>
        <div className="">
          <p>
            Créateur de contenu, formateur et développeur. En 2023, j'ai créé
            plus de 6 applications et 3 formations best-seller en France.
          </p>
          <div className="mt-8">
            <h3>Pourquoi avoir fait ce projet ?</h3>
            <p className="mt-5">
              J'ai créé de nombreuses applications en 2023 et je vais en faire
              encore plus en 2024.
            </p>
            <p className="mt-5">
              Pour ces raisons, j'ai besoin d'une base solide pour mes projets.
              J'ai donc créé cette template pour moi.
            </p>
            <p className="mt-5">
              J'ai décidé de la commercialiser pour plusieurs raisons :
            </p>
            <ul className="mt-5">
              <li className="mb-4">Car on me le demande souvent</li>
              <li className="mb-4">
                Car je veux créer une communauté de makers francophones
              </li>
              <li className="mb-4">
                Car je veux aider les gens à créer des applications de qualité
              </li>
              <li className="mb-4">
                Car je vois trop de projets qui n'aboutissent pas
              </li>
              <li className="">
                Car je veux offrir une alternative originale aux projets déjà
                existants
              </li>
            </ul>
            <p className="mt-5">
              Je suis impatient de voir ce que tu vas créer avec
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <EvervaultCard />
      </div>
    </div>
  );
}

{
  /**
<div className="relative transform-gpu overflow-hidden after:absolute after:inset-0 after:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))] group size-fit rounded-2xl border border-white/10 bg-white/5 p-2 pb-4">
          <div className="relative">
            <Image
              src={DockAI}
              alt="une image"
              className="absolute inset-0 size-64 scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0"
            />
            <div className="mt-4 px-2">
              <div className="font-medium text-white">Mouhamed Hanne</div>
              <div className="text-white/75">Creator - Developer</div>
            </div>
          </div>
        </div>
 */
}
