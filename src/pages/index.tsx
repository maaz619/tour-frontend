import Navbar from "../components/Navbar"
import React from "react"
import { tourUrl } from "../services/service"
import axios from "axios"
import Card from "../components/Card"
import "../styles/global.css"

const IndexPage = () => {
  const [tour, setTour] = React.useState<any>()
  const [timer, setTimer] = React.useState<boolean>(false)
  const getTours = async () => {
    try {
      let res = await axios.get(tourUrl)
      let data = await res.data
      setTour(data.data.doc)
    } catch (err: any) {
      console.log(err.message)
    }
  }
  const delay = () => {
    setTimeout(() => {
      setTimer(true)
    }, 2000)
  }
  React.useEffect(() => {
    getTours()
    delay()
  }, [])
  console.log(tour)
  return (
    <div>
      <Navbar />
      {timer ? (
        <div className=" sm:flex flex-wrap px-6">
          {tour &&
            tour?.map((el: any, key: any) => {
              return <Card key={key} prop={el} timer={timer} />
            })}
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  )
}

export default IndexPage
