import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import StoreContext, { defaultStoreContext } from "../context/store"
const isBrowser = typeof window !== "undefined"

const Provider = ({ children }) => {
  const [store, updateStore] = useState(defaultStoreContext)
  const getLocalStorage = value => {
    try {
      return JSON.parse(localStorage.getItem(value))
    } catch (e) {
      return ""
    }
  }

  useEffect(() => {
    const initializeCheckout = async () => {
      const isBrowser = typeof window !== "undefined"
      const existingCheckoutId = isBrowser
        ? localStorage.getItem("shopify_checkout_id")
        : null

      const setCheckoutInState = checkout => {
        if (isBrowser) {
          localStorage.setItem(
            "shopify_checkout_id",
            JSON.stringify(checkout.id)
          )
        }
        updateStore(state => {
          return { ...state, checkout }
        })
      }

      const createNewCheckout = () => store.client.checkout.create()
      const fetchCheckout = id => store.client.checkout.fetch(id)

      if (existingCheckoutId) {
        try {
          const checkout = await fetchCheckout(existingCheckoutId)

          // Make sure this cart hasn’t already been purchased.
          if (!checkout.completedAt) {
            setCheckoutInState(checkout)
            return
          }
        } catch (e) {
          localStorage.setItem("shopify_checkout_id", null)
        }
      }
      const newCheckout = await createNewCheckout()
      setCheckoutInState(newCheckout)
    }
    initializeCheckout()
  }, [store.client.checkout])
  return (
    <StoreContext.Provider
      value={{
        store,
        customerAccessToken: getLocalStorage("customerAccessToken"),
        setValue: value => {
          isBrowser &&
            localStorage.setItem("customerAccessToken", JSON.stringify(value))
          updateStore(state => {
            return { ...state, customerAccessToken: value }
          })
        },
        buyNow: async (productID, quantity) => {
          const checkoutId = await store.client.checkout.create()
          const lineItem = [
            {
              variantId: productID,
              quantity: quantity,
            },
          ]
          const addItem = await store.client.checkout.addLineItems(
            checkoutId.id,
            lineItem
          )

          navigate(addItem.webUrl)
        },
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default Provider
