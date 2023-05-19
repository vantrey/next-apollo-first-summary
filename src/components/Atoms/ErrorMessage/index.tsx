import React, { FC } from 'react';

interface IErrorMessageProps {
  errorMessage?: string;
}

const ErrorMessage: FC<IErrorMessageProps> = ({ errorMessage }) => {
  return <>{errorMessage && <>Error: {errorMessage}</>}</>;
};

export default ErrorMessage;
