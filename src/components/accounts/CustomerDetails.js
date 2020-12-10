import React from "react"
import styled from "styled-components"
import { neutral, typeScale } from "../../utils"
const CustomerDetails = ({ firstName, lastName, address, phone, email }) => {
  console.log(phone, email)
  return (
    <Customer>
      <h3>Account Details</h3>
      <h4>
        {firstName} {lastName}
      </h4>
      {phone === null ? (
        ""
      ) : (
        <p>
          <span>Phone</span> {phone}
        </p>
      )}
      {email === null ? (
        ""
      ) : (
        <p>
          <span>Email</span> {email}
        </p>
      )}
      {address === null ? (
        ""
      ) : (
        <p>
          <span>Default Address</span>
          <address>
            {address.address1} {address.city} {address.country} {address.zip}
          </address>
        </p>
      )}
    </Customer>
  )
}

export default CustomerDetails

const Customer = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > h3 {
    font-size: ${typeScale.paragraph};
    //font-weight: 400;
    margin-bottom: 0.8rem;
    color: ${neutral[600]};
  }
  & > h4 {
    font-size: ${typeScale.header4};
    font-weight: 400;
    margin-bottom: 1.4rem;
  }
  p {
    margin-bottom: 1.2rem;

    & > span {
      display: block;
      text-transform: uppercase;
      font-weight: 700;
      font-size: ${typeScale.helperText};
      margin-bottom: 0.8rem;
      color: ${props => props.theme.primaryColor};
    }
  }
`
