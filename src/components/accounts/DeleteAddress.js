import React, { useContext } from "react"
import StoreContext from "../../context/store"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { SmallButton } from "../../utils"

const CUSTOMER_DELETE_ADDRESS = gql`
  mutation customerAddressDelete($id: ID!, $customerAccessToken: String!) {
    customerAddressDelete(id: $id, customerAccessToken: $customerAccessToken) {
      customerUserErrors {
        code
        field
        message
      }
      deletedCustomerAddressId
    }
  }
`

const DeleteAddress = ({ id }) => {
  const { customerAccessToken } = useContext(StoreContext)

  return (
    <Mutation mutation={CUSTOMER_DELETE_ADDRESS}>
      {customerAddressDelete => {
        return (
          <SmallButton
            className="button"
            onClick={() => {
              customerAddressDelete({
                variables: {
                  id: id,
                  customerAccessToken: customerAccessToken.accessToken,
                },
              }).then(result => {
                typeof window !== "undefined" && window.location.reload()
              })
            }}
          >
            Remove
          </SmallButton>
        )
      }}
    </Mutation>
  )
}

export default DeleteAddress
