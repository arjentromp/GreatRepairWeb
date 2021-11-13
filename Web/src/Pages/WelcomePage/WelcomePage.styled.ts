import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Login = styled.div`
  width: 350px;
  text-align: center;

  margin-top: 60px;

  font-size: 50px;
  font-weight: bold;
  border-bottom: solid black 1px;
  padding: 3px;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  cursor: pointer;
`;

export const Anchor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
