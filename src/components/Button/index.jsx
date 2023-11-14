import styled from "styled-components";
import { CSSVariables } from "../CSSVariables";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export const Button = styled.button`
  align-items: center;
  background-color: ${CSSVariables.colors.background};
  border-radius: 50px;
  display: flex;
`;

export const ButtonExplore = styled.button`
  background: none;
  color: ${CSSVariables.colors.inactiveText};
  span {
    align-items: center;
    display: flex;
    column-gap: 5px;
  }
  svg {
    font-size: 20px;
  }
`;

export const ButtonTag = styled.button`
  background-color: ${CSSVariables.colors.secondary};
  border-radius: 50px;
`;

export const ButtonForward = styled(IoIosArrowForward)`
  align-items: center;
  border-radius: 50%;
  background-color: ${CSSVariables.colors.background};
  color: ${CSSVariables.colors.inactiveText};
  font-size: 20px;
  padding: 10px;
`;

export const ButtonBack = styled(IoIosArrowBack)`
  align-items: center;
  background-color: ${CSSVariables.colors.background};
  border-radius: 50%;
  color: ${CSSVariables.colors.inactiveText};
  font-size: 20px;
  padding: 10px;
`;

export const ButtonFooter = styled.button`
  align-items: center;
  display: flex;
  background-color: ${CSSVariables.colors.background};
  color: ${CSSVariables.colors.inactiveText};
  font-size: 20px;
  padding: 10px;
`;
