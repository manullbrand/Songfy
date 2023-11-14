import styled from "styled-components";
import { CSSVariables } from "../CSSVariables";
import {
  AiOutlinePlaySquare,
  AiOutlineExpandAlt,
  AiOutlineStepBackward,
  AiOutlineStepForward,
  AiFillPlayCircle,
  AiOutlineHeart,
} from "react-icons/ai";
import { ButtonFooter } from "../Button";
import { CiMicrophoneOn } from "react-icons/ci";
import { HiOutlineQueueList, HiOutlineSpeakerWave } from "react-icons/hi2";
import { LuMonitorSpeaker } from "react-icons/lu";
import { PiPictureInPictureFill } from "react-icons/pi";
import { BiShuffle } from "react-icons/bi";
import albumCoverFooter from "../../assets/images/album-cover-footer.png";
import { MdReplay } from "react-icons/md";

const FooterContainer = styled.footer`
  background-color: ${CSSVariables.colors.background};
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  min-width: 1230px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const PlayingNow = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;

  img {
    height: 56px;
    width: 56px;
  }

  a {
    row-gap: 2px;
    margin-left: 15px;

    h3 {
      font-size: 12px;
    }

    p {
      color: ${CSSVariables.colors.inactiveText};
      font-size: 10px;
    }
  }
`;

const PlayingControler = styled.div`
  padding-bottom: 10px;

  div {
    align-items: center;
    flex-direction: row;
    display: flex;
    justify-content: center;
    width: 100%;

    .form-range {
      box-sizing: border-box;
      cursor: pointer;
      height: 0.3rem;
      margin: 0 10px;
      width: 100%;
    }
  }

  .play__button {
    color: ${CSSVariables.colors.activeText};
    font-size: 40px;
  }

  p {
    color: ${CSSVariables.colors.inactiveText};
    font-size: 11px;
  }
`;

const FooterExtras = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;

  div {
    align-items: center;
    display: flex;

    label {
      padding-left: 5px;
    }

    input {
      height: 0.3rem;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <PlayingNow>
        <img src={albumCoverFooter} alt="Album cover" />
        <a href="#">
          <h3>Music name</h3>
          <p>Artist</p>
        </a>
        <ButtonFooter>
          <AiOutlineHeart />
        </ButtonFooter>
      </PlayingNow>

      <PlayingControler>
        <div>
          <ButtonFooter>
            <BiShuffle />
          </ButtonFooter>
          <ButtonFooter>
            <AiOutlineStepBackward />
          </ButtonFooter>
          <ButtonFooter>
            <AiFillPlayCircle className="play__button" />
          </ButtonFooter>
          <ButtonFooter>
            <AiOutlineStepForward />
          </ButtonFooter>
          <ButtonFooter>
            <MdReplay />
          </ButtonFooter>
        </div>
        <div>
          <p>0:23</p>
          <label className="form-label"></label>
          <input type="range" className="form-range" id="customRange1"></input>
          <p>4:27</p>
        </div>
      </PlayingControler>

      <FooterExtras>
        <ButtonFooter>
          <AiOutlinePlaySquare />
        </ButtonFooter>
        <ButtonFooter>
          <CiMicrophoneOn />
        </ButtonFooter>
        <ButtonFooter>
          <HiOutlineQueueList />
        </ButtonFooter>
        <ButtonFooter>
          <LuMonitorSpeaker />
        </ButtonFooter>
        <ButtonFooter>
          <div>
            <HiOutlineSpeakerWave />
            <label className="form-label"></label>
            <input
              type="range"
              className="form-range"
              id="customRange1"
            ></input>
          </div>
        </ButtonFooter>
        <ButtonFooter>
          <PiPictureInPictureFill />
        </ButtonFooter>
        <ButtonFooter>
          <AiOutlineExpandAlt />
        </ButtonFooter>
      </FooterExtras>
    </FooterContainer>
  );
}
