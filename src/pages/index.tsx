import React from "react"

import { tourUrl } from "../services/service"

const IndexPage = () => {
  const [tour, setTour] = React.useState<any>()
  const getTours = async () => {
    try {
      let res = await fetch(tourUrl)
      let data = await res.json()
      setTour(data.data.doc)
    } catch (err: any) {
      console.log(err.message)
    }
  }
  React.useEffect(() => {
    getTours
  }, [tour])
  console.log(tour)
  return (
    <div>
      <h1>Hello world!</h1>
      <button onClick={getTours}>fetch</button>
      {tour &&
        tour.map((el: any, key: any) => {
          return <li key={key}>{el.name}</li>
        })}
    </div>
  )
}

export default IndexPage
