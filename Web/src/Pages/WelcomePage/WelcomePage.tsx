import React from "react";
import { InputBox } from "../../Components/InputBox/InputBox";
import { Logo } from "../../Components/Logo/Logo";
import { Container } from "./WelcomePage.styled";

export const WelcomePage: React.FC = () => {
  return (
    <Container>
      <Logo />
      <p>Login</p>
      <InputBox />
    </Container>
  );
};
