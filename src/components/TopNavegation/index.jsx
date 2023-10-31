import styled from "styled-components";
import { Button } from "../Button";
import { CSSVariables } from "../CSSVariables";

const TopNavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 22px 0;
`;

const TopNavigationLinks = styled.div`
  display: flex;
  column-gap: 20px;
  a {
    text-decoration: none;
  }
`;

export default function TopNavegation() {
  return (
    <nav>
      <TopNavigationList>
        <TopNavigationLinks>
          <li>
            <Button>Left</Button>
          </li>
          <li>
            <Button>Right</Button>
          </li>
        </TopNavigationLinks>
        <TopNavigationLinks>
          <li>
            <Button>Install App</Button>
          </li>
          <li>
            <Button>News</Button>
          </li>
          <li>
            <Button>Dropdown com interação do usuário</Button>
          </li>
        </TopNavigationLinks>
      </TopNavigationList>
    </nav>
  );
}
