import React from "react";
import { Container } from "./InputBox.styled";

export const InputBox: React.FC = () => {
  return (
    <Container>
      <input type="text" />;
      <input type="text" />;
    </Container>
  );
};
