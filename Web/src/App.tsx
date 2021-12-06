import React, { ProviderProps } from "react";
import { WelcomePage } from "./Pages/WelcomePage/WelcomePage";

export const Home: React.FC = () => {
  if (localStorage.getItem("CachedUserName") === null) return <WelcomePage />;
};
