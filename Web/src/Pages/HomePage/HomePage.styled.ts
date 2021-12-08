import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  height: 100%;
  width: 750px;
  margin: 0px auto auto auto;
  display: flex;
  flex-direction: column;
`;

export const ContentHeader = styled.div`
  background: rgba(232, 232, 232, 0.8);
  height: 50px;
  width: 750px;
  display: flex;
  align-items: center;
`;

export const FilterDropdown = styled.div`
  width: 120px;
  height: 50px;
  font-size: 20px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Ticket = styled.div`
  background: white;
  height: 50px;
  margin-bottom: 2px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
