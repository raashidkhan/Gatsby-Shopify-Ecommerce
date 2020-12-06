import styled from "styled-components"
import { typeScale, neutral, radius } from "../../../utils"
export const ProductCollectionWrapper = styled.section`
  width: 100%;
  margin-bottom: 10vw;
`

export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 5vw;
`
export const CollectionItemDetails = styled.figure`
  width: 100%;
  position: relative;
  border-radius: ${radius.large};
  overflow: hidden;
`
export const CollectionItemImage = styled.div`
  width: 100%;

  div {
    height: 35rem;
  }
`
export const CollectionItemName = styled.figcaption`
  position: absolute;
  width: calc(100% - 2.5vw);
  bottom: 1.25vw;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  font-size: ${typeScale.header4};
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  padding: 1.6rem;
  color: ${neutral[800]};
  font-family: inherit;
  border-radius: ${radius.large};
`
