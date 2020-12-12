import React, { useState } from "react"
import styled from "styled-components"
import { radius, SmallButton, typeScale } from "../../utils"
import DeleteAddress from "../accounts/DeleteAddress"
import EditAddress from "../accounts/EditAddressForm"
const SavedAddress = ({ addresses, addressFormToggle }) => {
  const [showEditAddressForm, setShowEditAddressForm] = useState(false)
  return (
    <>
      <AddressHeading>Saved Addresses</AddressHeading>
      <AddressWrapper>
        {addresses.map(address => {
          return (
            <AddressCard
              key={`${address.node.name}${address.node.address1}${address.node.city}${address.node.country}${address.node.zip}`}
            >
              <AddressField>
                <span>
                  <strong>Name: &nbsp;</strong>
                  <span>
                    {address.node.firstName || "-"}&nbsp;
                    {address.node.lastName || "-"}
                  </span>
                </span>
                <span>
                  <strong>Phone: &nbsp;</strong>
                  <span>{address.node.phone || "-"}</span>
                </span>
                <span>
                  <strong>Company: &nbsp;</strong>
                  <span>{address.node.company || "-"}</span>
                </span>
                <span>
                  <strong>Apartment: &nbsp;</strong>
                  <span>{address.node.address2 || "-"}</span>
                </span>
                <span>
                  <strong>Address: &nbsp;</strong>
                  <span>{address.node.address1 || "-"}</span>
                </span>
                <span>
                  <strong>City: &nbsp;</strong>
                  <span>{address.node.city || "-"}</span>
                </span>
                <span>
                  <strong>Country: &nbsp;</strong>
                  <span>{address.node.country || "-"}</span>
                </span>
                <span>
                  <strong>Zip: &nbsp;</strong>
                  <span>{address.node.zip || "-"}</span>
                </span>
              </AddressField>

              <AddressButtons>
                <DeleteAddress id={address.node.id} />
                <SmallButton
                  onClick={() => {
                    setShowEditAddressForm(true)
                  }}
                >
                  Edit
                </SmallButton>
              </AddressButtons>

              {showEditAddressForm && (
                <EditAddress
                  addressToEdit={address}
                  defaultAddress={false}
                  editAddressFormToggle={setShowEditAddressForm}
                />
              )}
            </AddressCard>
          )
        })}
        <Add
          aria-label="Add Address"
          onClick={() => {
            addressFormToggle(true)
          }}
        >
          <span></span>
          <span></span>
        </Add>
      </AddressWrapper>
    </>
  )
}

export default SavedAddress

const AddressHeading = styled.h2`
  font-weight: 400;
  font-size: ${typeScale.header4};
  margin-bottom: 2.4rem;
`
const AddressWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  gap: 2.4rem;
`

const AddressCard = styled.address`
  padding: 2.4rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.surface};
  border-radius: ${radius.medium};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const AddressField = styled.div`
  span {
    display: block;
    display: flex;
    width: 100%;
    justify-content: space-between;

    strong {
      width: 35%;
    }
    span {
      width: 60%;
    }
  }
`
const AddressButtons = styled.p`
  display: flex;
  justify-content: space-between;
  margin-top: 1.6rem;
`
const Add = styled.button`
  cursor: pointer;
  padding: 2.4rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.surface};
  border-radius: ${radius.medium};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  span {
    width: 40px;
    height: 3px;
    background: ${props => props.theme.secondaryColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    transform-origin: center;
  }

  & > span:nth-child(1) {
  }
  & > span:nth-child(2) {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`
