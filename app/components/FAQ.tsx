import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function page() {
  return (
    <div className="">
      <div className="m-auto px-4 py-20 lg:py-28 max-w-6xl flex max-lg:flex-col">
        <div className="flex-1 space-y-2 mb-4 lg:mb-0">
          <p className="font-extrabold uppercase text-text_primary">FAQ</p>
          <h3
            className="scroll-m-20 font-caption font-semibold tracking-tight 
          transition-colors first:mt-0 text-5xl "
          >
            Questions fréquentes
          </h3>
        </div>
        <div className="flex-1">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Quels types d'IA puis-je trouver sur DockAI ?
              </AccordionTrigger>
              <AccordionContent>
                Notre plateforme référence des solutions IA couvrant le
                marketing, la création de contenu, la productivité, l'analyse de
                données et plus encore.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Les outils IA sont-ils gratuits ou payants ?
              </AccordionTrigger>
              <AccordionContent>
                DockAI propose à la fois des options gratuites et payantes pour
                répondre à tous les besoins et budgets.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Comment savoir si une IA est fiable ?
              </AccordionTrigger>
              <AccordionContent>
                Nous intégrons uniquement des solutions éprouvées et analysées
                par nos experts. Les notes et avis vous guident aussi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Puis-je essayer les outils avant de m'abonner ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, la plupart des IA payantes offrent des versions d'essai ou
                des plans gratuits pour tester.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Comment trouver l'IA idéale pour mes besoins ?
              </AccordionTrigger>
              <AccordionContent>
                Notre puissant système de recherche et de filtres vous permet
                d'affiner vos critères pour identifier la meilleure solution.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
