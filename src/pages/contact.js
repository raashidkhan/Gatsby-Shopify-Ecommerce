import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Slide from "../components/Slide"

const Contact = () => {
  return (
    <Layout>
      <Slide />
      <Slide />
    </Layout>
  )
}

export default Contact

const SlideWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
  margin-top: 20vh;
  padding-left: 5vw;
`

const SlideContainer = styled.div`
  display: grid;
  grid-template-columns: 40%;
  grid-auto-flow: column;
  grid-auto-columns: 40%;
  gap: 10rem;
  transform: translateX(-${props => props.toMove}px);
  transition: all 300ms ease;
`

const Slides = styled.div`
  height: 40rem;
  background: orangered;
`
