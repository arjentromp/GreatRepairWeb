import styled from "styled-components";

export const MenuWrapper = styled.div`
  width: 100%;
  max-height: 50px;
  min-height: 50px;
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.div`
  margin: auto 25px auto auto;
  font-size: 25px;
`;

export const Logo = styled.img`
  max-height: 40px;
  margin-left: 5px;
`;

export const Settings = styled.img`
  max-height: 30px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background: white;
  max-height: 50px;
  min-height: 50px;
  width: 100%;
`;

export const Dropdown = styled.div`
  width: 200px;
  margin-right: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
`;

export const Option = styled.div`
  cursor: pointer;
  font-size: 17px;
  height: 45px;
  width: 200px;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
    background: gray;
  }
`;
