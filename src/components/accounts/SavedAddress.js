import React from "react"
import styled from "styled-components"
import { radius, typeScale } from "../../utils"
const SavedAddress = ({ addresses }) => {
  return (
    <>
      <AddressHeading>Saved Addresses</AddressHeading>
      <AddressWrapper>
        {addresses.map(address => {
          return (
            <AddressCard
              key={`${address.node.name}${address.node.address1}${address.node.city}${address.node.country}${address.node.zip}`}
            >
              <span>{address.node.name}</span>
              <span>{address.node.address1}</span>
              <span>{address.node.city}</span>
              <span>{address.node.country}</span>
              <span>{address.node.zip}</span>
            </AddressCard>
          )
        })}
        <Add>add</Add>
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

  span {
    display: block;
  }
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
`
