import { gql, useQuery } from "@apollo/client";
import "./App.css";
import { Continent } from "./gql/graphql";
import CountriesList from "./Country";
import { useState } from "react";

const GET_COUNTINENTS_INVENTORY = gql(`
  query getContinents {
  continents {
      name
      code
    }
  }
`);

export default function App() {
  const [selectedCont, setSelectedCont] = useState<string | null>(null);
  const { loading, data } = useQuery(GET_COUNTINENTS_INVENTORY);

  return (
    <div className="flex flex-row items-start justify-around w-3/5 gap-5 mx-auto mt-4">
      <div className="flex flex-col items-center justify-center w-1/2">
        <h3>List of Continents</h3>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <div className="flex flex-col m-4">
            {data &&
              data.continents.map((continent: Continent) => (
                <span key={continent.code}>
                  <button
                    onClick={() => setSelectedCont(continent.code)}
                    className="text-blue-800"
                  >
                    {continent.name}
                  </button>
                </span>
              ))}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center w-1/2">
        {selectedCont ? <CountriesList continent={selectedCont} /> : null}
      </div>
    </div>
  );
}
