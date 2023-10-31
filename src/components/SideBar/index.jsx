import styled from "styled-components";
import { CSSVariables } from "../CSSVariables";
import { Button, ButtonTag } from "../Button";

const AsideContainer = styled.aside`
  height: 100vh;
  nav {
    background-color: ${CSSVariables.colors.primary};
    border-radius: 5px;
    margin-bottom: 6px;
    padding: 1px;
    
  }
`;

const AsideList = styled.ul`
   padding: 0;
  a {
    text-decoration: none;
  }
`;

const TagList = styled.ul`
 display: flex;
 flex-direction: row;
 column-gap: 8px;
 padding: 0;

`

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
          <TagList>
            <li><ButtonTag>Playslists</ButtonTag></li>
            <li><ButtonTag>Artists</ButtonTag></li>
            <li><ButtonTag>Albuns</ButtonTag></li>
            <li><ButtonTag>more</ButtonTag></li>
          </TagList>
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
