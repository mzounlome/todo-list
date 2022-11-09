import { devices } from "../../devices";
import styled from "styled-components";

export const SearchBarDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  width: 300px;
  margin: 15px;
  justify-content: space-evenly;
  @media ${devices.tablet} {
    width: 500px;
    margin: 25px;
  }
`;

export const SearchBar = styled.input`
  height: 60px;
  padding-left: 15px;
  border-radius: 14px;
  &:focus {
    outline: none;
  }

  @media ${devices.tablet} {
    width: 300px;
    height: 75px;
  }
`;

export const SearchButton = styled.button`
  height: 60px;
  width: 80px;
  border-radius: 14px;
  background-color: #2f80ed;
  color: #ffffff;

  &:hover {
    background-color: #4287f5;
  }
  @media ${devices.tablet} {
    height: 75px;
    width: 90px;
  }
`;
