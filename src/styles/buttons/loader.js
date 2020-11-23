import React from "react"
import styled, { keyframes } from "styled-components"
//import "./loader.css"
const Loader = () => {
  return (
    <LoaderWrapper>
      <BounceBallOne></BounceBallOne>
      <BounceBallTwo></BounceBallTwo>
      <BounceBallThree></BounceBallThree>
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
  animation: ${rotate} 2s linear infinite normal;
  height: 0.75rem;
  position: relative;
  width: 0.75rem;
`

const BounceBall = styled.div`
  border-radius: 50%;
  height: 100%;
  position: absolute;
  width: 100%;
  background-color: #fff;
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
