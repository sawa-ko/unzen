import { gql } from "@apollo/client";

export const SessionClientDocument = gql`
  query GetSession($token: String!) {
    me(token: $token) @client {
      token
      token_expires
      id
      username
      avatar
      permissions
    }
  }
`;
