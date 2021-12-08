import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 100%;
  background: rgba(47, 59, 68, 0.8);
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 100px;
  width: 230px;
  margin-top: 15px;
  align-self: center;
`;

export const Titel = styled.div`
  font-size: 20px;
  display: flex;
  margin-top: 45px;
  margin-left: 15px;
`;

export const Option = styled.div`
  margin-top: 10px;
  margin-left: 25px;
  width: 250px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }
`;

export const Number = styled.span`
  margin: auto 0px auto auto;
  display: flex;
  font-size: 13px;
  border-radius: 3px;
  padding: 1px;
  background: rgba(242, 255, 0, 0.8);
  align-items: center;
  justify-content: center;
`;

export const Gebruiker = styled.div`
  margin-top: 35px;
  align-self: center;
  font-size: 25px;
  max-width: 280px;
  text-align: center;
`;
