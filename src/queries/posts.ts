import {gql} from '@apollo/client';

export const GET_USER_POSTS = gql`query GetPosts($userId: String!) {
instagramPosts(profileId: $userId) {
    profileId
    _id
    description
    created_at
    geo {
        lat
        title
    }
}
}`;

export const CREATE_POST_MUTATION = gql`
    mutation CreatePost($userId: String!, $data: CreateInstagramPostData!) {
        createInstagramPost(profileId: $userId, data: $data) {
            description
            profileId
            _id
            created_at
            geo {
                title
                lat
            }
        }
    }
`;