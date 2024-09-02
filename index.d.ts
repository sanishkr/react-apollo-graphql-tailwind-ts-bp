import { ApolloLink } from "@apollo/client";

declare module "apollo-mock-http" {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  export function indectMock(options: {
    links: ApolloLink[];
    enableMock: boolean;
    targetOperations: string[];
    mockData: any;
  }): void;
}
