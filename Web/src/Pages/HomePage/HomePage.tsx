import React from 'react';
import { Container } from './HomePage.styled';

type Props = {
  name: string;
};

export const HomePage: React.FC<Props> = ({ name }) => {
  return <Container>{name}</Container>;
};
