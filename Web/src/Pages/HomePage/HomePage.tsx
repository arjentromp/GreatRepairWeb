<<<<<<< HEAD
import React from "react";
import {
  Container,
  ContentWrapper,
  Content,
  Filter,
  Omschrijving,
  Gebruiker,
  Locatie,
  Datum,
  Urgentie,
  Tickets,
  Tickets1,
} from "./HomePage.styled";
import { Menu } from "../../Components/Menu/Menu";
import { Footer } from "../../Components/Footer/Footer";
=======
import React from 'react';
import { Container } from './HomePage.styled';
>>>>>>> parent of bbfb614 (Outdated versie upload voor vragen.)

type Props = {
  name: string;
};

export const HomePage: React.FC<Props> = ({ name }) => {
<<<<<<< HEAD
  return (
    <Container>
      <Menu />
      <ContentWrapper>
        <Content>
          <Filter>
            <Omschrijving>Omschrijving</Omschrijving>
            <Locatie>Locatie</Locatie>
            <Gebruiker>Gebruiker</Gebruiker>
            <Datum>Datum</Datum>
            <Urgentie>Urgentie</Urgentie>
          </Filter>
          <Tickets1>
            <Omschrijving>Omschrijving</Omschrijving>
            <Locatie>Locatie</Locatie>
            <Gebruiker>Gebruiker</Gebruiker>
            <Datum>Datum</Datum>
            <Urgentie>Urgentie</Urgentie>
          </Tickets1>
          <Tickets>
            <Omschrijving>Omschrijving</Omschrijving>
            <Locatie>Locatie</Locatie>
            <Gebruiker>Gebruiker</Gebruiker>
            <Datum>Datum</Datum>
            <Urgentie>Urgentie</Urgentie>
          </Tickets>
          <Tickets1>
            <Omschrijving>Omschrijving</Omschrijving>
            <Locatie>Locatie</Locatie>
            <Gebruiker>Gebruiker</Gebruiker>
            <Datum>Datum</Datum>
            <Urgentie>Urgentie</Urgentie>
          </Tickets1>
          <Tickets>
            <Omschrijving>Omschrijving</Omschrijving>
            <Locatie>Locatie</Locatie>
            <Gebruiker>Gebruiker</Gebruiker>
            <Datum>Datum</Datum>
            <Urgentie>Urgentie</Urgentie>
          </Tickets>
          <Tickets1>
            <Omschrijving>Omschrijving</Omschrijving>
            <Locatie>Locatie</Locatie>
            <Gebruiker>Gebruiker</Gebruiker>
            <Datum>Datum</Datum>
            <Urgentie>Urgentie</Urgentie>
          </Tickets1>
        </Content>
        <Footer />
      </ContentWrapper>
    </Container>
  );
=======
  return <Container>{name}</Container>;
>>>>>>> parent of bbfb614 (Outdated versie upload voor vragen.)
};
