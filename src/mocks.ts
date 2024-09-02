export const mockData = {
  // The key here is same as the GraphQL operation name
  getCountries: {
    data: {
      continent: {
        countries: [
          {
            name: "India",
            emoji: "🇮🇳",
            code: "IN",
            __typename: "Country",
          },
        ],
      },
    },
    // data: null,
    // errors: [
    //   {
    //     message: "sample error",
    //   },
    // ],
  },
};
