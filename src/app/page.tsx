import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { EngineeringWork } from "@/components/sections/EngineeringWork";
import { EngineeringPrinciples } from "@/components/sections/EngineeringPrinciples";
import { SystemDesignPreview } from "@/components/sections/SystemDesignPreview";
import { ProductContext } from "@/components/sections/ProductContext";
import { Mentorship } from "@/components/sections/Mentorship";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div id="top" />
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <ImpactMetrics />
        <EngineeringWork />
        <EngineeringPrinciples />
        <SystemDesignPreview />
        <ProductContext />
        <Mentorship />
        <ExperiencePreview />
      </main>
      <SiteFooter />
    </>
  );
}
