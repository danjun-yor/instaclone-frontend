import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalStates";

export default new ApolloClient({
  uri: "http://localhost:4000",
  clientState: {
    defaults,
    resolvers
  }
});
