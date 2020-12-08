import styled from "styled-components"
import { typeScale, green, orange, radius, neutral } from "../../../utils"
export const NewArrivalWrapper = styled.section`
  width: 100%;
  margin-bottom: 10vw;
  padding: 5vw;
  //background: linear-gradient(67deg, ${orange[100]}, ${green[100]});
  background-color: ${props => props.theme.levelOne};
  border-radius: ${radius.large};
  overflow: hidden;
`
export const HeadingWrapper = styled.div`
  padding: 2.4rem;
  border-radius: ${radius.large};
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
  margin-bottom: 2.5vw;
`
export const NewArrivalHeading = styled.h2`
  font-size: ${typeScale.header4};
  text-transform: uppercase;
  letter-spacing: 8px;
  margin-bottom: 1.4rem;
  text-align: center;
  font-weight: 400;
`
export const NewArrivalSubHeading = styled.blockquote`
  font-size: ${typeScale.paragraph};
  color: ${neutral[600]};
  text-align: center;
`
export const NewArrivalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 40rem;
  grid-auto-rows: 40rem;
  gap: 2.5vw;
  /* grid-template-areas:
    "product-1 product-1 product-2 product-3"
    "product-4 product-5 product-6 all-product"; */
  /* 
  & > :nth-child(1) {
    grid-area: product-1;
  }
  & > :nth-child(2) {
    grid-area: product-2;
  }
  & > :nth-child(3) {
    grid-area: product-3;
  }
  & > :nth-child(4) {
    grid-area: product-4;
  }
  & > :nth-child(5) {
    grid-area: product-5;
  }
  & > :nth-child(6) {
    grid-area: product-6;
  }
  & > :nth-child(7) {
    grid-area: all-product;
  } */
`

export const AllProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: stretch;
  align-items: center;
  //padding: 2.4rem;

  a {
    display: block;
    width: 100%;
    text-align: center;
  }
`
