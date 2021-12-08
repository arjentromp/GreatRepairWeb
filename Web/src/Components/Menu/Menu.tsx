import React from "react";
import {
  MenuWrapper,
  UserName,
  Header,
  Dropdown,
  Option,
} from "../../Components/Menu/Menu.styled";
import { Settings, Logo } from "./Menu.styled";

export const Menu: React.FC = () => {
  const Name = localStorage["CachedUserName"];

  return (
    <MenuWrapper>
      <Header>
        <Logo src="Images/Logo.png" alt="logo" />
        <UserName>Welkom, {Name}</UserName>
        <Settings src="Images/Settings.png" alt="logo" />
      </Header>
      <Dropdown>
        <Option>&nbsp;&nbsp;&nbsp;&nbsp;Verander gebruiker</Option>
        <Option>&nbsp;&nbsp;&nbsp;&nbsp;Voeg kamer toe</Option>
      </Dropdown>
    </MenuWrapper>
  );
};
