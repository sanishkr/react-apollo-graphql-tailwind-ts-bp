import { gql, useQuery } from "@apollo/client";
import { Country } from "./gql/graphql";

const GET_COUNTRIES_LIST = gql(`
  query getCountries($code: ID!) {
    continent(code: $code) {
      countries {
        name
        emoji
        code
      }
    }
  }
`);

export default function CountriesList({ continent }: { continent: string }) {
  const { loading, data } = useQuery(GET_COUNTRIES_LIST, {
    variables: {
      code: continent,
    },
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <h3>List of Countries in {continent}</h3>
      <div className="overflow-y-auto h-52">
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <table>
            <thead>
              <tr className="text-left">
                {/* <th>Code</th> */}
                <th>Name</th>
                <th>Flag</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.continent.countries.map((country: Country) => (
                  <tr key={country.code} className="text-left">
                    {/* <td>{country.code}</td> */}
                    <td>{country.name}</td>
                    <td>{country.emoji}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
