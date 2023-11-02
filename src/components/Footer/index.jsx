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
  grid-template-columns: 1fr 1fr 1fr;
  min-width: 1230px;
`;

const PlayingNow = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 10px;

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

      <div>
        <ButtonFooter>
          <BiShuffle />
        </ButtonFooter>
        <ButtonFooter>
          <AiOutlineStepBackward />
        </ButtonFooter>
        <ButtonFooter>
          <AiFillPlayCircle />
        </ButtonFooter>
        <ButtonFooter>
          <AiOutlineStepForward />
        </ButtonFooter>
        <ButtonFooter>
          <MdReplay />
        </ButtonFooter>
        <div>
          <label className="form-label"></label>
          <input type="range" className="form-range" id="customRange1"></input>
        </div>
      </div>

      <div>
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
          <HiOutlineSpeakerWave />
          <label className="form-label"></label>
          <input type="range" className="form-range" id="customRange1"></input>
        </ButtonFooter>
        <ButtonFooter>
          <PiPictureInPictureFill />
        </ButtonFooter>
        <ButtonFooter>
          <AiOutlineExpandAlt />
        </ButtonFooter>
      </div>
    </FooterContainer>
  );
}
