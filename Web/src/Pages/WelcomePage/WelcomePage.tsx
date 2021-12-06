import React, { useState } from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Logo } from "../../Components/Logo/Logo";
import { Container, Login, LoginContainer, Button } from "./WelcomePage.styled";

export const WelcomePage: React.FC = () => {
  const [Name, Setname] = useState("");

  const [Password, SetPassword] = useState("");

  const SubmitValues = () => {};

  console.log(Name);

  return (
    <Container>
      <Logo />
      <Login>Login</Login>
      <br />
      <br />
      <LoginContainer>
        <input
          onChange={(event) => Setname(event.currentTarget.value)}
          id="UserNameInput"
          type="text"
          placeholder="Voornaam"
          value={Name}
        />
        <input type="text" placeholder="Wachtwoord" />
        <Button type="submit" value="login" />
      </LoginContainer>
      <Footer />
    </Container>
  );
};

//<LoginContainer>
//  <form onSubmit={handleSubmit}>
//    <input id="UserNameInput" type="text" placeholder="Voornaam" />
//    <input type="text" placeholder="Wachtwoord" />
//    <input type="submit" value="login" />
//  </form>
//</LoginContainer>;
