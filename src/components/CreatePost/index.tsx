import React, { ChangeEvent, FC, useState } from 'react';
import { useApolloClient, useMutation } from '@apollo/client';

import ErrorMessage from '../Atoms/ErrorMessage';
import { CREATE_POST_MUTATION, GET_USER_POSTS } from '@/queries/posts';
import {
  CreatePostMutation,
  CreatePostMutationVariables,
  GetPostsQuery,
  GetPostsQueryVariables
} from '@/queries/posts.generated';

interface ICreatePostProps {
  userId: string;
}

const CreatePost: FC<ICreatePostProps> = ({ userId }) => {
  const [description, setDescription] = useState<string | null>(null);

  const newPostDataPayload: CreatePostMutationVariables['data'] = {
    city: 'Minsk',
    country: 'Belarus',
    lat: 1,
    lng: 2,
    description: description || '',
    taggedUsers: []
  };
  const optimisticResponse: CreatePostMutation['createInstagramPost'] = {
    created_at: 0,
    __typename: 'InstagramUserPost',
    profileId: userId,
    description: description || '',
    geo: null
  };

  const [createPost, { data, error, loading, reset }] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(CREATE_POST_MUTATION, {
    variables: {
      userId,
      data: newPostDataPayload,
    },
      optimisticResponse: {
      createInstagramPost: optimisticResponse,
    },
    //refetchQueries: [GET_USER_POSTS], // Каждый включенный запрос выполняется с последним предоставленным набором переменных!!
    update(cache, { data: responseData }) {
      cache.updateQuery<GetPostsQuery, GetPostsQueryVariables>(
        {
          query: GET_USER_POSTS,
          variables: {
            userId,
          },
        },
        (cachedData) => {
          if (!cachedData || !responseData?.createInstagramPost) {
            return;
          }

          return {
            instagramPosts: [...cachedData.instagramPosts, responseData.createInstagramPost],
          };
        }
      );
    },
  });

  const client = useApolloClient();
  console.log('client.cache', client.cache);

  //работа с кэшем
  const updCache = () => {
    const cachedData = client.readQuery<GetPostsQuery, GetPostsQueryVariables>({
      query: GET_USER_POSTS,
      variables: {
        userId,
      },
    });

    cachedData &&
      client.writeQuery<GetPostsQuery, GetPostsQueryVariables>({
        query: GET_USER_POSTS,
        variables: {
          userId,
        },
        data: {
          instagramPosts: [
            ...cachedData.instagramPosts,
            {
              profileId: 'fake id',
              created_at: 1111,
              geo: { title: '678', lat: 1 },
              description: 'sdf',
              __typename: 'InstagramUserPost',
            },
          ],
        },
      });
  };

  const onSubmit = async () => {
    const response = await createPost();
    console.log('createdPostResponse', response);
    setDescription('');
  };

  const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (error) {
      reset();
    }

    setDescription(event.currentTarget.value);
  };

  return (
    <>
      <input onChange={onDescriptionChange} value={description || ''} />
      <button style={{ marginLeft: '5px' }} onClick={onSubmit}>
        create post
      </button>
      <button style={{ marginLeft: '5px' }} onClick={updCache}>
        modify cache
      </button>
      {error && (
        <div style={{ marginTop: '10px', color: 'red' }}>
          <ErrorMessage errorMessage={error.message} />
        </div>
      )}
    </>
  );
};

export default CreatePost;
