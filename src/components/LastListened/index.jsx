import styled from "styled-components";
import albumCover from "../../assets/images/album-cover.png";
import { CSSVariables } from "../CSSVariables";

const LastListenedContainer = styled.section`
  margin: 0;
  h2 {
    width: 100vw;
  }
`;

const LastListenedList = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 5px;
  list-style: none;

  margin: 0;
  padding: 0;

  li {
    a {
      align-items: center;
      background-color: ${CSSVariables.colors.secondary};
      border-radius: 5px;
      display: flex;
      min-width: 100px;
      text-decoration: none;

      p {
        
        margin: 0;
        padding-left: 15px;
      }
    }
  }
`;

const LastListenedImage = styled.img`
  height: 48px;
  width: 48px;
`;

export default function LastListened() {
  return (
    <>
      <h2>Good Afternoon</h2>
      <LastListenedContainer>
        <LastListenedList>
          <li>
            <a href="#">
              <LastListenedImage src={albumCover} alt="" />
              <p>This is Chico Buarque</p>
            </a>
          </li>
          <li>
            <a href="#">
              <LastListenedImage src={albumCover} alt="" />
              <p>This is Oliver Tree</p>
            </a>
          </li>
          <li>
            <a href="#">
              <LastListenedImage src={albumCover} alt="" />
              <p>Pop Mix</p>
            </a>
          </li>
          <li>
            <a href="#">
              <LastListenedImage src={albumCover} alt="" />
              <p>2000s Mix</p>
            </a>
          </li>
          <li>
            <a href="#">
              <LastListenedImage src={albumCover} alt="" />
              <p>Top 50 - Global</p>
            </a>
          </li>
          <li>
            <a href="#">
              <LastListenedImage src={albumCover} alt="" />
              <p>Today`s Top Hits</p>
            </a>
          </li>
        </LastListenedList>
      </LastListenedContainer>
    </>
  );
}
