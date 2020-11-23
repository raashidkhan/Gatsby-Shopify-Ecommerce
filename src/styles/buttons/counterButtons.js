import React, { useState } from "react"

const CounterButtons = props => {
  const [count, setCount] = useState(props.count)
  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
    if (count <= 0) {
      setCount(0)
      console.log("hello")
    }
  }
  return (
    <>
      {count}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  )
}
export default CounterButtons
