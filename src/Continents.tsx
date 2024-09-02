import { gql, useQuery } from "@apollo/client";
import { Continent } from "./gql/graphql";

const GET_COUNTINENTS_INVENTORY = gql(`
  query getContinents {
  continents {
      name
      code
    }
  }
`);

export default function ContinentsList({
  continent,
  setContinent,
}: {
  continent: string | null;
  setContinent: (value: string | null) => void;
}) {
  const { loading, data } = useQuery(GET_COUNTINENTS_INVENTORY);

  return (
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
                  onClick={() => setContinent(continent.code)}
                  className="text-blue-800"
                >
                  {continent.name}
                </button>
              </span>
            ))}
        </div>
      )}
    </div>
  );
}
