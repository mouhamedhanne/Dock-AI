export default function page() {
  return (
    <div>
      <div
        className="max-w-5xl m-auto px-4 py-6 lg:py-28 flex flex-col
      items-center justify-center gap-4"
      >
        <div className="flex w-full flex-col items-center gap-3 lg:gap-4 xl:gap-6">
          <h2
            className="scroll-m-20 text-4xl font-extrabold tracking-tight
          lg:text-5xl"
          >
            Quel changement après Dock AI ?
          </h2>
          <p className="text-lg font font-semibold">
            Arrêtez de rechercher des IA partout !
          </p>
          <div className="flex items-start gap-4 max-lg:flex-col">
            <div
              className="flex-1 rounded bg-red-500/30 p-4 shadow-lg
            lg:rounded-lg lg:p-8"
            >
              <h3
                className="scroll-m-20 text-xl font-semibold tracking-tight
                text-red-500"
              >
                😞 Rechercher des IA sans utiliser DockAI
              </h3>
              <ul
                className="ml-4 mt-4 flex list-disc flex-col gap-2 text-lg 
                 text-foreground/80"
              >
                <li>
                  Naviguer entre de multiples sites web et moteurs de recherche
                </li>
                <li>
                  Risque de manquer des outils pertinents éparpillés sur le web
                </li>
                <li>
                  Difficulté à rester à jour sur les dernières avancées en IA
                </li>
                <li>
                  Avoir une vision éparses et peu claire de l'offre globale en
                  IA
                </li>
              </ul>
            </div>
            <div
              className="flex-1 rounded bg-green-500/30 p-4 shadow-lg
            lg:rounded-lg lg:p-8"
            >
              <h3
                className="scroll-m-20 text-xl font-semibold tracking-tight
                text-green-500"
              >
                😎 Et avec DockAI
              </h3>
              <ul
                className="ml-4 mt-4 flex list-disc flex-col gap-2 text-lg 
                 text-foreground/80"
              >
                <li>
                  Accès centralisé à un vaste catalogue d'outils IA triés sur le
                  volet
                </li>
                <li>
                  Une veille technologique intégrée sur les dernières tendances
                  IA
                </li>
                <li>
                  La garantie de bénéficier des toutes dernières nouveautés en
                  IA
                </li>
                <li>
                  La certitude d'accéder aux solutions les plus performantes et
                  innovantes
                </li>
                <li>
                  Une porte d'entrée unique vers un univers d'IA soigneusement
                  sélectionné
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-foreground mb-20">
        <div
          className="lg:m-auto mx-2 px-4 py-20 lg:py-28 max-w-5xl lg:flex bg-[#18181B]
          lg:items-center lg:justify-between lg:px-8 rounded-[1rem]"
        >
          <h3
            className="scroll-m-20 font-caption text-xl font-semibold text-center lg:text-left
            tracking-tight"
          >
            <span
              className="scroll-m-20 text-white font-caption text-3xl 
              font-semibold tracking-tight transition-colors first:mt-0"
            >
              Vous avez découvert une nouvelle solution d'IA ?
            </span>
            <br />
            <span className="text-gray-400 ">
              C'est le moment de partager avec nous !
            </span>
          </h3>
          <div className="mt-10 flex items-center justify-center lg:justify-end gap-x-6 lg:mt-0 lg:shrink-0">
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium 
        ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
        bg-text_primary text-white hover:bg-text_primary/90 h-11 rounded-md px-8"
            >
              Soumettez une IA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
