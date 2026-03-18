import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Components/DaisyNav";
import NavBar from "./Components/NavBar";
import PricingOptions from "./Components/Main/PricingOptions";

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
      </main>
    </>
  );
}

export default App;
