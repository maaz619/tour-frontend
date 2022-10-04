import React from "react"
import Navbar from "./Navbar"

const Overview = ({ state, id }) => {
  console.log(id)
  console.log(state.id)
  return (
    <>
      <Navbar />
      {state.id === id ? (
        <>
          <h1>{state.name}</h1>
          <h1>{state.distance}</h1>
          <h1>{state.duration}</h1>
          <h1>{state.difficulty}</h1>
          <h1>{state.price}</h1>
          <h1>{state.ratingAverage}</h1>
          <h1>{state.ratingQuantity}</h1>
          <h1>{state.summary}</h1>
          <h1>{state.durationWeeks}</h1>
          {state.review &&
            state.reviews.map((el: any, key: string) => {
              return <h1 key={key}>rating:{el.rating}</h1>
            })}
        </>
      ) : !state.id ? (
        <h1>You need to login for detailed view</h1>
      ) : (
        <h1>please provide a valid tour id</h1>
      )}
    </>
  )
}

export default Overview
