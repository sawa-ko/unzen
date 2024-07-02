import { gql } from "@apollo/client";

export const SessionClientDocument = gql`
  query GetSession {
    me @client {
      token
      token_expires
      id
      username
      avatar
      permissions
    }
  }
`;
