import { useState } from "react";
import ContinentsList from "./Continents";
import CountriesList from "./Country";

export default function App() {
  const [selectedCont, setSelectedCont] = useState<string | null>(null);

  return (
    <div className="flex flex-row items-start justify-around w-3/5 gap-5 mx-auto mt-4">
      <ContinentsList continent={selectedCont} setContinent={setSelectedCont} />
      <div className="flex flex-col items-center justify-center w-1/2">
        {selectedCont ? <CountriesList continent={selectedCont} /> : null}
      </div>
    </div>
  );
}
