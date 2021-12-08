import React from "react";
import {
  Container,
  Image,
  Titel,
  Option,
  Number,
  Gebruiker,
} from "../../Components/Menu/Menu.styled";

export const Menu: React.FC = () => {
  const Name = localStorage["CachedUserName"];

  return (
    <Container>
      <Image src="Images/LogoUitgebreid.png" alt="logo" />
      <Gebruiker>Ingelogd als {Name}</Gebruiker>
      <Titel>Tickets</Titel>
      <Option>
        Openstaand <Number>13</Number>
      </Option>
      <Option>
        Opgelost <Number>863</Number>
      </Option>
      <Option>
        Gesloten <Number>342</Number>
      </Option>
      <Titel>Opties</Titel>
      <Option>Ticket aanmaken</Option>
      <Option>Gebruiker veranderen</Option>
      <Option>Locatie toevoegen</Option>
    </Container>
  );
};
