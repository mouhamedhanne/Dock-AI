import Image from "next/image";
import DockAI from "@/public/images/png/Dock AI.png";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { SmilePlus } from "lucide-react";

export function EvervaultCardDemo() {
  return (
    <div
      className="border border-black/[0.2] flex 
      flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3  text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3  text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-black" />

      <EvervaultCard text="hover" />

      <h2 className=" text-black mt-4 text-lg font-extrabold">
        Mouhamed El Malick Hanne
      </h2>
      <div className="flex">
        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
          React/NextJS developer
        </p>
        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
          Open source contributor
        </p>
      </div>
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
            <h3 className="font-bold">Pourquoi avoir fait ce projet ?</h3>
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
              <div className="ml-2 mb-4 flex items-center space-x-2">
                <SmilePlus size="20" className="text-text_primary" />
                <li>Car on me le demande souvent</li>
              </div>
              <div className="ml-2 mb-4 flex items-center space-x-2">
                <SmilePlus size="20" className="text-text_primary" />
                <li>Car je veux créer une communauté de makers francophones</li>
              </div>
              <div className="ml-2 mb-4 flex items-center space-x-2">
                <SmilePlus size="20" className="text-text_primary" />
                <li>
                  Car je veux aider les gens à créer des applications de qualité
                </li>
              </div>
              <div className="ml-2 mb-4 flex items-center space-x-2">
                <SmilePlus size="20" className="text-text_primary" />
                <li>Car je vois trop de projets qui n'aboutissent pas</li>
              </div>
              <div className="ml-2 flex items-start space-x-2">
                <SmilePlus size="20" className="text-text_primary" />
                <li>
                  Car je veux offrir une alternative originale aux projets déjà
                  existants
                </li>
              </div>
            </ul>
            <div className="flex items-start">
              <p className="mt-5">
                Je suis impatient savoir ce que tu vas decouvrir avec
              </p>
              <Image src={DockAI} alt="Dock AI" width={50} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-end hidden lg:block">
        <EvervaultCardDemo />
      </div>
    </div>
  );
}
