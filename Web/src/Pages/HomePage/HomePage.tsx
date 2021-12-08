import React from "react";
import {
  Container,
  Content,
  ContentHeader,
  FilterDropdown,
  Ticket,
} from "./HomePage.styled";
import { Menu } from "../../Components/Menu/Menu";
import { Footer } from "../../Components/Footer/Footer";

type Props = {
  name: string;
};

export const HomePage: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <Menu />
      <Content>
        <ContentHeader>Titel</ContentHeader>
        <Ticket>hallo</Ticket>
        <Ticket>hallo</Ticket>
        <Ticket>hallo</Ticket>
        <Ticket>hallo</Ticket>
        <Ticket>hallo</Ticket>
        <Ticket>hallo</Ticket>
        <Ticket>hallo</Ticket>
        <Ticket>hallo</Ticket>
        <Ticket>hallo</Ticket>
        <Ticket>hallo</Ticket>
      </Content>
      <Footer />
    </Container>
  );
};
//Locatie: The Mission, Omschrijving: Lichtsensor kapot, Aangemaakt
//          door: Arjen, Datum toegevoegd: 08-12-2021
