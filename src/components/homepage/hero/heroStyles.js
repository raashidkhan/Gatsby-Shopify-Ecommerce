import styled from "styled-components"
import { neutral, typeScale, radius } from "../../../utils"
export const HeroHeader = styled.header`
  width: 100%;
  height: 60vh;
  position: relative;
  margin-bottom: 5vw;
`
export const HeroHeaderImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${radius.large};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const HeroHeaderTitle = styled.h1`
  font-size: ${typeScale.header3};
  position: absolute;
  width: 40%;
  top: 50%;
  left: 5vw;
  transform: translateY(-50%);
  z-index: 5;

  a {
    width: 50%;
  }
`
