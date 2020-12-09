import { Link } from "gatsby"
import styled from "styled-components"
import { radius, typeScale, Button, elevation } from "../../utils"

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  border-radius: ${radius.large};
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
  //box-shadow: ${elevation[100]};
`
export const ProductImage = styled(Link)`
  border-radius: ${radius.large};
  overflow: hidden;
  margin-bottom: 2.4rem;
  height: 60%;

  div {
    height: 100%;
  }
`
export const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2.4rem;
`
export const ProductName = styled.h2`
  font-size: ${typeScale.header5};
  color: ${props => props.theme.textColor};
  margin-bottom: 1.2rem;
`
export const ProductPrice = styled.h3`
  font-size: ${typeScale.paragraph};
  color: ${props => props.theme.primaryColor};
`
