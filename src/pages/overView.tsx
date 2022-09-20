import React from "react"

const overView = ({ location }) => {
  const { state = {} } = location
  const { name } = state
  return <div>This is {name}</div>
}

export default overView
