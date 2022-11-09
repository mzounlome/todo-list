import { devices } from "../../devices";
import styled from "styled-components";
export const TaskMain = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 250px;
  @media ${devices.tablet} {
    margin-right: 170px;
  }
`;

export const TaskDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
`;

export const TaskCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  width: 20px;
  height: 20px;
  margin-left: 25px;
  cursor: pointer;
`;

export const TaskLabel = styled.label`
  font-size: 1rem;
  color: #000000;
  font-weight: 500;
  margin-left: 10px;
`;
