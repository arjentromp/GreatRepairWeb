import React, { useState } from 'react';
import { Footer } from '../../Components/Footer/Footer';
import { Logo } from '../../Components/Logo/Logo';
import { Container, Login, LoginContainer, Button, ErrorMessage } from './WelcomePage.styled';

type Props = {
  setName: (name: string) => void;
};

export const WelcomePage: React.FC<Props> = (props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitValues = () => {
    if (name === 'Herman' && password === '123') {
      setError('');
      props.setName('Herman');
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <Container>
      <Logo />
      <Login>Login</Login>
      <br />
      <br />
      <LoginContainer>
        <input
          onChange={(event) => setName(event.currentTarget.value)}
          id="UserNameInput"
          type="text"
          placeholder="Voornaam"
          value={name}
        />
        <input
          onChange={(event) => setPassword(event.currentTarget.value)}
          type="password"
          placeholder="Wachtwoord"
          value={password}
        />
        {error && <ErrorMessage> {error} </ErrorMessage>}
        <Button type="submit" value="login" onClick={submitValues} />
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
