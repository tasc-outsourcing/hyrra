import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import GCCComplexity from "./components/GCCComplexity";
import ComparisonTable from "./components/ComparisonTable";
import AIAgents from "./components/AIAgents";
import HumanReinforcement from "./components/HumanReinforcement";
import EnterpriseArchitecture from "./components/EnterpriseArchitecture";
import ROICalculator from "./components/ROICalculator";
import ImpactSection from "./components/ImpactSection";
import CTAFooter from "./components/CTAFooter";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center overflow-x-hidden">
      <Navigation />
      <main className="w-full flex flex-col items-center">
        <HeroSection />
        <GCCComplexity />
        <ComparisonTable />
        <AIAgents />
        <HumanReinforcement />
        <EnterpriseArchitecture />
        <ROICalculator />
        <ImpactSection />
        <CTAFooter />
      </main>
    </div>
  );
}
