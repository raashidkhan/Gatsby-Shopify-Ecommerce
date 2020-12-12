import React, { useState } from "react"
import styled from "styled-components"
import { neutral, typeScale, SmallButton } from "../../utils"
import EditAddressForm from "../accounts/EditAddressForm"
import CustomerUpdateForm from "./CustomerUpdateForm"

const CustomerDetails = ({ firstName, lastName, address, phone, email }) => {
  const [showEditAddressForm, setShowEditAddressForm] = useState(false)
  const [showEditCustomerForm, setShowEditCustomerForm] = useState(false)
  return (
    <Customer>
      <h3>
        <span>Account Details</span>
        <SmallButton
          onClick={() => {
            setShowEditCustomerForm(true)
          }}
        >
          Edit
        </SmallButton>
        {showEditCustomerForm && (
          <CustomerUpdateForm showForm={setShowEditCustomerForm} />
        )}
      </h3>
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
        <div>
          <DefaultAddressHeading>
            <span> Default Address</span>

            <SmallButton
              onClick={() => {
                setShowEditAddressForm(true)
              }}
            >
              Edit
            </SmallButton>
          </DefaultAddressHeading>
          <DefaultAddress>
            <span>
              <strong>Name: &nbsp;</strong>
              {address.firstName || ""}&nbsp;
              {address.lastName || ""}
            </span>
            <span>
              {" "}
              <strong>Phone: &nbsp;</strong>
              {address.phone || ""}
            </span>
            <span>
              <strong>Company: &nbsp;</strong>
              {address.company || ""}
            </span>
            <span>
              <strong>Apartment: &nbsp;</strong>
              {address.address2 || ""}
            </span>
            <span>
              <strong>Address: &nbsp;</strong>
              {address.address1 || ""}
            </span>
            <span>
              <strong>City: &nbsp;</strong>
              {address.city || ""}
            </span>
            <span>
              <strong>Country: &nbsp;</strong>
              {address.country || ""}
            </span>
            <span>
              <strong>Zip: &nbsp;</strong>
              {address.zip || ""}
            </span>
          </DefaultAddress>

          {showEditAddressForm && (
            <EditAddressForm
              addressToEdit={address}
              defaultAddress={true}
              editAddressFormToggle={setShowEditAddressForm}
            />
          )}
        </div>
      )}
    </Customer>
  )
}

export default CustomerDetails

const Customer = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  & > h3 {
    font-size: ${typeScale.header5};
    font-weight: 400;
    margin-bottom: 0.8rem;
    color: ${neutral[600]};
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
  }
  & > h4 {
    font-size: ${typeScale.header4};
    font-weight: 400;
    margin-bottom: 1.4rem;
  }

  p {
    margin-bottom: 2.4rem;

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
const DefaultAddress = styled.address`
  margin-bottom: 2.4rem;

  & > span {
    display: block;
  }
`
const DefaultAddressHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  span {
    display: block;
    text-transform: uppercase;
    font-weight: 700;
    font-size: ${typeScale.helperText};
    color: ${props => props.theme.primaryColor};
  }
`
