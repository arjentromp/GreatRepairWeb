import React from "react";
import { Container, Input } from "./InputBox.styled";

export const InputBox: React.FC = () => {
  return (
    <Container>
      <input type="text" placeholder="Voornaam" />

      <input type="text" placeholder="Wachtwoord" />

      <Input type="submit" value="Log in" />
    </Container>
  );
};
