import React, { useState } from "react"
import AccountLayout from "../../components/accounts/AccountLayout"
import Layout from "../../components/layout"
import LoginForm from "../../components/accounts/LoginForm"
import ForgotPasswordForm from "../../components/accounts/ForgetPasswordForm"
import styled from "styled-components"
import { radius } from "../../utils"
const Login = () => {
  const [passwordForgot, setPasswordForgot] = useState(false)
  const [messageInfo, setMessageInfo] = useState("")
  return (
    <Layout>
      <AccountLayout log={false}>
        <LoginPageWrapper>
          <div>
            {passwordForgot ? (
              <ForgotPasswordForm
                setMessageInfo={setMessageInfo}
                setPasswordForgot={setPasswordForgot}
              />
            ) : (
              <LoginForm
                messageInfo={messageInfo}
                setPasswordForgot={setPasswordForgot}
              />
            )}
          </div>
        </LoginPageWrapper>
      </AccountLayout>
    </Layout>
  )
}

export default Login

const LoginPageWrapper = styled.section`
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1526796836-4da91257199a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: ${radius.large};
  //z-index: -5;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(15px) hue-rotate(30deg) saturate(120%);
  }
  div {
    position: relative;
    z-index: 10;
  }
`
