import React from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Logo } from "../../Components/Logo/Logo";
import { Container, Input, Login, LoginContainer } from "./WelcomePage.styled";

export const WelcomePage: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Login>Login</Login>
      <br />
      <br />
      <LoginContainer>
        <input type="text" placeholder="Voornaam" />

        <input type="text" placeholder="Wachtwoord" />

        <Input type="submit" value="Log in" />
      </LoginContainer>
      <Footer />
    </Container>
  );
};
