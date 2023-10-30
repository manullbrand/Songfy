import styled from "styled-components";
import { CSSVariables } from "../CSSVariables";
import { Button } from "../Button";

const AsideContainer = styled.aside`
  height: 100vh;
  nav {
    background-color: ${CSSVariables.colors.secondary};
    border-radius: 5px;
    margin-bottom: 6px;
    padding: 1px;
  }
`;

const AsideList = styled.ul`
  list-style: none;
  padding: 0;
  a {
    text-decoration: none;
  }
`;

export default function SideBar() {
  return (
    <>
      <AsideContainer>
        <div>
          <nav>
            <AsideList>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
            </AsideList>
          </nav>
        </div>

        <nav>
          <Button>Your Library</Button>
          <Button>+</Button>
          <Button>seta</Button>
          <AsideList>
            <li>
              <a href="#">Musica1</a>
            </li>
            <li>
              <a href="#">Musica2</a>
            </li>
            <li>
              <a href="#">Musica3</a>
            </li>
            <li>
              <a href="#">Musica4</a>
            </li>
            <li>
              <a href="#">Musica5</a>
            </li>
          </AsideList>
        </nav>
      </AsideContainer>
    </>
  );
}
