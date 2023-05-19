import {gql} from '@apollo/client';

export const GET_POST_COMMENTS = gql`query GetComments($postId: String!) {
instagramPostComments(postId: $postId) {
    text
    postId
    created_at
}
}`;

export const COMMENTS_SUBSCRIPTION = gql`
    subscription OnCommentAdded($postId: String!) {
        commentAdded(postId: $postId) {
            text
            postId
            created_at
        }
    }
`;