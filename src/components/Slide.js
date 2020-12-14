import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { SmallButton, Devices, typeScale } from "../utils"
const Slide = ({ children, slideWidth, slideHeading, viewAll }) => {
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
      setMove(move + width + 32)
    }
  }
  const handleMoveRight = () => {
    if (move < width) {
      return
    } else {
      setMove(move - width - 32)
    }
  }

  return (
    <SlideWrapper>
      <SlideHead>
        <SlideHeading>{slideHeading || ""}</SlideHeading>
        <ButtonWrapper>
          {viewAll && <Link to={viewAll}> View All </Link>}
          <Button
            onClick={handleMoveRight}
            isActive={move === 0 ? true : false}
          >
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
          <Button
            onClick={handleMoveLeft}
            isActive={move > totalWidth ? true : false}
          >
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
      </SlideHead>

      <SlideContainer ref={ref} toMove={move} slideWidth={slideWidth}>
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
const SlideHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.4rem;
`

const SlideHeading = styled.div`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: ${typeScale.header5};
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${Devices.tab} {
    display: none;
  }
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
  transition: 100ms ease;
  cursor: ${props => (props.isActive ? "not-allowed" : "pointer")};
  svg {
    height: 40%;

    path {
      stroke: ${props =>
        props.isActive ? "hsl(218, 11%, 65%)" : "hsl(217, 19%, 27%)"};
      stroke-width: 7;
    }
  }

  &:hover {
    transform: translateY(-2px);
  }
  &:focus {
    transform: translateY(2px);
    outline: none;
  }
  &:active {
    transform: translateY(0px);
  }
`

const SlideContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.slideWidth || 50}%;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  grid-auto-columns: ${props => props.slideWidth || 50}%;
  gap: 3.2rem;

  transform: translateX(-${props => props.toMove}px);
  transition: all 300ms ease-in-out;

  @media ${Devices.tab} {
    grid-template-columns: 60%;
    grid-auto-columns: 60%;
    overflow-x: auto;
  }
  @media ${Devices.tab} {
    grid-template-columns: 90%;
    grid-auto-columns: 90%;
  }
`
