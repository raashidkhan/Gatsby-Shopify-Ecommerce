import React from "react"
import LogoImg from "../assets/logo.svg"
import styled from "styled-components"
import { Link } from "gatsby"
import { typeScale, neutral, green, Devices } from "../utils"
const Footer = () => {
  return (
    <FooterWrapper>
      <Logo>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 156.091 26.936">
          <g
            id="Group_6"
            data-name="Group 6"
            transform="translate(-1391.67 154.018)"
          >
            <path
              id="Path_3"
              data-name="Path 3"
              d="M-39.812-18.5v1.887a6.572,6.572,0,0,0-5.4-2.4,9.161,9.161,0,0,0-9.1,9.4,9.161,9.161,0,0,0,9.1,9.4,6.572,6.572,0,0,0,5.4-2.405v1.7c0,2.627-1.591,3.959-4.181,3.959A4.228,4.228,0,0,1-48.211.7l-4.736,2.738c1.7,3.034,4.921,4.477,8.769,4.477,4.921,0,9.768-2.627,9.768-8.843V-18.5ZM-44.289-5.328A4.188,4.188,0,0,1-48.766-9.62a4.188,4.188,0,0,1,4.477-4.292A4.188,4.188,0,0,1-39.812-9.62,4.188,4.188,0,0,1-44.289-5.328Zm19.5-9.879V-18.5h-5.55V0h5.55V-8.362c0-3.663,3.256-4.588,5.55-4.218v-6.29A5.557,5.557,0,0,0-24.79-15.207ZM-12.247-7.03H.888A10.755,10.755,0,0,0,1.11-9.25c0-5.587-4-9.768-9.4-9.768A9.485,9.485,0,0,0-18.13-9.25c0,5.513,3.922,9.768,10.249,9.768A9.388,9.388,0,0,0,.185-3.293l-4.44-2.553A4.831,4.831,0,0,1-7.807-4.44C-9.842-4.44-11.544-5.106-12.247-7.03Zm-.111-4.144A3.819,3.819,0,0,1-8.325-14.1,3.809,3.809,0,0,1-4.4-11.174ZM9.028-7.03H22.163a10.755,10.755,0,0,0,.222-2.22c0-5.587-4-9.768-9.4-9.768A9.485,9.485,0,0,0,3.145-9.25C3.145-3.737,7.067.518,13.394.518A9.388,9.388,0,0,0,21.46-3.293L17.02-5.846A4.831,4.831,0,0,1,13.468-4.44C11.433-4.44,9.731-5.106,9.028-7.03Zm-.111-4.144A3.819,3.819,0,0,1,12.95-14.1a3.809,3.809,0,0,1,3.922,2.923Zm27.454-7.844a6.327,6.327,0,0,0-5.291,2.257V-18.5H25.53V0h5.55V-10.1c0-2.627,1.406-3.811,3.441-3.811a3.051,3.051,0,0,1,3.219,3.367V0h5.55V-11.359C43.29-16.354,40.108-19.018,36.371-19.018ZM50.246.518A3.537,3.537,0,0,0,53.761-3a3.537,3.537,0,0,0-3.515-3.515A3.537,3.537,0,0,0,46.731-3,3.537,3.537,0,0,0,50.246.518Z"
              transform="translate(1494 -135)"
              fill="#9ce84b"
            />
            <path
              id="Path_4"
              data-name="Path 4"
              d="M-6.826-18.5v1.887a6.572,6.572,0,0,0-5.4-2.4,9.161,9.161,0,0,0-9.1,9.4,9.161,9.161,0,0,0,9.1,9.4,6.572,6.572,0,0,0,5.4-2.405v1.7c0,2.627-1.591,3.959-4.181,3.959A4.228,4.228,0,0,1-15.226.7l-4.736,2.738c1.7,3.034,4.921,4.477,8.769,4.477,4.921,0,9.768-2.627,9.768-8.843V-18.5ZM-11.3-5.328A4.188,4.188,0,0,1-15.781-9.62,4.188,4.188,0,0,1-11.3-13.912,4.188,4.188,0,0,1-6.826-9.62,4.188,4.188,0,0,1-11.3-5.328ZM11.526.518a9.7,9.7,0,0,0,9.8-9.768,9.7,9.7,0,0,0-9.8-9.768A9.7,9.7,0,0,0,1.721-9.25,9.7,9.7,0,0,0,11.526.518Zm0-5.4A4.149,4.149,0,0,1,7.271-9.25a4.149,4.149,0,0,1,4.255-4.366A4.149,4.149,0,0,1,15.781-9.25,4.149,4.149,0,0,1,11.526-4.884Z"
              transform="translate(1413 -135)"
              fill="#fff"
            />
          </g>
        </svg>
      </Logo>
      <Links>
        <Link to="/shop">Shop</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/policy/privacy-policy">Privacy Policy</Link>
        <Link to="policy/refund-policy">Refund Policy</Link>
        <Link to="policy/terms-of-service">Terms of Services</Link>
      </Links>
      <Social>
        <a href="#0">
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>Facebook icon</title>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a href="#0">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Instagram icon</title>
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
          </svg>
        </a>
        <a href="#0">
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>Twitter icon</title>
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
      </Social>
      <Copy>All rights reserved © {new Date().getFullYear()} GoGreen</Copy>
    </FooterWrapper>
  )
}

export default Footer
const FooterWrapper = styled.footer`
  padding: 5vw;
  width: 100vw;
  padding-bottom: 3.2rem;
  background-color: ${green[500]};
  color: ${neutral[300]};
  @media ${Devices.mobile} {
    padding-top: 10vw;
  }
`
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vw;

  svg {
    height: 6rem;
    @media ${Devices.mobile} {
      padding-top: 3vw;
    }
  }
`
const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 3.2rem;
  @media ${Devices.mobile} {
    flex-direction: column;
  }

  &::after {
    content: "";
    position: absolute;
    top: -1.6rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.3);
    @media ${Devices.mobile} {
      display: none;
    }
  }
  &::before {
    content: "";
    position: absolute;
    bottom: -1.6rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.3);
    @media ${Devices.mobile} {
      display: none;
    }
  }

  a {
    position: relative;
    display: block;
    @media ${Devices.mobile} {
      margin-bottom: 1.6rem;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -0.3rem;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${neutral[300]};
      transform: scaleX(0);
      transition: 200ms ease;
    }
    &:hover {
      color: ${neutral[100]};
      &::after {
        transform: scaleX(1);
      }
    }
  }
`
const Social = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  margin: 0 auto;
  margin-bottom: 3.2rem;
  @media ${Devices.mobile} {
    width: 50%;
  }
  a {
    width: 3rem;
    height: 3rem;

    svg {
      fill: ${neutral[100]};
    }
  }
`
const Copy = styled.p`
  font-size: ${typeScale.helperText};
  text-align: center;
`
