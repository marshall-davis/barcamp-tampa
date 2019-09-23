import { gql } from 'apollo-boost';

export const TALKS = gql`
  {
    talks {
      id
      title
      description
      speaker: user {
        email
        firstName
        lastName
      }
      room {
        name
        location {
          name
        }
      }
    }
  }
`;
