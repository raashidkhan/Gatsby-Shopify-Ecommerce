import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import StoreContext, { defaultStoreContext } from "../context/store"
const isBrowser = typeof window !== "undefined"

const Provider = ({ children }) => {
  const [store, updateStore] = useState(defaultStoreContext)
  const [checkout, setCheckout] = useState(defaultStoreContext.checkout)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [loading, setLoading] = useState(defaultStoreContext.loading)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const getLocalStorage = value => {
    try {
      return JSON.parse(localStorage.getItem(value))
    } catch (e) {
      console.error(e)
    }
  }
  const createNewCheckout = async () => {
    try {
      const newCheckout = await store.client.checkout.create()
      isBrowser &&
        localStorage.setItem("checkout_Id", JSON.stringify(newCheckout.id))
      return newCheckout
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    const initializeCheckout = async () => {
      try {
        // Check if browser exits
        const isBrowser = typeof window !== "undefined"
        // Check if id exits in local storage
        const existingCheckoutId = isBrowser
          ? JSON.parse(localStorage.getItem("checkout_Id"))
          : null

        let newCheckout = null
        if (existingCheckoutId) {
          // if id exits , fetch id from shopify
          newCheckout = await store.client.checkout.fetch(existingCheckoutId)
          if (newCheckout.completedAt) {
            newCheckout = await createNewCheckout()
          }
        } else {
          //else create a new checkout id
          newCheckout = await createNewCheckout()
        }
        // Set id in state
        setCheckout(newCheckout)
      } catch (e) {
        console.error(e)
      }
    }
    initializeCheckout()
  }, [])
  return (
    <StoreContext.Provider
      value={{
        store,
        checkout,
        isCartOpen,
        toggleCart,
        loading,
        customerAccessToken: getLocalStorage("customerAccessToken"),
        setValue: value => {
          isBrowser &&
            localStorage.setItem("customerAccessToken", JSON.stringify(value))
          updateStore(state => {
            return { ...state, customerAccessToken: value }
          })
        },
        buyNow: async (productID, quantity, setIsLoading) => {
          setIsLoading(true)
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
        addToCart: async (variantId, quantity, setIsLoading, setIsLoaded) => {
          setIsLoading(true)

          const lineItem = [
            {
              variantId: variantId,
              quantity: quantity,
            },
          ]

          const newCheckout = await store.client.checkout.addLineItems(
            checkout.id,
            lineItem
          )
          setIsLoaded(true)
          setTimeout(() => {
            setIsLoaded(false)
          }, 1000)
          setIsLoading(false)
          setCheckout(newCheckout)
        },
        removeFromCart: async (lineItemId, setIsLoading) => {
          setIsLoading(true)
          const newCheckout = await store.client.checkout.removeLineItems(
            checkout.id,
            [lineItemId]
          )
          setIsLoading(false)
          setCheckout(newCheckout)
        },
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default Provider
