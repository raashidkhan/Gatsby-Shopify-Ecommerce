import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { SmallButton } from "../utils"
const Slide = ({ children }) => {
  const ref = useRef()

  const [move, setMove] = useState(0)
  const [width, setWidth] = useState(0)
  const [totalWidth, setTotalWidth] = useState(0)

  useEffect(() => {
    let childArray = []
    const slide = ref
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const cw = slide.current.childNodes[0].clientWidth
    slide.current.childNodes.forEach(item => {
      childArray.push(item.clientWidth)
    })
    const combinedWidth = childArray.reduce(reducer)
    setTotalWidth(combinedWidth - cw)
    setWidth(cw)
  }, [move])
  const handleMoveLeft = e => {
    if (move > totalWidth) {
      return
    } else {
      setMove(move + width + 24)
    }
  }
  const handleMoveRight = () => {
    if (move < width) {
      return
    } else {
      setMove(move - width - 24)
    }
  }
  return (
    <SlideWrapper>
      <ButtonWrapper>
        <Button onClick={handleMoveLeft}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.413 42.828">
            <path
              id="Path_31"
              data-name="Path 31"
              d="M9531.82,4070.5l20,20-20,20"
              transform="translate(9552.819 4111.91) rotate(180)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <Button onClick={handleMoveRight}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.413 42.828">
            <path
              id="Path_30"
              data-name="Path 30"
              d="M9531.82,4070.5l20,20-20,20"
              transform="translate(-9530.406 -4069.082)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </ButtonWrapper>

      <SlideContainer ref={ref} toMove={move}>
        {children}
      </SlideContainer>
    </SlideWrapper>
  )
}

export default Slide

const SlideWrapper = styled.div`
  width: 100%;
  //overflow: hidden;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2.4rem;
`
const Button = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.6rem;
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.4);
  margin-left: 2.4rem;
  svg {
    height: 40%;

    path {
      stroke: ${props => props.theme.textColor};
      stroke-width: 7;
    }
  }
`

const SlideContainer = styled.div`
  display: grid;
  grid-template-columns: 42%;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  grid-auto-columns: 42%;
  gap: 2.5vw;
  transform: translateX(-${props => props.toMove}px);
  transition: all 300ms ease;
`
