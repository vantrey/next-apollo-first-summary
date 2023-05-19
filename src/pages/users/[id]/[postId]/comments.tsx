import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {
    OnCommentAddedSubscription,
    useGetCommentsQuery,
    useOnCommentAddedSubscription
} from '@/queries/comments.generated';
import {COMMENTS_SUBSCRIPTION} from '@/queries/comments';

// @ts-ignore
const Comments = () => {
    const router = useRouter();
    const postId = router.query.postId;
    console.log('postId',postId)

    const { data: commentsData, subscribeToMore } = useGetCommentsQuery({
        variables: {postId: postId as string},
        skip: !postId
    })

    useEffect(() => {
        if(!postId) return

        subscribeToMore<OnCommentAddedSubscription>({
            document: COMMENTS_SUBSCRIPTION,
            variables: {
                postId: postId as string
            },
            updateQuery: (previousQueryResult, { subscriptionData }) => {
                if (!subscriptionData.data) return previousQueryResult;

                const newComment = subscriptionData.data.commentAdded

                return Object.assign({}, previousQueryResult, {
                    instagramPostComments: [...previousQueryResult.instagramPostComments, newComment]
                })
            }

        })
    }, [postId])

    const { data: subData } = useOnCommentAddedSubscription({
        skip: !postId,
        variables: {
        postId: postId as string
        }
    });
    console.log('DATA!!!!!!!!!!!!!!!',subData)


    return (
        <>
            COMEENTS
            <div>
                COMMENTS:{commentsData?.instagramPostComments.map((comment) => {
                return <div style={{ color: 'olivedrab' }} key={comment.created_at}>
                    {comment.text} {' '} {comment.created_at}
                </div>
            })}
            </div>
        </>
    );
};

export default Comments;