import React from "react";
import { InputBox } from "../../Components/InputBox/InputBox";
import { Logo } from "../../Components/Logo/Logo";
import { Container, Login } from "./WelcomePage.styled";

export const WelcomePage: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Login>Login</Login>
      <br />
      <br />
      <InputBox />
    </Container>
  );
};
