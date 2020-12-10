import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { radius, SecondarySolidButton, TextLink, typeScale } from "../../utils"
import styled from "styled-components"
import AddToCartButton from "../buttons/AddToCartButton"

const ShopHeader = ({ image, title, handle, desc, id }) => {
  const shortDesc = desc.split(" ").slice(0, 40).join(" ")
  console.log(shortDesc)
  return (
    <>
      <Header>
        <HeaderTitle>
          <h1>{title}</h1>
          <p>
            {shortDesc}...&nbsp;
            <Read>
              <TextLink to={`/product/${handle}`}>Read More</TextLink>
            </Read>
          </p>
          <SecondarySolidButton width="100">
            <AddToCartButton id={id} quantity={1} />
          </SecondarySolidButton>
        </HeaderTitle>
        <HeaderImage>
          <Image fluid={image} />
        </HeaderImage>
      </Header>
    </>
  )
}

export default ShopHeader

const Header = styled.header`
  width: 100vw;
  height: 100vh;
  padding: 5vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const HeaderTitle = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: ${typeScale.header1};
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 3.2rem;
  }
  & > p {
    margin-bottom: 2.5vw;
  }
  & > a {
    align-self: flex-start;
  }
`
const Read = styled.span`
  display: inline-block;
  color: ${props => props.theme.primaryColor};
  text-decoration: underline;
`
const HeaderImage = styled.div`
  height: 100%;
  width: 40%;
  border-radius: ${radius.large};
  overflow: hidden;
  & > div {
    width: 100%;
    height: 100%;
  }
`
