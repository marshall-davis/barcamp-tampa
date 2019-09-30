import { gql } from 'apollo-boost';

export const TALKS = gql`
  query {
    talks {
      id
      title
      time
      description
      speaker: user {
        email
        firstName
        lastName
        twitter
        facebook
        #TODO: need linkedin
      }
      room {
        name
      }
    }
  }
`;
