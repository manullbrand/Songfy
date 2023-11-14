import styled from "styled-components";
import { Button, ButtonBack, ButtonForward } from "../Button";
import { GoBell } from "react-icons/go";
import { MdOutlineDownloading } from "react-icons/md";
import { CSSVariables } from "../CSSVariables";
import ButtonProfileDropdown from "../Button/ButtonProfileDropdown";

const TopNavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 22px 0;

  li {
    align-items: center;
    display: flex;

    .button__install {
      align-items: center;
      color: ${CSSVariables.colors.activeText};
      column-gap: 5px;
      display: flex;
    }
  }

  .list__profile-dropdown {
    position: relative;
  }
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
            <ButtonBack />
          </li>
          <li>
            <ButtonForward />
          </li>
        </TopNavigationLinks>
        <TopNavigationLinks>
          <li>
            <Button className="button__install">
              <MdOutlineDownloading className="topnav__icons" />
              Install App
            </Button>
          </li>
          <li>
            <Button>
              <GoBell className="topnav__icons" />
            </Button>
          </li>
          <li className="list__profile-dropdown">
            <ButtonProfileDropdown></ButtonProfileDropdown>
          </li>
        </TopNavigationLinks>
      </TopNavigationList>
    </nav>
  );
}
