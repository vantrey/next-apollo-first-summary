import {gql} from '@apollo/client';

export const USER_FIELDS_FRAGMENT = gql`fragment UserFieldsFragment on InstagramUserProfile {
    username
    userId
}`;

export const GET_INSTAGRAM_USER = gql`
    ${USER_FIELDS_FRAGMENT}
    query GetUser($id: String!) {
    instagramUser(userId: $id) {
        email
        gender
        postsCount
        ...UserFieldsFragment
    }
}`;

export const GET_ALL_INSTAGRAM_USERS = gql/* GraphQL */ `
    query GetAllUsers($paging: PaginationData!) {
        ${USER_FIELDS_FRAGMENT}
        instagramUsers(pagination: $paging) {
            ...UserFieldsFragment
        }
    }
`;
