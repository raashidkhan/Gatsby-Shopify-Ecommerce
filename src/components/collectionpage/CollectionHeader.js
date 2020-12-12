import Image from "gatsby-image"
import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { Devices, radius, typeScale } from "../../utils"

const CollectionHeader = ({ title, desc, image }) => {
  const collectionDescription = parse(desc)
  return (
    <Collection>
      <CollectionImage>
        <Image fluid={image} />
      </CollectionImage>
      <CollectionDesc>
        <h1>{title}</h1>
        <article>{collectionDescription}</article>
      </CollectionDesc>
    </Collection>
  )
}

export default CollectionHeader

const Collection = styled.header`
  width: 100vw;
  padding: 5vw;

  @media ${Devices.tab} {
    padding-top: 10vw;
  }
`
const CollectionImage = styled.div`
  width: 100%;
  overflow: hidden;
  height: 65vh;
  margin-bottom: 5vw;
  border-radius: ${radius.large};
  @media ${Devices.tab} {
    height: auto;
  }
  & > div {
    width: 100%;
    height: 100%;
  }
`
const CollectionDesc = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media ${Devices.tab} {
    flex-direction: column;
  }

  & > h1 {
    width: 30%;
    font-size: ${typeScale.header2};
    font-weight: 400;
    @media ${Devices.tab} {
      width: 100%;
      margin-bottom: 2.4rem;
    }
  }

  & > article {
    width: 65ch;
    @media ${Devices.tab} {
      width: 100%;
    }

    p {
      margin-bottom: 1.6rem;
    }
  }
`
