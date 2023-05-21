import React from 'react';
import { LoadMore, Wraper } from './Button.styled';

export const Button = ({ onClick, children }) => {
  return (
    <Wraper>
      <LoadMore type="button" onClick={onClick}>
        {children}
      </LoadMore>
    </Wraper>
  );
};
