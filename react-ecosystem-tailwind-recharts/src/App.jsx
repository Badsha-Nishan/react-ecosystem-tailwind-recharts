import { Suspense } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import PricingOptions from "./Components/Main/PricingOptions";
import ResultCharts from "./Components/ResultCharts/ResultCharts";

const PricingData = fetch("PricingData.json").then(res => res.json());
function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Suspense fallback={<p>Loading Data....</p>}>
          <PricingOptions PricingData={PricingData}></PricingOptions>
        </Suspense>

        <ResultCharts></ResultCharts>
      </main>
    </>
  );
}

export default App;
