import Navbar from "../components/Navbar"
import React from "react"
import { TOUR_URL } from "../services/service"
import axios from "axios"
import Card from "../components/Card"
import "../styles/global.css"

const IndexPage = () => {
  const [tour, setTour] = React.useState<any>()
  const [timer, setTimer] = React.useState<boolean>(false)
  const getTours = async () => {
    try {
      let res = await axios.get(TOUR_URL)
      let data = await res.data
      setTour(data.data.doc)
    } catch (err: any) {
      console.log(err.message)
    }
  }
  React.useEffect(() => {
    getTours()
  }, [])
  console.log(tour)
  return (
    <div>
      <Navbar />
      <div className=" sm:flex flex-wrap px-6">
        {tour &&
          tour?.map((el: any, key: any) => {
            return <Card key={key} prop={el} timer={timer} />
          })}
      </div>
    </div>
  )
}

export default IndexPage
