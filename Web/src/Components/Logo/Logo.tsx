import React from "react";
import { Container, Image } from "./Logo.styled";

export const Logo: React.FC = () => {
  return (
    <Container>
      <Image src="Images/Logo.png" alt="logo" />
    </Container>
  );
};
