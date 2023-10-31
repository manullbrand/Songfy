import styled from "styled-components";
import { CSSVariables } from "../CSSVariables";

export const Button = styled.button`
  background-color: ${CSSVariables.colors.background};
  border-radius: 50px;
  border: none;
  cursor: pointer;
  padding: 10px;
`;

export const ButtonTag = styled.button`
  background-color: ${CSSVariables.colors.secondary};
  border-radius: 50px;
  border: none;
  cursor: pointer;
  padding: 10px;
`;

