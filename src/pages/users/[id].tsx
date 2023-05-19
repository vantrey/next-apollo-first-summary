import React, { FC } from 'react';
import {  useQuery } from '@apollo/client';
import Loading from '../../components/Atoms/Loading';
import ErrorMessage from '../../components/Atoms/ErrorMessage';
import Posts from '../../components/Posts/Posts';
import {GET_INSTAGRAM_USER} from '@/queries/users';
import {useRouter} from 'next/router';

const Id = () => {
  const router = useRouter();
  const id = router.query.id
    console.log('id',id)
  const { loading, error, data, refetch } = useQuery(GET_INSTAGRAM_USER,
    {
      variables: { id: id as string || '' },
      //pollInterval: 1000,
      //fetchPolicy: 'cache-and-network'
      //skip: !id
    }
  );
  const user = data?.instagramUser;

  const onRefetch = async () => {
    const response = await refetch(/*{ userId: '623aea90a3b3e16574e5e199' }*/);
    console.log('on refetch', response.data.instagramUser?.userId);
  };

  return (
    <>
      <Loading isLoading={loading} />
      <ErrorMessage errorMessage={error?.message} />
      {user && (
        <>
          <div style={{ listStyleType: 'none', paddingBottom: '5px' }}>name: {user.username}</div>
          <div style={{ listStyleType: 'none', paddingBottom: '5px' }}>email: {user.email}</div>
          <div style={{ listStyleType: 'none', paddingBottom: '30px' }}>
            postCount: {user.postsCount}
          </div>
        </>
      )}
      <button onClick={onRefetch}>refetch</button>
      <div style={{ paddingTop: '20px' }}>{<Posts userId={id as string || ''} />}</div>
    </>
  );
};

export default Id;
