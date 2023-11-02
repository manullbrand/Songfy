import styled from "styled-components";
import { CSSVariables } from "../CSSVariables";
import albumCoverBig from "../../assets/images/album-cover-big.png";

const TitleSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  h2 {
    margin: 35px 0 25px 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ListSection = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

const MainAlbumCoverImage = styled.img`
  height: 163px;
  width: 163px;
`;

const MainMusicCards = styled.a`
  background-color: ${CSSVariables.colors.terciary};
  border-radius: 5px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 20px 10px;
  h3 {
    font-size: 1rem;
    font-weight: 700;
  }
  p {
    color: ${CSSVariables.colors.inactiveText};
    font-size: 10px;
  }
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
            <MainMusicCards href="#">
              <MainAlbumCoverImage src={albumCoverBig} alt="" />
              <h3>Rain Sounds</h3>
              <p>Aug 2022 · 482 min</p>
            </MainMusicCards>
          </li>
          <li>
            <MainMusicCards href="#">
              <MainAlbumCoverImage src={albumCoverBig} alt="" />
              <h3>ENCANTADO</h3>
              <p>30 Oct · 38 min</p>
            </MainMusicCards>
          </li>
          <li>
            <MainMusicCards href="#">
              <MainAlbumCoverImage src={albumCoverBig} alt="" />
              <h3>Prelúdio 1</h3>
              <p>2 Nov · 17 min</p>
            </MainMusicCards>
          </li>
          <li>
            <MainMusicCards href="#">
              <MainAlbumCoverImage src={albumCoverBig} alt="" />
              <h3>The woman</h3>
              <p>30 Oct · 38 min</p>
            </MainMusicCards>
          </li>
          <li>
            <MainMusicCards href="#">
              <MainAlbumCoverImage src={albumCoverBig} alt="" />
              <h3>The woman</h3>
              <p>31 Oct · 63 min</p>
            </MainMusicCards>
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
                 <MainMusicCards href="#">
              <MainAlbumCoverImage src={albumCoverBig} alt="" />
              <h3>Rain Sounds</h3>
              <p>Aug 2022 · 482 min</p>
            </MainMusicCards>
          </li>
          <li>
            <MainMusicCards href="#">
              <MainAlbumCoverImage src={albumCoverBig} alt="" />
              <h3>ENCANTADO</h3>
              <p>30 Oct · 38 min</p>
            </MainMusicCards>
          </li>
          <li>
            <MainMusicCards href="#">
              <MainAlbumCoverImage src={albumCoverBig} alt="" />
              <h3>Prelúdio 1</h3>
              <p>2 Nov · 17 min</p>
            </MainMusicCards>
          </li>
          <li>
            <MainMusicCards href="#">
              <MainAlbumCoverImage src={albumCoverBig} alt="" />
              <h3>The woman</h3>
              <p>30 Oct · 38 min</p>
            </MainMusicCards>
          </li>
          <li>
            <MainMusicCards href="#">
              <MainAlbumCoverImage src={albumCoverBig} alt="" />
              <h3>The woman</h3>
              <p>31 Oct · 63 min</p>
            </MainMusicCards>
          </li>
        </ListSection>
      </section>
    </>
  );
}
