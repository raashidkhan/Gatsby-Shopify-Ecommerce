import { Link } from "gatsby"
import styled from "styled-components"
import { radius, typeScale, Button, elevation } from "../../utils"

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  //padding: 2.4rem;
  border-radius: ${radius.large};
  //background-color: ${props => props.theme.surface};
  //backdrop-filter: blur(15px);
  //box-shadow: ${elevation[100]};
  border: 1px solid rgba(0, 0, 0, 0.1);
`
export const ProductImage = styled(Link)`
  border-radius: ${radius.large};
  overflow: hidden;
  height: 65%;

  div {
    height: 100%;
  }
`
export const ProjectContent = styled.div`
  padding: 2.4rem;
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
