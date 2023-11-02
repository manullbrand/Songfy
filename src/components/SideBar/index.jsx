import styled from "styled-components";
import { CSSVariables } from "../CSSVariables";
import { ButtonExplore, ButtonForward, ButtonTag } from "../Button";
import {
  AiFillHome,
  AiOutlineArrowRight,
  AiOutlinePlus,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoLibrarySharp } from "react-icons/io5";
import albumCover2 from "../../assets/images/album-cover2.png";
import { BsFillPinAngleFill } from "react-icons/bs";

const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
 row-gap: 10px;
`;

const AsideFirstNav = styled.nav`
  background-color: ${CSSVariables.colors.primary};
  border-radius: 5px;
  padding: 1px;

  span {
    align-items: center;
    display: flex;
    height: 40px;
    gap: 20px;
    padding: 4px 12px;

    h2 {
      font-size: 1rem;
     
    }
    svg {
      font-size: 25px;
    }
  }
`;

const AsideList = styled.ul`
  padding: 0;
  li {
    margin-bottom: 5px;
  }

  .aside__songs {
    border-radius: 4px;
    column-gap: 15px;
    display: flex;
    padding: 5px;

    &:hover {
      background-color: ${CSSVariables.colors.terciary};
    }

    img {
      border-radius: 2px;
      height: 48px;
      width: 48px;
    }

    div {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      gap: 5px;
      justify-content: center;

      h3 {
        font-size: 0.9rem;
        margin: 0;
      }

      p {
        font-size: 0.875rem;
        .pin {
          color: #1fdf64;
        }
      }
    }
  }
`;

const AsideSecondNav = styled.nav`
  background-color: ${CSSVariables.colors.primary};
  border-radius: 5px;
  height: 100vh;
  padding: 8px 12px;
  overflow: auto;

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;

    p {
      color: ${CSSVariables.colors.inactiveText};
      font-size: 1rem;
      font-weight: ;
      margin: 0;
    }
  }
`;

const TagList = styled.ul`
  display: flex;
  column-gap: 8px;
  padding: 0;
`;

export default function SideBar() {
  return (
    <>
      <AsideContainer>
        <div>
          <AsideFirstNav>
            <AsideList>
              <li>
                <a href="#">
                  <span>
                    <AiFillHome />
                    <h2>Home</h2>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <HiMiniMagnifyingGlass />
                    <h2>Search</h2>
                  </span>
                </a>
              </li>
            </AsideList>
          </AsideFirstNav>
        </div>

        <AsideSecondNav>
          <div>
            <ButtonExplore>
              <span>
                <IoLibrarySharp />
                <p>Your Library</p>
              </span>
            </ButtonExplore>
            <span>
              <ButtonExplore>
                <AiOutlinePlus />
              </ButtonExplore>
              <ButtonExplore>
                <AiOutlineArrowRight />
              </ButtonExplore>
            </span>
          </div>
          <TagList>
            <li>
              <ButtonTag>Playslists</ButtonTag>
            </li>
            <li>
              <ButtonTag>Artists</ButtonTag>
            </li>
            <li>
              <ButtonTag>Albuns</ButtonTag>
            </li>
            <li>
              <ButtonForward />
            </li>
          </TagList>
          <div>
            <ButtonExplore>
              <HiMiniMagnifyingGlass />
            </ButtonExplore>
            <ButtonExplore>
              <span>
                <p>Recents</p>
                <AiOutlineUnorderedList />
              </span>
            </ButtonExplore>
          </div>
          <AsideList>
            <li>
              <a className="aside__songs" href="#">
                <img src={albumCover2} alt="" />
                <div>
                  <h3>Liked Songs</h3>
                  <p>
                    <BsFillPinAngleFill className="pin" /> Playslist • 116 songs
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a className="aside__songs" href="#">
                <img src={albumCover2} alt="" />
                <div>
                  <h3>Liked Songs</h3>
                  <p>
                    <BsFillPinAngleFill className="pin" /> Playslist • 116 songs
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a className="aside__songs" href="#">
                <img src={albumCover2} alt="" />
                <div>
                  <h3>Liked Songs</h3>
                  <p>Playslist • 116 songs</p>
                </div>
              </a>
            </li>
            <li>
              <a className="aside__songs" href="#">
                <img src={albumCover2} alt="" />
                <div>
                  <h3>Liked Songs</h3>
                  <p>Playslist • 116 songs</p>
                </div>
              </a>
            </li>
            <li>
              <a className="aside__songs" href="#">
                <img src={albumCover2} alt="" />
                <div>
                  <h3>Liked Songs</h3>
                  <p>Playslist • 116 songs</p>
                </div>
              </a>
            </li>
          </AsideList>
        </AsideSecondNav>
      </AsideContainer>
    </>
  );
}
