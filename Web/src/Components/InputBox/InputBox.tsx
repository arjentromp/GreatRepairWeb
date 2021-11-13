import React from "react";
import { Container, Input } from "./InputBox.styled";

export const InputBox: React.FC = () => {
  return (
    <Container>
      <input type="text" placeholder="Voornaam" />
      <br />
      <input type="text" placeholder="Wachtwoord" />
      <br />
      <input type="submit" value="Log in" />
    </Container>
  );
};
