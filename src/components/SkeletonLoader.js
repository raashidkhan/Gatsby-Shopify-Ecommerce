import React from "react"
import { Skeleton } from "../utils"
const SkeletonLoader = () => {
  return (
    <Skeleton delay="1" delay2="2" delay3="3">
      <div></div>
      <div></div>
      <div></div>
    </Skeleton>
  )
}

export default SkeletonLoader
