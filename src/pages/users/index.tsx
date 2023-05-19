import React, { FC } from 'react';
import { useQuery } from '@apollo/client';

import Loading from '../../components/Atoms/Loading';
import ErrorMessage from '../../components/Atoms/ErrorMessage';
import { GET_ALL_INSTAGRAM_USERS } from '@/queries/users';
import Link from 'next/link';
import {useGetAllUsersQuery} from '@/queries/users.generated';


const Index: FC = () => {
  const { loading, error, data } = useGetAllUsersQuery({ variables: {
      paging: {
          page: '1',
          limit: '10'
      }
      },
      context: {token: 'all_users_token'}
  });
  const users = data?.instagramUsers;

  return (
    <>
      <Loading isLoading={loading} />
      <ErrorMessage errorMessage={error?.message} />

      {users && (
        <>
          USERS:
          <ul>
            {users.map((user, index) => (
              <li key={user.userId} style={{ listStyleType: 'none', paddingBottom: '5px' }}>
                <Link href={`users/${user.userId}`}>Name: {user.username || `empty ${index}`}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Index;
