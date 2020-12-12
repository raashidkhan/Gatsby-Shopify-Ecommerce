import React, { useState } from "react"
import { Link } from "gatsby"
import AccountLayout from "../../components/accounts/AccountLayout"
import Layout from "../../components/layout"
import LoginForm from "../../components/accounts/LoginForm"
import ForgotPasswordForm from "../../components/accounts/ForgetPasswordForm"
import styled from "styled-components"
import { PrimarySolidButton, Devices } from "../../utils"
import LogInImage from "../../assets/login-image.jpg"
const Login = () => {
  const [passwordForgot, setPasswordForgot] = useState(false)
  const [messageInfo, setMessageInfo] = useState("")
  return (
    <Layout>
      <AccountLayout log={false}>
        <LoginPageWrapper>
          <LogInImageWrapper>
            <h3>don't have an account?</h3>
            <Link to="/account/register">
              <PrimarySolidButton>Sign up now!</PrimarySolidButton>
            </Link>
          </LogInImageWrapper>

          <Form>
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
          </Form>
        </LoginPageWrapper>
      </AccountLayout>
    </Layout>
  )
}

export default Login

const LoginPageWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: stretch;
  position: relative;
  @media ${Devices.tab} {
    flex-direction: column;
  }
`

const LogInImageWrapper = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${LogInImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${Devices.tab} {
    width: 100%;
    max-height: 45%;
  }

  h3 {
    font-weight: 400;
    margin-bottom: 2.4rem;
  }
`
const Form = styled.div`
  width: 55%;
  padding: 5vw;
  @media ${Devices.tab} {
    width: 100%;
  }
`
