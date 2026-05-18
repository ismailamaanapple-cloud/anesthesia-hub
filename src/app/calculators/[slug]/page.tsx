import { notFound } from "next/navigation";
import { calculators } from "@/lib/calculators";
import { BmiBsaCalc } from "@/components/calculators/bmi-bsa";
import { IbwAbwCalc } from "@/components/calculators/ibw-abw";
import { MacCalc } from "@/components/calculators/mac";
import { EttLmaCalc } from "@/components/calculators/ett-lma";
import { MaintenanceFluidsCalc } from "@/components/calculators/maintenance-fluids";
import { AblCalc } from "@/components/calculators/abl";
import { PedsEmergencyCalc } from "@/components/calculators/peds-emergency";
import { ApfelCalc } from "@/components/calculators/apfel";
import { RcriCalc } from "@/components/calculators/rcri";
import { DrugDosesCalc } from "@/components/calculators/drug-doses";
import { LocalAnestheticMaxCalc } from "@/components/calculators/local-anesthetic-max";
import { OpioidConverterCalc } from "@/components/calculators/opioid-converter";
import { PressorDripCalc } from "@/components/calculators/pressor-drip";
import { ReversalCalc } from "@/components/calculators/reversal";

export function generateStaticParams() {
  return calculators.map((c) => ({ slug: c.slug }));
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = calculators.find((c) => c.slug === slug);
  if (!meta) notFound();

  switch (slug) {
    case "drug-doses":
      return <DrugDosesCalc />;
    case "local-anesthetic-max":
      return <LocalAnestheticMaxCalc />;
    case "opioid-converter":
      return <OpioidConverterCalc />;
    case "pressor-drip":
      return <PressorDripCalc />;
    case "reversal":
      return <ReversalCalc />;
    case "bmi-bsa":
      return <BmiBsaCalc />;
    case "ibw-abw":
      return <IbwAbwCalc />;
    case "mac":
      return <MacCalc />;
    case "ett-lma":
      return <EttLmaCalc />;
    case "maintenance-fluids":
      return <MaintenanceFluidsCalc />;
    case "allowable-blood-loss":
      return <AblCalc />;
    case "peds-emergency":
      return <PedsEmergencyCalc />;
    case "apfel-ponv":
      return <ApfelCalc />;
    case "rcri":
      return <RcriCalc />;
    default:
      notFound();
  }
}
