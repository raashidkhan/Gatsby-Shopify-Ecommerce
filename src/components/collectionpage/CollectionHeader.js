import Image from "gatsby-image"
import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { radius, typeScale } from "../../utils"

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
`
const CollectionImage = styled.div`
  width: 100%;
  overflow: hidden;
  height: 65vh;
  margin-bottom: 5vw;
  border-radius: ${radius.large};
  & > div {
    width: 100%;
    height: 100%;
  }
`
const CollectionDesc = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & > h1 {
    width: 30%;
    font-size: ${typeScale.header2};
    font-weight: 400;
  }

  & > article {
    width: 65ch;

    p {
      margin-bottom: 1.6rem;
    }
  }
`
