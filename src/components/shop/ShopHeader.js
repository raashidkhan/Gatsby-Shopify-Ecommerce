import React from "react"
import Image from "gatsby-image"
import {
  Devices,
  radius,
  SecondarySolidButton,
  TextLink,
  typeScale,
} from "../../utils"
import styled from "styled-components"
import AddToCartButton from "../buttons/AddToCartButton"

const ShopHeader = ({ image, title, handle, desc, id }) => {
  const shortDesc = desc.split(" ").slice(0, 40).join(" ")
  return (
    <>
      <Header>
        <HeaderTitle>
          <h1>{title}</h1>
          <p>{shortDesc}&nbsp;</p>
          <Read>
            <TextLink to={`/product/${handle}`}>View Product</TextLink>
          </Read>
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
  min-height: 80vh;
  padding: 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${Devices.tab} {
    padding-top: 7.5rem;
  }
  @media ${Devices.mobile} {
    flex-direction: column-reverse;
  }
`

const HeaderTitle = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media ${Devices.mobile} {
    width: 100%;
  }
  & > h1 {
    font-size: ${typeScale.header1};
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 2.4rem;
    @media ${Devices.tab} {
      font-size: ${typeScale.header3};
    }
  }
  & > p {
    margin-bottom: 1.2rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow-y: hidden;
  }
  & > a {
    align-self: flex-start;
  }
`
const Read = styled.span`
  display: block;
  color: ${props => props.theme.primaryColor};
  text-decoration: underline;
  margin-bottom: 2.4rem;
`
const HeaderImage = styled.div`
  height: 100%;
  width: 40%;
  border-radius: ${radius.large};
  overflow: hidden;

  @media ${Devices.tab} {
    width: 50%;
  }
  @media ${Devices.mobile} {
    width: 100%;
    margin-bottom: 2.4rem;
  }
  & > div {
    width: 100%;
    height: 100%;
  }
`
