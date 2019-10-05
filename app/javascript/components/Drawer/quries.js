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
      }
      room {
        name
      }
    }
  }
`;

export const TALKS_BY_YEAR = gql`
  query {
    talks(year: 2019) {
      id
      title
      time
      twitter
      name
      description
      room {
        name
      }
    }
  }
`;
