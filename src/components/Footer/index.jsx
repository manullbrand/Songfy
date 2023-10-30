import styled from "styled-components";
import { CSSVariables } from "../CSSVariables";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100vw;
 
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <img src="" alt="Album cover" />
        <h3>Music name</h3>
        <p>Artist</p>
        <icon>Favoritar</icon>
      </div>

      <div>
        <button>mixed sequence</button>
        <button>back</button>
        <button>PLAY</button>
        <button>forward</button>
        <button>Rewind</button>
        <p>scroll with music playing</p>
      </div>

      <div>
        <i>Now playing view</i>
        <i>Lyrics</i>
        <i>Queue</i>
        <i>Connect to a device</i>
        <i>Mute</i>
        <i>Expand</i>
      </div>
    </FooterContainer>
  );
}
