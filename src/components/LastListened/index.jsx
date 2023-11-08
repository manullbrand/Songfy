import styled from "styled-components";
import albumCover from "../../assets/images/album-cover.png";
import { CSSVariables } from "../CSSVariables";
import { BiPlay } from "react-icons/bi";

const LastListenedContainer = styled.section`
  margin: 0;
  h2 {
    margin: 20px 0;
  }
`;

const LastListenedList = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 5px;
  margin: 0;
  padding: 0;

  li {
    a {
      align-items: center;
      background-color: ${CSSVariables.colors.secondaryTransparent};
      border-radius: 5px;
      display: flex;
      min-width: 100px;

      div {
        display: flex;
        flex: 1;
        justify-content: space-between;
        padding: 0 16px;

        p {
          align-self: center;
          font-size: 0.875rem;
        }
        button {
          background: none;
          border: none;
          font-size: 32px;
          position: relative;

          &:hover .icon {
            background-color: #1fdf64;
            border-radius: 50px;
            box-shadow: 0 8px 8px rgba(0, 0, 0, 0.3);
            display: block;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

const Icon = styled(BiPlay)`
  border: none;
  color: black;
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LastListenedImage = styled.img`
  height: 48px;
  width: 48px;
`;

export default function LastListened() {
  return (
    <>
      <LastListenedContainer>
        <h2>Good afternoon</h2>
        <LastListenedList>
          <li>
            <a href="#">
              <LastListenedImage src={albumCover} alt="" />
              <div>
                <p>This is Chico Buarque</p>
                <button>
                  <Icon className="icon" />
                </button>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <LastListenedImage src={albumCover} alt="" />
              <div>
                <p>This is Oliver Tree</p>
                <button>
                  <Icon className="icon" />
                </button>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <LastListenedImage src={albumCover} alt="" />
              <div>
                <p>Pop Mix</p>
                <button>
                  <Icon className="icon" />
                </button>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <LastListenedImage src={albumCover} alt="" />
              <div>
                <p>2000s Mix</p>
                <button>
                  <Icon className="icon" />
                </button>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <LastListenedImage src={albumCover} alt="" />
              <div>
                <p>Top 50 - Global</p>
                <button>
                  <Icon className="icon" />
                </button>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <LastListenedImage src={albumCover} alt="" />
              <div>
                <p>Today`s Top Hits</p>
                <button>
                  <Icon className="icon" />
                </button>
              </div>
            </a>
          </li>
        </LastListenedList>
      </LastListenedContainer>
    </>
  );
}
