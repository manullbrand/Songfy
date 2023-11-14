import { BsPerson } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CSSVariables } from "../../CSSVariables";
import { useState } from "react";
import styled from "styled-components";

const ButtonDropdown = styled.button`
  align-items: center;
  background-color: ${CSSVariables.colors.background};
  border-radius: 50px;
  display: flex;

`;

const Dropdown = styled.ul`
  border-radius: 4px;
  background-color: ${CSSVariables.colors.secondary};
  font-size: 0.875rem;
  height: 208px;
  position: absolute;
  padding: 4px;
  top: 50px;
  right: 2px;
  width: 220px;
  z-index: 1;

  li:hover {
    background-color: rgba(186, 184, 184, 0.15);
    border-radius: 2px;
  }

  a {
    text-align: left;
    display: block;
    padding: 12px;
    width: 100%;
  }

  .after__line {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  }

  .button__profile {
    align-items: center;
    background-color: transparent;
    color: ${CSSVariables.colors.activeText};
    display: flex;
    justify-content: space-between;
    padding: 12px;
    width: 100%;
  }
`;

function ButtonProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <ButtonDropdown onClick={handleClick}>
        <BsPerson />
      </ButtonDropdown>

      {isOpen && (
        <Dropdown>
          <li>
            <button className="button__profile">
              <span>Acount</span>
              <FaExternalLinkAlt />
            </button>
          </li>
          <li>
            <button className="button__profile">
              <span>Set up your Family plan</span>
              <FaExternalLinkAlt />
            </button>
          </li>
          <li>
            <a href="#/action-3">Profile</a>
          </li>
          <li>
            <a href="#/action-4" className="after__line">
              Settings
            </a>
          </li>
          <li>
            <a href="#/action-5">Log out</a>
          </li>
        </Dropdown>
      )}
    </>
  );
}

export default ButtonProfileDropdown;
