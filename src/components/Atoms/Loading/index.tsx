import React, { FC } from 'react';

interface ILoadingProps {
  isLoading: boolean;
}

const Loading: FC<ILoadingProps> = ({ isLoading }) => {
  return <div>{isLoading && <>LOADING...</>}</div>;
};

export default Loading;
