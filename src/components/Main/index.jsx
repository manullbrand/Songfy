import styled from "styled-components";
import { CSSVariables } from "../CSSVariables";
import albumCoverBig from "../../assets/images/album-cover-big.png";

const TitleSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  a {
    cursor: pointer;
    text-decoration: none;
  }
`;

const ListSection = styled.ul`
  display: flex;
  justify-content: space-between;
   padding: 0;
  li {
    background-color: ${CSSVariables.colors.terciary};
    border-radius: 5px;
    padding: 20px 10px;
  }
`;

const MainAlbumCoverImage = styled.img`
  height: 163px;
  width: 163px;
`;

export default function Main() {
  return (
    <>
      <section>
        <TitleSection>
          <h2>
            <a href="#">Episodes for you</a>
          </h2>
          <p>
            <a href="#">Show all</a>
          </p>
        </TitleSection>
        <ListSection>
          <li>
            <MainAlbumCoverImage src={albumCoverBig} alt="" />
            <h3>Rain Sounds</h3>
            <p>Date and minutes</p>
          </li>
          <li>
            <MainAlbumCoverImage src={albumCoverBig} alt="" />
            <h3>ENCANTADO</h3>
            <p>Date and minutes</p>
          </li>
          <li>
            <MainAlbumCoverImage src={albumCoverBig} alt="" />
            <h3>Prelúdio 1</h3>
            <p>Date and minutes</p>
          </li>
          <li>
            <MainAlbumCoverImage src={albumCoverBig} alt="" />
            <h3>The woman</h3>
            <p>Date and minutes</p>
          </li>
          <li>
            <MainAlbumCoverImage src={albumCoverBig} alt="" />
            <h3>The woman</h3>
            <p>Date and minutes</p>
          </li>
        </ListSection>
      </section>

      <section>
        <TitleSection>
          <h2>
            <a href="#">Jump back in</a>
          </h2>
          <p>
            <a href="#">Show all</a>
          </p>
        </TitleSection>
        <ListSection>
          <li>
            <MainAlbumCoverImage src={albumCoverBig} alt="" />
            <h3>Rain Sounds</h3>
            <p>Date and minutes</p>
          </li>
          <li>
            <MainAlbumCoverImage src={albumCoverBig} alt="" />
            <h3>ENCANTADO</h3>
            <p>Date and minutes</p>
          </li>
          <li>
            <MainAlbumCoverImage src={albumCoverBig} alt="" />
            <h3>Prelúdio 1</h3>
            <p>Date and minutes</p>
          </li>
          <li>
            <MainAlbumCoverImage src={albumCoverBig} alt="" />
            <h3>The woman</h3>
            <p>Date and minutes</p>
          </li>
        </ListSection>
      </section>

      <section>
        <TitleSection>
          <h2>
            <a href="#">Made for you</a>{" "}
          </h2>
          <p>
            <a href="#">Show all</a>
          </p>
        </TitleSection>
        <ListSection>
          <li>
            <MainAlbumCoverImage src={albumCoverBig} alt="" />
            <h3>Rain Sounds</h3>
            <p>Date and minutes</p>
          </li>
          <li>
            <MainAlbumCoverImage src={albumCoverBig} alt="" />
            <h3>ENCANTADO</h3>
            <p>Date and minutes</p>
          </li>
          <li>
            <MainAlbumCoverImage src={albumCoverBig} alt="" />
            <h3>Prelúdio 1</h3>
            <p>Date and minutes</p>
          </li>
          <li>
            <MainAlbumCoverImage src={albumCoverBig} alt="" />
            <h3>The woman</h3>
            <p>Date and minutes</p>
          </li>
        </ListSection>
      </section>
    </>
  );
}
