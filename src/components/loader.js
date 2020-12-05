import React from "react"
import styled, { keyframes } from "styled-components"

const Loader = ({ color }) => {
  return (
    <LoaderWrapper>
      <BounceBallOne color={color}></BounceBallOne>
      <BounceBallTwo color={color}></BounceBallTwo>
      <BounceBallThree color={color}></BounceBallThree>
    </LoaderWrapper>
  )
}

export default Loader

const move1 = keyframes`
0%, 5% {
		transform: translate(0, 0);
	}
	to {
		transform: translate(0, -100%);
	}
`

const move2 = keyframes`
	0%, 5% {
		transform: translate(0, 0);
	}
	to {
		transform: translate(100%, 100%);
	}
`

const move3 = keyframes`
	0%, 15% {
		transform: translate(0);
	}
	to {
		transform: translate(-100%, 100%);
	}
`
const rotate = keyframes`
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
`

const LoaderWrapper = styled.div`
  animation: ${rotate} 1s linear infinite normal;
  height: 0.65rem;
  position: relative;
  width: 0.65rem;
`

const BounceBall = styled.div`
  border-radius: 50%;
  height: 100%;
  position: absolute;
  width: 100%;
  background: ${props => props.color};
`

const BounceBallOne = styled(BounceBall)`
  animation: ${move1} 1s ease-in-out infinite alternate;
`
const BounceBallTwo = styled(BounceBall)`
  animation: ${move2} 1s ease-in-out infinite alternate;
`
const BounceBallThree = styled(BounceBall)`
  animation: ${move3} 1s ease-in-out infinite alternate;
`
